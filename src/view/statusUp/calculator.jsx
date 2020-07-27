import React from "react";

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const toCelsius = (fahrenheit) => {
	console.log("fahrenheit", fahrenheit);
	return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => {
	return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert) => {
	const val = parseFloat(temperature);
	if (Number.isNaN(val)) {
		return;
	}

	const output = convert(val);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded;
};

export default class Calculate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: 0,
			scale: "c",
		};
	}

	handleChange = (e) => {
		this.setState({
			temperature: e.target.value,
		});
	};

	handleCelsiusChange = (temperature) => {
		console.log(temperature);
		this.setState({
			scale: "c",
			temperature,
		});
	};
	handleFahrenheitChange = (temperature) => {
		this.setState({
			scale: "f",
			temperature,
		});
	};

	render() {
		// const termpature = this.state.temperature;
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius =
			scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit =
			scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			// <fieldset>
			// 	<legend>Enter temperature in celsius</legend>
			// 	<input
			// 		type="number"
			// 		value={termpature}
			// 		onChange={this.handleChange}
			// 	/>

			// 	<BoilingVerdict celsius={parseFloat(termpature)} />
			// </fieldset>
			<div>
				<TemperatureInput
					onTemperatureChange={this.handleCelsiusChange}
					temperature={celsius}
					scale="c"
				/>
				<TemperatureInput
					onTemperatureChange={this.handleFahrenheitChange}
					temperature={fahrenheit}
					scale="f"
				/>
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
}
