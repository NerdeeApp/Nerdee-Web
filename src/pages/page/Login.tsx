import { FC, SyntheticEvent, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import '../../style/login.scss';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie/es6';

let cookies = new Cookies();

interface props {}
const domain = 'api.nerdee.io';

const Login: FC<props> = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ redirect, setRedirect ] = useState(false);

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();

		await fetch(`https://${domain}/users/action/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
			body: JSON.stringify({
				username,
				password,
			}),
			credentials: 'include',
		});

		setRedirect(true);
	};

	if (redirect) {
		return <Redirect to='/home/' />;
	}

	if (cookies.get('heavy_auth_token')) return <Redirect to='/home/' />;

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
				<p id='red'>This is a devloper only page currently. Please come back soon</p>
				<form onSubmit={submit} id='l__frm'>
					<TextField
						name='username'
						id='username'
						label='Username or Email'
						variant='filled'
						type='text'
						autoComplete='username'
						onChange={(e) => setUsername(e.target.value)}
						required
						className='Field'
					/>
					<br />
					<br />
					<TextField
						name='password'
						id='password'
						label='Password'
						variant='filled'
						type='password'
						autoComplete='current-password'
						onChange={(e) => setPassword(e.target.value)}
						required
						className='Field'
					/>
					<br />
					<br />
					<Button
						className='Field'
						onClick={submit}
						name='sbmt'
						variant='contained'
						size='large'
						color='primary'
						type='submit'
					>
						Login
					</Button>
				</form>
				<br />
				<p id='need__acc'>
					Need an Account? <a href='/Register'>Register</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
