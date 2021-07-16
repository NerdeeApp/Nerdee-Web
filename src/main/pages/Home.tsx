import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import useScrollSnap from "react-use-scroll-snap";
import { Button } from "../components";

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

					<div id='buttonContainer'>
						<Button id='apple' onClick={() => alert("Not available yet")}>
							Apple
						</Button>
						<Button id='playstore' onClick={() => alert("Not available yet")}>
							Google Play
						</Button>
					</div>

					<div id='imageOverlay'></div>
					<img src='/images/PNG/splash.jpg' alt='' id='headerImage' />
				</section>
				<section>
					<svg
						preserveAspectRatio='none'
						width='100%'
						height='5%'
						viewBox='0 0 100 5'
					>
						<path d='M 0 5 L 100 5 L 100 0 L 0 5' fill='#151515'></path>
					</svg>
					<h1 id='aboutUs'>About Us</h1>
				</section>
			</div>
		</>
	);
};

export default Home;
