// get task id from params and edit accordingly in typescript
import React from 'react';
import { useParams } from 'react-router-dom';

const TaskEdit = () => {
	const { id } = useParams();

	return (
		<div>
			Task Edit
			<br />
			Task ID: {id}
		</div>
	);
};

export default TaskEdit;
