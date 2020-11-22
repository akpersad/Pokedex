import React, { Component } from "react";
import Stats from "../Stats/Stats";
import Types from "../Types/Types";

class RightStatsAndTypes extends Component {
	render() {
		return (
			<div className="panel-row stats-and-types">
				<Stats />
				<Types />
			</div>
		);
	}
}

export default RightStatsAndTypes;
