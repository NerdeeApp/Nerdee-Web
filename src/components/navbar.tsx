import React, { FC, useState } from 'react';

export const Navbar: FC<any> = () => {
	const [ sideNavState, setSideNavState ] = useState(false);

	const loginSend = () => {
		return (window.location.href = '/login');
	};

	const registerSend = () => {
		return (window.location.href = '/register');
	};

	const slideIn = () => {
		if (sideNavState) return setSideNavState(false);

		setSideNavState(true);
	};

	return (
		<div>
			<nav>
				<a href='/' id='nav__logo'>
					<img src='/images/SVG/logo.svg' alt='' />
				</a>

				<div className='right'>
					<div className='default'>
						<button className='nav__notbutton' id='nav__register' onClick={registerSend} tabIndex={0}>
							Register
							<div className='hover_border__bottom' />
						</button>
						<button className='nav__notbutton' id='nav__login' onClick={loginSend} tabIndex={0}>
							Login
							<div className='hover_border__bottom' />
						</button>
					</div>
				</div>

				<div className='burger' onClick={slideIn}>
					<div className='burger_bar' />
					<div className='burger_bar' />
					<div className='burger_bar' />
				</div>
			</nav>

			<div className='side_nav' id={sideNavState ? '' : 'hide'}>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/login'>Login</a>
					</li>
					<li>
						<a href='/register'>Register</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
