import React, { Component } from 'react';
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
				<div className='backgrd'>
					<h1>
						NERDEE<br />
						<span className='subtext'>
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
					<button className='joinNow' onClick={alrt}>
						JOIN NOW
					</button>

					<img src='/images/icons/down.svg' alt='' className='scroll__down' onClick={scroll__down} />
				</div>

				<div className='about'>
					<h1 className='title'>ABOUT US</h1>
					<p className='info'>
						<span className="title__bar"><h2><b>FAQ</b></h2></span>
						<b>Our Goals.</b>
						<br />
						Here at Nerdee, we aim for our clients to enjoy life with someone who has similar thoughts,
						similar interests and similar experiences without the extras that are unrelated to finding a
						good date.
						<br />
						<br />
						<b>What about my data? What will you use it for?</b>
						<br />
						We only use data for finding you your best partner, <b>ALL</b> data is end to end encrypted
						using the AES256 algorithm so none of your data is accessable without your permission.
						<br />
						<br />
						<b>Why was this app started?</b>
						<br />
						We started this app because of frustration in current dating apps such as tinder and okcupid
						matching people based on "Star sign compatability" and other methods that are completely
						unrelated to finding someone that you, the user will love and appreciate.
					</p>
				</div>

				{console.log(cookies.get('test'))}
			</div>
		);
	}
}

let alrt = () => {
	alert('This site is currently in development so is not live. Please return soon to test');
};

let scroll__down = () => {
	let about = document.getElementById("about");

	about?.scrollIntoView({ behavior: "smooth", block: "start" })
};
