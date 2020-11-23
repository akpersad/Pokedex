import React, { Component } from "react";
import DirectionalPad from "../directionalPad/directionalPad";
import ShinySelect from "../shinySelect/shinySelect";
import RandomBtn from "../randomBtn/randomBtn";

class RightControlButtons extends Component {
	render() {
		return (
			<div className="control-btn_container">
				<DirectionalPad />
				<ShinySelect />
				<RandomBtn />
			</div>
		);
	}
}

export default RightControlButtons;
