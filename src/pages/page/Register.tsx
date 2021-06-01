import { FC, useState } from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {} from '@material-ui/pickers';
import '../../style/login.scss';

const Register: FC = () => {
	const [ step, setStep ] = useState(1);
	// eslint-disable-next-line
	const [ error, setError ] = useState(false);

	const onNext = () => {
		setStep(step + 1);
		return true;
	};

	const onReturn = () => {
		return setStep(step - 1);
	};

	let handleChange = (property: any) => (e: any) => {};

	let checkDetail = (prop: string) => {
		onNext();
		return true;
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
				{error ? <Alert security='error'>Error</Alert> : null}
				{(() => {
					switch (step) {
						case 1:
							return (
								<div>
									<form id='l__frm'>
										<TextField
											id='email'
											label='Email'
											variant='outlined'
											type='email'
											name='email'
											required
											className='Field'
											onChange={handleChange('email')}
										/>
										<br />
										<Button
											onClick={() => checkDetail('email')}
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
											onChange={handleChange('fName')}
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
											onChange={handleChange('lName')}
										/>
										<br />
										<Button
											onClick={onReturn}
											variant='contained'
											size='large'
											color='secondary'
											name='firstName'
											className='Field'
										>
											Previous
										</Button>
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
											id='password'
											label='Password'
											variant='outlined'
											type='password'
											name='password'
											required
											className='Field'
											onChange={handleChange('password')}
										/>
										<br />
										<Button
											onClick={onReturn}
											variant='contained'
											size='large'
											color='secondary'
											name='firstName'
											className='Field'
										>
											Previous
										</Button>
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
						case 4:
							return (
								<div>
									<form id='l__frm'>
										<TextField id='select' label='Sexuality' name='sexuality' select>
											<MenuItem value='heterosexual'>Heterosexual/Striaght</MenuItem>
											<MenuItem value='bisexual'>Bisexual</MenuItem>
											<MenuItem value='homosexual'>Homosexual</MenuItem>
										</TextField>
										<br />
										<TextField id='select' label='Gender' name='gender' select>
											<MenuItem value='Male'>Male</MenuItem>
											<MenuItem value='Female'>Female</MenuItem>
											<MenuItem value='other'>Other</MenuItem>
										</TextField>
										<br />
										<Button
											onClick={onReturn}
											variant='contained'
											size='large'
											color='secondary'
											name='firstName'
											className='Field'
										>
											Previous
										</Button>
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
						case 5:
							return (
								<div>
									<form id='l__frm'>
										<TextField
											id='gender'
											label='Gender'
											variant='outlined'
											type='text'
											name='gender'
											required
											className='Field'
											onChange={handleChange('gender')}
										/>
										<br />
										<TextField
											id='sexuality'
											label='Gender'
											variant='outlined'
											type='text'
											name='gender'
											required
											className='Field'
											onChange={handleChange('gender')}
										/>
										<br />
										<Button
											onClick={onReturn}
											variant='contained'
											size='large'
											color='secondary'
											name='firstName'
											className='Field'
										>
											Previous
										</Button>
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
