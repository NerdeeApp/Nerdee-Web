import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie/es6';

interface Props {}

let cookies = new Cookies();
let domain = 'api.nerdee.io';

const Dashboard: FC<Props> = (props: any) => {
	if (!cookies.get('heavy_auth_token')) return <Redirect path='*' to='/login/' />;

	setInterval(() => {
		if (!cookies.get('heavy_auth_token')) window.location.href = '/login';
	}, 1000);

	let logout = () => {
		(async () => {
			await fetch(`https://${domain}/users/action/logout`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
				body: JSON.stringify({
					heavy_auth_token: await cookies.get('heavy_auth_token')
				}),
				credentials: 'include'
			});
		})();
	};

	return (
		<div>
			<header>
				<title>Nerdee Dashboard</title>
				<h1>Hello world</h1>
				<br />
				<br />
				<br />
				<button onClick={logout}>Log Out</button>
			</header>
		</div>
	);
};

export default Dashboard;
