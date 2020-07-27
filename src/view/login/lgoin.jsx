import React from "react";

import LoginInfo from "./loginInfo";
export default class Login extends React.Component {
	submit(event) {
		event.preventDefault();
		console.log("submit!");
	}

	render() {
		const loginInfoNodes = this.props.loginInfo.map((item, index) => {
			return <LoginInfo key={index}>{item}</LoginInfo>;
		});
		return (
			<div>
				<div className="header">{this.props.children}</div>
				<form onSubmit={this.submit}>
					<div>
						<input
							type="text"
							className="login-input"
							placeholder="Please type in your name"
						/>
					</div>
					<div>
						<input
							type="password"
							className="login-input"
							placeholder="please type in your password"
						/>
					</div>
					<div>
						<button className="login-button" type="submit">
							Submit!
						</button>
					</div>
				</form>
				{loginInfoNodes}
			</div>
		);
	}
}
