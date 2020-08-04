import React from "react";
// import { Route, Router, Link } from "react-router";

export default class PostList extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.match.params);
	}
	render() {
		return (
			<div>
				<h2>Hello welcome Poster</h2>
			</div>
		);
	}
}
