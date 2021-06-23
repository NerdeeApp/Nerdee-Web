import { FC, SyntheticEvent, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Alert } from '../../components';

import '../../style/login.scss';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie/es6';

let cookies = new Cookies();

interface Props {}

const Login: FC<Props> = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ redirect, setRedirect ] = useState(false);
	const [ valid, setValid ] = useState(true);
	const [ message, setMessage ] = useState('');
	const [ tries, setTries ] = useState(0);

	let getMessage = () => {
		setTries(tries + 1);
		if (tries < 3) return setMessage('Invalid username/email or password.');

		let insults = [
			'Thanks to your incapability to comprehend the correct login details, I was unable to log you in. This can be fixed by using the correct details next time!',
			'Well done, the login details are incorrect, again.',
			'Do you remember them yet?',
			'How many tries will it take?',
			'Lets try this one last time.',
			'Try a cup of coffee',
			'Have you tried drinking some tea or coffee? It might help.',
			'Tried enough yet?',
			'Done yet?',
			'I have all day! Try again if you want.',
			'Keep trying, it might work at some point.',
			"Have you tried 'password123'?",
			'Try using the password you use for everything.',
			'Have you tried (insert password manager here)? It may speed this up for next time.',
			'Done?',
		];

		let insult = insults[Math.floor(Math.random() * insults.length)];
		return setMessage(insult);
	};

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();

		await fetch(`https://api.nerdee.io/users/action/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'https://nerdee.io',
				'Access-Control-Allow-Credentials': 'true',
			},
			body: JSON.stringify({
				username,
				password,
			}),
			credentials: 'include',
		})
			.then((res) => {
				res.json().then((data) => {
					if (!data.Success) {
						getMessage();
						return setValid(false);
					}

					setRedirect(true);
				});
			})
			.catch((err) =>
				console.log(
					`%cError 500. Internal Server Error:- ${JSON.stringify(err)}`,
					'color: red; font-weight: bold;'
				)
			);
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
				{valid ? null : <Alert type='error'>{message}</Alert>}
				<br />
				<br />
				<form onSubmit={submit} id='l__frm'>
					<TextField
						name='username'
						id='username'
						label='Username or Email'
						variant='outlined'
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
						variant='outlined'
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
					Need an Account? <a href='/register'>Register</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
