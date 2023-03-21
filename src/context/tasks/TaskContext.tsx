// create a typescript file that handles every logic for the context and provides with hooks to use the context
import React, { createContext, useReducer, useContext } from 'react';

// interface for task object
export interface Task {
	id: string;
	title: string;
	description: string;
	status: 'ToDo' | 'InProgress' | 'InQA' | 'Done';
}

enum TaskReducerActions {
	ADD_TASK = 'ADD_TASK',
	REMOVE_TASK = 'REMOVE_TASK',
	EDIT_TASK = 'EDIT_TASK',
}

type TReducer = { action: TaskReducerActions.ADD_TASK | TaskReducerActions.REMOVE_TASK | TaskReducerActions.EDIT_TASK; payload: Task };

const TaskContext = createContext({ tasks: [] as Task[] });
const TaskActions = createContext({ addTask: (task: Task) => {}, removeTask: (id: string) => {}, editTask: (task: Task) => {} });

const TaskReducer: React.Reducer<Task[], TReducer> = (state, { action, payload }) => {
	switch (action) {
		case TaskReducerActions.ADD_TASK:
			return [...state, payload];
		case TaskReducerActions.REMOVE_TASK:
			return state.filter((task) => task.id !== payload.id);
		case TaskReducerActions.EDIT_TASK:
			return state.map((task) => (task.id === payload.id ? payload : task));
		default:
			return state;
	}
};

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
	const [tasks, dispatch] = useReducer(TaskReducer, []);

	const addTask = (task: Task): void => {
		dispatch({ action: TaskReducerActions.ADD_TASK, payload: task });
	};

	const removeTask = (id: string): void => {
		dispatch({ action: TaskReducerActions.REMOVE_TASK, payload: { id, title: '', description: '', status: 'Done' } });
	};

	const editTask = (task: Task): void => {
		dispatch({ action: TaskReducerActions.EDIT_TASK, payload: task });
	};

	return (
		<TaskContext.Provider value={{ tasks }}>
			<TaskActions.Provider value={{ addTask, removeTask, editTask }}>{children}</TaskActions.Provider>
		</TaskContext.Provider>
	);
};

export const useTask = () => useContext(TaskContext);
export const useTaskActions = () => useContext(TaskActions);

export default TaskProvider;
