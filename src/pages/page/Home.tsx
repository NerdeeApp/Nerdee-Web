import { Component } from 'react';
import '../../style/home.scss';

export default class Home extends Component {
	render() {
		return (
			<div className='App'>

				<title>Nerdee | The Dating App for Tech Enthusiasts</title>
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
					<button id='joinNow' onClick={alrt}>
						JOIN NOW
					</button>

					<img src='/images/icons/down.svg' alt='' id='scroll__down' onClick={scroll__down} />
				</div>

				<div id='about'>
					<h1 id='title'>ABOUT US</h1>
					<p id='info'>
						<span id="title__bar"><h2><b>FAQ</b></h2></span>
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
			</div>
		);
	}
}

let alrt = () => {
	return window.location.href = "/register"
};

let scroll__down = () => {
	let about = document.getElementById("about");

	about?.scrollIntoView({ behavior: "smooth", block: "start" })
};
