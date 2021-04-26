import React, { useState, FC, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

interface Props {}

export const Dashboard: FC<Props> = (props: any) => {
	const [ name, setName ] = useState('');

	useEffect(() => {
		(async () => {
			// const res = await fetch('https://localhost/users/action/auth', {
			// 	headers: { 'Content-Type': 'application/json' }
			// });

			// const cont = await res.json();

			setName('Nothing');
		})();
	});

	if (!name) {
		console.log('No');
		return <Redirect to='/login' />;
	}

	return <h1>Hello, {name} </h1>;
};
