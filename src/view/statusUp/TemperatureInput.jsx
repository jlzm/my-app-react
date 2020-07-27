import React from "react";

import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
	c: "Celsius",
	f: "Fahrenheit",
};

export default class Calculate extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	temperature: 0,
		// };
	}

	handleChange = (e) => {
		// this.setState({
		// 	temperature: e.target.value,
		// });
		this.props.onTemperatureChange(e.target.value);
	};

	render() {
		const termpature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}</legend>
				<input
					type="number"
					value={termpature}
					onChange={this.handleChange}
				/>
			</fieldset>
		);
	}
}
