import React from "react";
import { Component } from "react";
import "../../style/HomePage.scss";

class HomePage extends Component {
	state = {
		burger_active: false,
		logoHovered: false,
		contactModalVisible: false,
		contactSubmitError: false,
		contactFormData: {
			email: "example@example.com",
			name: "",
			phone: "",
			body: "",
		},
	};

	handleContactSubmit = async () => {
		let r = await fetch("", {
			method: "POST",
			mode: "cors",
			credentials: "same-origin",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify({
				email: this.state.contactFormData.email,
				name: this.state.contactFormData.name,
				phone: this.state.contactFormData.phone,
				body: this.state.contactFormData.body,
			}),
		});
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
						<form onSubmit={this.handleContactSubmit}>
							<input type='email' placeholder='email'></input>
							<br />
							<input type='text' placeholder='name'></input>
							<br />
							<input type='tel' placeholder='phone'></input>
							<br />
							<textarea
								style={{ resize: "none", width: "100%", height: 200 }}
							></textarea>
						</form>
						<a
							className='secondary_button contact_button'
							onClick={() =>
								this.setState({
									contactModalVisible: !this.state.contactModalVisible,
								})
							}
						>
							Cancel
						</a>
						<a className='primary_button contact_button'>Send</a>
					</div>
					<div className='background'></div>
				</div>
				<main></main>
			</>
		);
	}
}

export default HomePage;
