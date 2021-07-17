import { useEffect } from "react";
import { useState } from "react";
import { Button } from "../components";

const Home = () => {
	let [small, setSmall] = useState(false);
	let [burgerClicked, setBurgerClicked] = useState(true);

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
					<a href='#home' onClick={() => window.scrollTo(0, 0)}>
						Home
						<div className='bottom'></div>
					</a>
					<a href='#about'>
						About Us
						<div className='bottom'></div>
					</a>
					<a href='#contact'>
						Contact
						<div className='bottom'></div>
					</a>
					<div
						id='burger'
						className={burgerClicked ? "clicked" : ""}
						onClick={() => {
							setBurgerClicked(burgerClicked ? false : true);
							console.log("clicked");
						}}
					>
						<div className='bun'>
							<div className='burgers' />
							<div className='burgers' />
							<div className='burgers' />
						</div>
					</div>
				</div>
			</header>

			<div className='container'>
				<section id='home'>
					<img src='/images/PNG/title.png' alt='logo text' id='title' />

					<div id='buttonContainer'>
						<Button id='apple' onClick={() => alert("Not available yet")}>
							App Store
						</Button>
						<Button id='playstore' onClick={() => alert("Not available yet")}>
							Google Play
						</Button>
					</div>

					<div id='imageOverlay'></div>
					<img src='/images/PNG/splash.jpg' alt='' id='headerImage' />
				</section>
				<section id='about'>
					<svg
						preserveAspectRatio='none'
						width='100%'
						height='5%'
						viewBox='0 0 100 5'
					>
						<path d='M 0 5 L 100 5 L 100 0 L 0 5' fill='#151515'></path>
					</svg>
					<h1>About Us</h1>
				</section>

				<section className='footer'>
					<h1>&copy; Nerdee ltd {new Date().getFullYear()}</h1>
				</section>
			</div>
		</>
	);
};

export default Home;
