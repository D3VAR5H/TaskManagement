// create a typescript component that will be used as the header, the breadcrumbs Task Management > Home and task Management > Edit based on the route
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();

	return (
		<div>
			<Link to="/">Task Management</Link> &gt; {location.pathname === '/task/:id' ? 'Edit' : 'Home'}
		</div>
	);
};

export default Header;
