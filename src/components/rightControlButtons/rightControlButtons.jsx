import React, { Component } from "react";
import DirectionalPad from "../directionalPad/directionalPad";
import ShinySelect from "../shinySelect/shinySelect";

class RightControlButtons extends Component {
	render() {
		return (
			<div className="control-btn_container">
				<DirectionalPad />
				<ShinySelect />
			</div>
		);
	}
}

export default RightControlButtons;
