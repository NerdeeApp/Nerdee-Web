import React, { Component } from 'react';
import '../../style/error.scss';

export class Error404 extends Component {
	render() {
		return (
			<div className='App'>
				<title>Error 404</title>
				<header className='App-header' />
				<div id='backgrd'>
					<h1 className='error_title'>
						404 Not Found;<br />Have you found your date yet?
					</h1>
					<button id='joinNow' onClick={alrt}>
						Go Home
					</button>
				</div>
			</div>
		);
	}
}

let alrt = () => {
	return (window.location.href = '/');
};
