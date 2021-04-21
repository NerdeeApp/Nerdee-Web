import { Component, FC } from 'react';
import { Button, TextField } from '@material-ui/core';

import '../../style/login.scss';

interface Props {
	setToken: any;
}

export const Login: FC<Props> = ({ setToken }) => {
	return (
		<div className='App'>
			<title>Nerdee Login</title>
			<header className='App-header' />
			<div id='backgrd' />

			<a href='/'>
				<h1 id='logo_word'>
					NERDEE<br />
					<span id='subtext'>
						<span>D</span>
						<span>A</span>
						<span>T</span>
						<span>E</span>
						<span> </span>
						<span>A</span>
						<span> </span>
						<span>T</span>
						<span>E</span>
						<span>C</span>
						<span>H</span>
					</span>
				</h1>
			</a>

			<div id='login__frame'>
				<h1 id='title'>LOGIN</h1>
				<p id='red'>This does not work yet so dont use</p>
				<form method='https://api.nerdee.io/users/id' id='l__frm'>
					<TextField id='username' label='Username' variant='filled' type='text' required />
					<br />
					<br />
					<TextField id='password' label='Password' variant='filled' type='password' required />
					<br />
					<br />
					<Button variant='contained' size='large' color='primary' type='submit'>
						Login
					</Button>
				</form>
				<br />
				<a href='/Register'>Register</a>
			</div>
		</div>
	);
};
