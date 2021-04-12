import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

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
					<form action='https://api.nerdee.io/action/register' method='POST' id='l__frm'>
						<TextField id='username' label='Username' variant='filled' type='text' required />
						<br />
						<br />
						<TextField id='password' label='Password' variant='filled' type='password' required />
						<br />
						<br />
						<Button variant='contained' size='large' color='primary' type='submit'>
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
