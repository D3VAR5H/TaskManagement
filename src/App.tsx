import React from 'react';

import Router from './router';

import './App.css';
import TaskProvider from './context/tasks/TaskContext';

const App = () => {
	return (
		<div className="App">
			<TaskProvider>
				<Router />
			</TaskProvider>
		</div>
	);
};

export default App;

