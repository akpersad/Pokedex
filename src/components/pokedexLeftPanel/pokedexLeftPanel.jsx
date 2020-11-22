import React, { Component } from "react";
import LeftHeader from "../leftHeader/leftHeader";
import LeftSprite from "../leftSprite/leftSprite";

class PokedexLeftPanel extends Component {
	render() {
		return (
			<div className="panel left-panel">
				<LeftHeader />
				<LeftSprite />
			</div>
		);
	}
}

export default PokedexLeftPanel;
