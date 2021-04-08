import React, { Component } from 'react';
import { PopupModal } from '../../components';

export class Home extends Component {
	render() {
		return (
			<div className='App'>
				<title>Nerdee Home</title>
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

					<PopupModal
						title='This site is not currently live!'
						content='This site is not currently live as it is in development. Please return soon as it will be active as soon as possible.'
					/>
				</div>
			</div>
		);
	}
}

let test = () => {
	alert('This site is currently in development so is not live. Please return soon to test');
};
