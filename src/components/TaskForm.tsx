import React, { useId, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MenuItem, Select } from '@mui/material';
import { FiPlus, FiEdit } from 'react-icons/fi';

import { useTaskActions } from '../context/tasks';

import { ITask } from '../types';
import { useNavigate } from 'react-router-dom';
interface ITaskFormProps {
	task?: ITask;
	edit?: boolean;
}

const TaskForm = ({ task: oldTask, edit }: ITaskFormProps) => {
	const taskId = useId();
	const [task, setTask] = useState<ITask>({
		id: oldTask?.id || taskId.toString(),
		title: oldTask?.title || '',
		description: oldTask?.description || '',
		status: oldTask?.status || 'ToDo',
	});
	const navigate = useNavigate();
	const { addTask, editTask } = useTaskActions();

	const handleSubmit = () => {
		if (edit) {
			editTask(task);
		} else {
			addTask(task);
		}
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left', marginTop: 16, padding: '0 24px' }}>
			<div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8 }}>{edit ? 'Edit Task' : 'Add a new Task'}</div>
			<TextField id="title" label="Title" variant="filled" value={task?.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
			<TextField
				id="description"
				label="Description"
				multiline
				rows={4}
				variant="filled"
				value={task?.description}
				onChange={(e) => setTask({ ...task, description: e.target.value })}
			/>
			{edit && (
				<Select
					id="status"
					autoWidth
					label="Status"
					value={task?.status}
					onChange={(e) => setTask({ ...task, status: e.target.value as ITask['status'] })}
					variant="filled">
					{['ToDo', 'InProgress', 'InQA'].includes(oldTask?.status ?? 'ToDo') && <MenuItem value="ToDo">ToDo</MenuItem>}
					{['ToDo', 'InProgress'].includes(oldTask?.status ?? 'ToDo') && <MenuItem value="InProgress">InProgress</MenuItem>}
					{['InProgress', 'InQA'].includes(oldTask?.status ?? 'ToDo') && <MenuItem value="InQA">InQA</MenuItem>}
					{['InQA', 'Done'].includes(oldTask?.status ?? 'ToDo') && <MenuItem value="Done">Done</MenuItem>}
				</Select>
			)}
			<div style={{ display: 'flex', gap: 8 }}>
				<Button style={{ flexGrow: 1 }} onClick={handleSubmit} variant="contained" startIcon={edit ? <FiEdit /> : <FiPlus />}>
					{edit ? 'Edit' : 'Add'}
				</Button>
				{edit && (
					<Button style={{ flexGrow: 1, background: '#e9eaec', color: '#000000' }} variant="contained" onClick={() => navigate(-1)}>
						Cancel
					</Button>
				)}
			</div>
		</div>
	);
};

export default TaskForm;
