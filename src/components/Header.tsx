// create a typescript component that will be used as the header, the breadcrumbs Task Management > Home and task Management > Edit based on the route
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();

	return (
		<div style={{ background: '#1776ba', color: '#FFFFFF', fontSize: 22, padding: "8px 24px" }}>
			<Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
				Task Management
			</Link>{' '}
			&gt; {location.pathname === '/task' ? 'Edit' : 'Home'}
		</div>
	);
};

export default Header;
