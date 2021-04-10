import React, { Component } from 'react';
import { PopupModal } from '../../components';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var hour = d.getHours();
var min = d.getMinutes();
var ms = d.getMilliseconds();

export class Home extends Component {
	render() {
		return (
			<div className='App'>
				{cookies.set('test', 'test', {
					path: '/',
					sameSite: 'strict',
					expires: new Date(year, month + 1, day, hour, min, ms)
				})}

				<title>Nerdee Home</title>
				<header className='App-header' />
				<div id='backgrd'>
					<h1>
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
					<button id='joinNow' onClick={test}>
						JOIN NOW
					</button>

					<PopupModal
						title='This site is not currently live!'
						content='This site is not currently live as it is in development. Please return soon as it will be active as soon as possible.'
					/>
				</div>

				{console.log(cookies.get('test'))}
			</div>
		);
	}
}

let test = () => {
	alert('This site is currently in development so is not live. Please return soon to test');
};
