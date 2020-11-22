import React, { Component } from "react";
import StatsAndTypes from "../rightStatsAndTypes/rightStatsAndTypes";

class PokedexRightPanel extends Component {
	render() {
		return (
			<div className="panel right-panel">
				<StatsAndTypes />
			</div>
		);
	}
}

export default PokedexRightPanel;
