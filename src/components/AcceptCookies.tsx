import { FC } from 'react';
import Cookies from 'universal-cookie/es6';

export const AcceptCookies: FC<any> = () => {
	let HideCookie = () => {
		let Cookie = new Cookies();

		Cookie.set('AcceptedCookies', true, { maxAge: 365 * 24 * 60 * 60 });

		document.getElementsByClassName('cookieHolder')[0].classList.toggle('hidden');
	};

	return (
		<div className='cookieHolder'>
			<div className='background' />
			<div className='CookieBanner'>
				<p>
					As required by law, our site notifies users of cookies used to improve your experience. Following
					GDPR guidelines, we will request for you to accept these cookies to make the site work properly.
				</p>
				<button onClick={HideCookie}>Accept</button>
			</div>
		</div>
	);
};
