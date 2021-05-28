import { FC, useState, SyntheticEvent } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {} from '@material-ui/pickers';
import Cookies from 'universal-cookie/es6';
import { Redirect } from 'react-router-dom';
import '../../style/login.scss';

let cookies = new Cookies();

const domain = 'api.nerdee.io';

const Register: FC = () => {
	const [ step, setStep ] = useState(1);
	const [ inputs, setInputs ] = useState({});

	const onNext = () => {
		return setStep(step + 1);
	};

	const onReturn = () => {
		return setStep(step + 1);
	};

	const handleChange = () => {
		setInputs({});

		return 0;
	};

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
				{(() => {
					switch (step) {
						default:
							return (
								<div>
									<form id='l__frm'>
										<TextField
											id='email'
											label='Email'
											variant='outlined'
											type='text'
											name='email'
											required
											className='Field'
										/>
										<br />
										<Button
											onClick={onNext}
											variant='contained'
											size='large'
											color='primary'
											name='firstName'
											className='Field'
										>
											Next
										</Button>
									</form>
									<br />
									<p id='need__acc'>
										Got an Account? <a href='/login'>Login</a>
									</p>
								</div>
							);
						case 1:
							return (
								<div>
									<form id='l__frm'>
										<TextField
											id='email'
											label='Email'
											variant='outlined'
											type='text'
											name='email'
											required
											className='Field'
										/>
										<br />
										<Button
											onClick={onNext}
											variant='contained'
											size='large'
											color='primary'
											name='firstName'
											className='Field'
										>
											Next
										</Button>
									</form>
									<br />
									<p id='need__acc'>
										Got an Account? <a href='/login'>Login</a>
									</p>
								</div>
							);
						case 2:
							return (
								<div>
									<form id='l__frm'>
										<TextField
											id='fName'
											label='First Name'
											variant='outlined'
											type='text'
											name='firstName'
											required
											className='Field'
										/>
										<br />
										<TextField
											id='lName'
											label='Last Name'
											variant='outlined'
											type='text'
											name='lastName'
											required
											className='Field'
										/>
										<br />
										<Button
											onClick={onNext}
											variant='contained'
											size='large'
											color='primary'
											name='firstName'
											className='Field'
										>
											Next
										</Button>
									</form>
									<br />
									<p id='need__acc'>
										Got an Account? <a href='/login'>Login</a>
									</p>
								</div>
							);
						case 3:
							return (
								<div>
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
										<Button
											onClick={onNext}
											variant='contained'
											size='large'
											color='primary'
											name='firstName'
											className='Field'
										>
											Next
										</Button>
									</form>
									<br />
									<p id='need__acc'>
										Got an Account? <a href='/login'>Login</a>
									</p>
								</div>
							);
					}
				})()}
			</div>
		</div>
	);
};

export default Register;
