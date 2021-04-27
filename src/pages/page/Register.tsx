import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import {} from '@material-ui/pickers';

const domain = 'api.nerdee.io';

export class Register extends Component {
	render() {
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
					<p id='red'>This does not work yet so dont use</p>
					<form action={`https://${domain}/users/register`} method='POST' id='l__frm'>
						<TextField
							id='firstName'
							label='First Name'
							variant='filled'
							type='text'
							name='firstName'
							required
						/>
						<br />
						<br />
						<TextField
							id='lastName'
							label='Last Name'
							variant='filled'
							type='text'
							name='lastName'
							required
						/>
						<br />
						<br />
						<TextField
							id='phoneNumber'
							label='Phone Number (No Area Code)'
							variant='filled'
							type='number'
							name='phone'
							required
						/>
						<br />
						<br />
						<TextField id='email' label='Email' variant='filled' type='text' name='email' required />
						<br />
						<br />
						<TextField
							id='password'
							label='Password'
							variant='filled'
							type='password'
							name='password'
							required
						/>
						<br />
						<br />
						<TextField
							id='dob'
							label='Date of Birth'
							variant='filled'
							type='date'
							name='password'
							required
						/>
						<br />
						<br />
						<TextField
							id='password'
							label='Password'
							variant='filled'
							type='password'
							name='password'
							required
						/>
						<br />
						<br />
						<TextField
							id='password'
							label='Password'
							variant='filled'
							type='password'
							name='password'
							required
						/>
						<br />
						<br />
						<TextField
							id='password'
							label='Password'
							variant='filled'
							type='password'
							name='password'
							required
						/>
						<br />
						<br />
						<TextField
							id='password'
							label='Password'
							variant='filled'
							type='password'
							name='password'
							required
						/>
						<br />
						<br />
						<TextField
							id='password'
							label='Password'
							variant='filled'
							type='password'
							name='password'
							required
						/>
						<br />
						<br />
						<TextField
							id='password'
							label='Password'
							variant='filled'
							type='password'
							name='password'
							required
						/>
						<br />
						<br />
						<Button variant='contained' size='large' color='primary' name='firstName' type='submit'>
							Register
						</Button>
					</form>
					<br />
					<a href='/login'>Login</a>
				</div>
			</div>
		);
	}
}
