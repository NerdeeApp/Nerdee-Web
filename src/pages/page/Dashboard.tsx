import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie/es6';

import '../../style/dashboard.scss';

interface Props {}

let cookies = new Cookies();
let domain = 'api.nerdee.io';

const Dashboard: FC<Props> = (props: any) => {
	if (!cookies.get('heavy_auth_token')) return <Redirect path='*' to='/login' />;

	setInterval(() => {
		if (!cookies.get('heavy_auth_token')) window.location.href = '/login';
	}, 100);

	let logout = () => {
		(async () => {
			await fetch(`https://${domain}/users/action/logout`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
				body: JSON.stringify({
					heavy_auth_token: await cookies.get('heavy_auth_token'),
				}),
				credentials: 'include',
			});
		})();
	};

	return (
		<div>
			<header>
				<title>Nerdee Dashboard</title>
			</header>

			<div className='container'>
				text goes here
				<br />
				<br />
				<button onClick={logout}>Logout</button>
			</div>
		</div>
	);
};

export default Dashboard;
