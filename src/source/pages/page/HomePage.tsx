import React from "react";
import { Component } from "react";
import "../../style/HomePage.scss";

class HomePage extends Component {
	state = {
		burger_active: false,
		logoHovered: false,
		contactModalVisible: false,
	};

	render() {
		return (
			<>
				<nav>
					<a
						href='/'
						className='logoLink'
						onMouseEnter={() => {
							this.setState({ logoHovered: !this.state.logoHovered });
						}}
						onMouseLeave={() => {
							this.setState({ logoHovered: !this.state.logoHovered });
						}}
					>
						{this.state.logoHovered ? (
							<img src='/images/PNG/titlePurple.png' className='logoWide' />
						) : (
							<img src='/images/PNG/title.png' className='logoWide' />
						)}

						<img src='/images/SVG/logo.svg' alt='logo' className='logoSmall' />
					</a>

					<a
						className='link_contact primary_button'
						onClick={() => {
							this.setState({
								contactModalVisible: !this.state.contactModalVisible,
							});
						}}
					>
						Contact
					</a>
				</nav>
				<div
					className={
						this.state.contactModalVisible
							? "contactModal visible"
							: "contactModal hidden"
					}
				>
					<div className='container'>
						<h1 id='contactTitle'>Contact Us</h1>
						<a className='primary_button'>Cancel</a>
						<a className='primary_button' onClick={() => alert("Jud gai")}>
							Send
						</a>
					</div>
					<div className='background'></div>
				</div>
				<main></main>
			</>
		);
	}
}

export default HomePage;
