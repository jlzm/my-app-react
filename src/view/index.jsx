import React from "react";
import Login from "./login/lgoin";
import Comment from "./comment/comment";

import Calculate from "./statusUp/calculator";
export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showHeader: false,
			data: [1, 2, 3],
		};
	}

	componentDidMount() {
		this.delayedRequest();
	}

	delayedRequest = () => {
		setTimeout(() => {
			this.setState((state, props) => ({
				data: [4, 5, 6],
				showHeader: true,
			}));
		}, 3000);
	};

	renderHeader = (showHeader) => {
		if (showHeader) {
			return <div className="header">hello ~</div>;
		}
	};

	render() {
		return (
			<div>
				{this.renderHeader(this.state.showHeader)}
				<Login loginInfo={this.state.data} />
				<div className="form-wrap">
					<h2>formWrap</h2>
					<Comment />
				</div>
				<div className="status-up-wrap">
					<h2>statusUpWrap</h2>
					<Calculate />
				</div>
			</div>
		);
	}
}
