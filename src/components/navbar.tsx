import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export const Navbar: FC<any> = () => {
	const history = useHistory();

	const loginSend = () => {
		return (window.location.href = '/login');
	};

	const registerSend = () => {
		return (window.location.href = '/register');
	};

	return (
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
		</nav>
	);
};
