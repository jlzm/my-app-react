import React from "react";

export default class BoilingVerdict extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		console.log(this.props.celsius);
		return (
			<div>
				<p>
					The water wuld{"   "}
					{this.props.celsius > 100 ? "boil" : "not boil"}
				</p>
			</div>
		);
	}
}
