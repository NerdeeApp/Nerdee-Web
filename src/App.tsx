import React from 'react';
import './style/main.scss';
import './style/global.scss';
import './style/preloader.scss';
// import BlobsMobile from './images/SVG/BlobsMobile.svg';
// import { Navbar, Preloader } from './components';

function App() {
	return (
		<div className='App'>
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

				<button id='joinNow' onClick={test}>
					JOIN NOW
				</button>
			</div>
		</div>
	);
}

export default App;

const test = () => {
	alert('This site is not working yet. Please come back soon for testing');
};
