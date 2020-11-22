import React, { Component } from "react";
import LeftHeader from "../leftHeader/leftHeader";

class PokedexLeftPanel extends Component {
	render() {
		return (
			<div className="panel left-panel">
				<LeftHeader />
			</div>
		);
	}
}

export default PokedexLeftPanel;
