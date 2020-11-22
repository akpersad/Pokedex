import React, { Component } from "react";
import DirectionalPad from "../directionalPad/directionalPad";

class RightControlButtons extends Component {
	render() {
		return (
			<div className="control-btn_container">
				<DirectionalPad />
			</div>
		);
	}
}

export default RightControlButtons;
