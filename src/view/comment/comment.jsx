import React from "react";

export default class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			remark: "kiss my ",
		};
	}

	inputHandle = (e) => {
		console.log(e.target.value);

		this.setState({
			remark: e.target.value,
		});
		console.log(this.state.remark);
	};
	render() {
		return (
			<div>
				<form action="">
					<textarea
						onChange={this.inputHandle}
						value={this.state.remark}
						cols="30"
						rows="10"></textarea>
				</form>
			</div>
		);
	}
}
