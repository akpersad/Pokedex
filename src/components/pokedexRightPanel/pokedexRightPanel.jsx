import React, { Component } from "react";
import StatsAndTypes from "../rightStatsAndTypes/rightStatsAndTypes";
import Description from "../rightDescription/rightDescription";

class PokedexRightPanel extends Component {
	render() {
		return (
			<div className="panel right-panel">
				<StatsAndTypes />
				<Description />
			</div>
		);
	}
}

export default PokedexRightPanel;
