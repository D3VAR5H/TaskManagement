import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import { ITask } from '../types';
interface ITaskCardProps {
	task: ITask;
}

const TaskCard = ({ task }: ITaskCardProps) => {
	return (
		<div key={task.id} style={{ padding: 12, borderRadius: 4, background: '#FFFFFF' }}>
			<div style={{ fontSize: 18, fontWeight: 500 }}>{task.title}</div>
			<div style={{ fontSize: 14, marginTop: 12, height:"100px", overflow:"hidden" }}>{task.description}</div>
			<div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<div style={{ background: '#1776ba', color: '#FFFFFF', padding: "4px 20px", borderRadius: 4}}>{task.status}</div>
				<Link to="task" state={{ task }}>
					<FiEdit size={20} color="#000000" />
				</Link>
			</div>
		</div>
	);
};

export default TaskCard;
