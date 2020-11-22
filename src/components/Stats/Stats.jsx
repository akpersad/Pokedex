import React, { Component } from "react";
import PropTypes from "prop-types";

class Stats extends Component {
	render() {
		return (
			<div className="screen stats">
				<div className="stat-line">Base Stats</div>
				<div className="stat-line hp-line">
					<div>HP</div>
					<div className="dot-line" />
					<div>45</div>
				</div>
				<div className="stat-line attack-line">
					<div>Attack</div>
					<div className="dot-line" />
					<div>45</div>
				</div>
				<div className="stat-line defense-line">
					<div>Defense</div>
					<div className="dot-line" />
					<div>45</div>
				</div>
				<div className="stat-line special-attack-line">
					<div>Special Attack</div>
					<div className="dot-line" />
					<div>45</div>
				</div>
				<div className="stat-line special-defense-line">
					<div>Special Defense</div>
					<div className="dot-line" />
					<div>45</div>
				</div>
				<div className="stat-line speed-line">
					<div>Speed</div>
					<div className="dot-line" />
					<div>45</div>
				</div>
			</div>
		);
	}
}

Stats.propTypes = {};

export default Stats;
