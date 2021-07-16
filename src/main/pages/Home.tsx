import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import useScrollSnap from "react-use-scroll-snap";

const Home = () => {
	let [small, setSmall] = useState(false);
	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener("scroll", () => {
				setSmall(window.pageYOffset > 200);
			});
		}
	}, []);

	return (
		<>
			<header className={small ? "small" : ""}>
				<div id='left'>
					<a href='/'>
						<img src='/images/SVG/logo.svg' alt='Logo' title='Nerdee' />
					</a>
				</div>
				<div id='right'>
					<a href='#'>
						Home
						<div className='bottom'></div>
					</a>
					<a href='#'>
						About Us
						<div className='bottom'></div>
					</a>
					<a href='#'>
						Contact
						<div className='bottom'></div>
					</a>
				</div>
			</header>

			<div className='container'>
				<section>
					<img src='/images/PNG/title.png' alt='logo text' id='title' />
					<div id='imageOverlay'></div>
					<img src='/images/PNG/splash.jpg' alt='' id='headerImage' />
				</section>
				<section>
					<h1>Content 1</h1>
				</section>
			</div>
		</>
	);
};

export default Home;
