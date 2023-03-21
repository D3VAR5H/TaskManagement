// create a typescript file for base layout that includes the header and the children
import React, { ReactElement, ReactNode } from 'react';
import Header from '../components/Header';

const BaseLayout = ({ children }: { children: ReactNode }): ReactElement => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default BaseLayout;
