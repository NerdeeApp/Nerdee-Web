import { Component } from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {} from '@material-ui/pickers';
import '../../style/login.scss';

export default class Register extends Component {
	state = {
		step: 1,

		// ? Form info
		email: '',
		username: '',
		fName: '',
		lName: '',
		phone: '',
		password: '',
		gender: '',
		sexuality: '',
		race: '',
		religion: '',
	};

	onNext = () => {
		const { step } = this.state;

		this.setState({
			step: step + 1,
		});
	};

	onReturn = () => {
		const { step } = this.state;

		this.setState({
			step: step - 1,
		});
	};

	handleChange = (input: any) => (e: any) => {
		this.setState({ [input]: e.target.value });
	};

	checkDetail = async (value: string) => {
		const { email } = this.state;
		const regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*");

		console.log(regex.test(email));
		return regex.test(email);
	};

	submit = async () => {
		let { username, password } = this.state;
		await fetch('https://api.nerdee.io/user/action/register', {
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
		});
	};

	render() {
		const { step, fName, lName, email, phone, password, gender, sexuality, race, religion } = this.state;
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
						switch (this.state.step) {
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
												onChange={this.handleChange('email')}
											/>
											<br />
											<Button
												onClick={() => this.checkDetail('email')}
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
												onChange={this.handleChange('fName')}
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
												onChange={this.handleChange('lName')}
											/>
											<br />
											<Button
												onClick={this.onReturn}
												variant='contained'
												size='large'
												color='secondary'
												name='firstName'
												className='Field'
											>
												Previous
											</Button>
											<Button
												onClick={this.onNext}
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
												onChange={this.handleChange('password')}
											/>
											<br />
											<Button
												onClick={this.onReturn}
												variant='contained'
												size='large'
												color='secondary'
												name='firstName'
												className='Field'
											>
												Previous
											</Button>
											<Button
												onClick={this.onNext}
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
												onClick={this.onReturn}
												variant='contained'
												size='large'
												color='secondary'
												name='firstName'
												className='Field'
											>
												Previous
											</Button>
											<Button
												onClick={this.onNext}
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
												onChange={this.handleChange('gender')}
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
												onChange={this.handleChange('gender')}
											/>
											<br />
											<Button
												onClick={this.onReturn}
												variant='contained'
												size='large'
												color='secondary'
												name='firstName'
												className='Field'
											>
												Previous
											</Button>
											<Button
												onClick={this.onNext}
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
	}
}
