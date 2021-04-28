import React, { useState, FC, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie/es6';

interface Props {}

let cookies = new Cookies();

export const Dashboard: FC<Props> = (props: any) => {
	if (!cookies.get('heavy_auth_token')) return <Redirect path='*' to='/home/' />;

	return (
		<div>
			<header>
				<title>Nerdee Dashboard</title>
				<h1>Hello world</h1>
			</header>
		</div>
	);
};
