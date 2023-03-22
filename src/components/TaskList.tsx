import React from 'react';

import { useTask } from '../context/tasks';
import TaskCard from './TaskCard';

const TaskList = () => {
	const { tasks } = useTask();
	console.log(tasks);

	return (
		<div style={{ marginTop: 20, background: '#1776ba', borderRadius: '12px' }}>
			<div style={{ padding: '12px 24px', fontSize: 16, color: '#ffffff', fontWeight: '600' }}>Tasks</div>
			<div style={{ background: '#a1ceed', borderRadius: '12px', padding: 24 }}>
				{tasks?.length === 0 ? (
					<div style={{ fontSize: 16, color: '#000000', fontWeight: '400', textAlign: 'center', margin:"50px 0" }}>
						You have nothing to do.
						<br />
						Go get some sleep
					</div>
				) : (
					<div style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(2, 1fr)' }}>
						{tasks.map((task) => (
							<TaskCard key={task.id} task={task} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default TaskList;
