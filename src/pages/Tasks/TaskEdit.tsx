// get task id from params and edit accordingly in typescript
import React from 'react';
import { useLocation } from 'react-router-dom';
import TaskForm from '../../components/TaskForm';

const TaskEdit = () => {
	const { state } = useLocation();
	return <TaskForm task={state?.task} edit />;
};

export default TaskEdit;
