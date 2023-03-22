export interface ITask {
	id: string;
	title: string;
	description: string;
	status: 'ToDo' | 'InProgress' | 'InQA' | 'Done';
}