import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BaseLayout from '../layouts/BaseLayout';

import TaskHome from '../pages/Tasks';
import TaskEdit from '../pages/Tasks/TaskEdit';

const pageList = [
	{ id: 1, path: '/', element: <TaskHome /> },
	{ id: 2, path: '/task', element: <TaskEdit /> },
];

const Router = () => {
	return (
		<Routes>
			{pageList.map((page) => (
				<Route key={page.id} path={page.path} element={<BaseLayout>{page.element}</BaseLayout>} />
			))}
		</Routes>
	);
};

export default Router;
