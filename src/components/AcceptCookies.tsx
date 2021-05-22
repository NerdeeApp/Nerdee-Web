import { FC, useState } from 'react';
import Cookies from 'universal-cookie/es6';

export const AcceptCookies: FC<any> = () => {
	let [ visible, setVisible ] = useState(true);

	let HideCookie = () => {
		let Cookie = new Cookies();

		Cookie.set('AcceptedCookies', true, { maxAge: 365 * 24 * 60 * 60 });

		document.getElementsByClassName('CookieBanner')[0].classList.toggle('hidden');
	};

	return (
		<div className='CookieBanner'>
			<p>
				As required by law, our site notifies users of cookies used to improve your experience. Following GDPR
				guidelines, we will request for you to accept these cookies to make the site work properly.
			</p>
			<button onClick={HideCookie}>Accept</button>
		</div>
	);
};
