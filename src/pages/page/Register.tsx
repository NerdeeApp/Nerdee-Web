import React, { FC, useState, SyntheticEvent } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {} from '@material-ui/pickers';
import Cookies from 'universal-cookie/es6';
import { Redirect } from 'react-router-dom';
import '../../style/login.scss';

let cookies = new Cookies();

const domain = 'api.nerdee.io';

const Register: FC = () => {
	//eslint-disable-next-line
	const [ username, setUsername ] = useState('');
	//eslint-disable-next-line
	const [ password, setPassword ] = useState('');
	const [ redirect, setRedirect ] = useState(false);
	const [ existsType, setExistsType ] = useState('');

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();

		await fetch(`https://${domain}/users/action/register`, {
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
			<title>Nerdee Register</title>
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
				<h1 id='title'>REGISTER</h1>
				<Alert severity='error'>An account with this {existsType} already exists!</Alert>
				<form id='l__frm'>
					<TextField
						id='email'
						label='Email'
						variant='outlined'
						type='text'
						name='firstName'
						required
						className='Field'
					/>
					<br />
					<br />
					<TextField
						id='firstName'
						label='First Name'
						variant='outlined'
						type='text'
						name='firstName'
						required
						className='Field'
					/>
					<br />
					<br />
					<TextField
						id='lastName'
						label='Last Name'
						variant='outlined'
						type='text'
						name='lastName'
						required
						className='Field'
					/>
					<br />
					<br />
					<Button
						onClick={onNext}
						variant='contained'
						size='large'
						color='primary'
						name='firstName'
						type='submit'
						className='Field'
					>
						Next
					</Button>
				</form>
				<br />
				<p id='need__acc'>
					Got an Account? <a href='/Login'>Login</a>
				</p>
			</div>
		</div>
	);
};

let onNext = () => {
	let email = document.getElementById('email');
	let fName = document.getElementById('firstName');
	let lName = document.getElementById('lastName');
};

export default Register;
