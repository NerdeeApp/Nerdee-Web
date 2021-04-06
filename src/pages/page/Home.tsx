import React, { Component } from 'react';

export class Home extends Component {
	render() {
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
}

const test = () => {
	alert('This site is not working yet. Please come back soon for testing');
};
