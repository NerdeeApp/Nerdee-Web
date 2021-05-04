import { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			<footer>
				<div id='left'>
					<h1>Links</h1>
					<a href='/'>Home</a>
					<a href='/Login/'>Login</a>
					<a href='/Register/'>Register</a>
					<a href='/Legal/Tos'>ToS</a>
					<a href='/Legal/Misc'>Legal</a>
				</div>
				<div id='right'>©️ Nerdee Ltd 2021 - {new Date().getFullYear()}</div>
			</footer>
		);
	}
}
