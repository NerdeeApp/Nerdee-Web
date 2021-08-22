import React from "react";
import { Component } from "react";
import "../../style/HomePage.scss";

class HomePage extends Component {
	state = {
		burger_active: false,
		logoHovered: false,
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
							<img src='/images/PNG/titlePurple.png' />
						) : (
							<img src='/images/PNG/title.png' />
						)}
					</a>

					<div
						className='burger_container'
						onClick={() => {
							this.setState({ burger_active: !this.state.burger_active });
						}}
					>
						<div
							className={
								!this.state.burger_active ? `burger` : `burger burger_active`
							}
						/>
					</div>
				</nav>
				<main></main>
			</>
		);
	}
}

export default HomePage;
