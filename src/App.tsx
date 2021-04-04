import React from 'react';
import './style/main.scss';
import './style/global.scss';
import './style/preloader.scss';
import Blobs from './images/SVG/Blobs.svg';
// import { Navbar, Preloader } from './components';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={Blobs} alt='Blobs' id='#blobs' />
			</header>
		</div>
	);
}

export default App;
