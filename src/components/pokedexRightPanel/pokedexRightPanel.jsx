import React, { Component } from "react";
import StatsAndTypes from "../rightStatsAndTypes/rightStatsAndTypes";
import Description from "../rightDescription/rightDescription";
import ControlButtons from "../rightControlButtons/rightControlButtons";

class PokedexRightPanel extends Component {
	render() {
		return (
			<div className="panel right-panel">
				<StatsAndTypes />
				<Description />
				<ControlButtons />
			</div>
		);
	}
}

export default PokedexRightPanel;
