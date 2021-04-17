import React, { Component } from 'react';

export class Navbar extends Component {
	render() {
		return (
			<nav>
				<a href='/' id='nav__logo'>
					<img src='/images/SVG/logo.svg' alt='' />
				</a>

				{/* <ul className='nav__list'>
					<li className='nav__list_link'>
						<a href='/'>Home</a>
					</li>
					<li className='nav__list_link'>
						<a href='/'>Contact Us</a>
					</li>
					<li className='nav__list_link'>
						<a href='/'>About Us</a>
					</li>
				</ul>

				<div className='user__func'>
					<a href='/login' id='login'>
						login
					</a>
					<a href='/login' id='login'>
						register
					</a>
				</div> */}
			</nav>
		);
	}
}
