import React, { Component } from "react";
import LeftHeader from "../leftHeader/leftHeader";
import LeftSprite from "../leftSprite/leftSprite";
import LeftSearch from "../leftSearch/leftSearch";

class PokedexLeftPanel extends Component {
	render() {
		return (
			<div className="panel left-panel">
				<LeftHeader />
				<LeftSprite />
				<LeftSearch />
			</div>
		);
	}
}

export default PokedexLeftPanel;
