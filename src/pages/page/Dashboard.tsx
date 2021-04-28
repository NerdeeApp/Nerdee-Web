import React, { useState, FC, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie/es6';

interface Props {}

export const Dashboard: FC<Props> = (props: any) => {
	const [ name, setName ] = useState('');

	useEffect(() => {
		(async () => {
			const cookies = new Cookies();
			if (!cookies.get('heavy_auth_token')) return <Redirect to='/login' />;

			setName('Nothing');
		})();
	});

	return <h1>Hello, {name} </h1>;
};
