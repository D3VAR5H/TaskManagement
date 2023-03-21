//implement a browser router to implement two pages, one to display the list of tasks and other page to edit a task from it.
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import BaseLayout from './layouts/BaseLayout';

import TaskHome from './pages/Tasks';
import TaskEdit from './pages/Tasks/TaskEdit';

const pageList = [
	{ id: 1, path: '/', element: <TaskHome /> },
	{ id: 2, path: '/task/:id', element: <TaskEdit /> },
];

const App = () => {
	return (
		<div className="App">
			<Routes>
				{pageList.map((page) => (
					<Route key={page.id} path={page.path} element={<BaseLayout>{page.element}</BaseLayout>} />
				))}
			</Routes>
		</div>
	);
};

export default App;

