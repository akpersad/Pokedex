import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Stats extends Component {
	render() {
		const { pokemonInfo } = this.props;
		const { pokemonBaseStats } = pokemonInfo;
		return (
			<div className="screen stats">
				<div className="stat-line">Base Stats</div>
				<div className="stat-line hp-line">
					<div>HP</div>
					<div className="dot-line" />
					<div>{pokemonBaseStats.baseHp}</div>
				</div>
				<div className="stat-line attack-line">
					<div>Attack</div>
					<div className="dot-line" />
					<div>{pokemonBaseStats.baseAttack}</div>
				</div>
				<div className="stat-line defense-line">
					<div>Defense</div>
					<div className="dot-line" />
					<div>{pokemonBaseStats.baseDefense}</div>
				</div>
				<div className="stat-line special-attack-line">
					<div>Special Attack</div>
					<div className="dot-line" />
					<div>{pokemonBaseStats.baseSpAttack}</div>
				</div>
				<div className="stat-line special-defense-line">
					<div>Special Defense</div>
					<div className="dot-line" />
					<div>{pokemonBaseStats.baseSpDefense}</div>
				</div>
				<div className="stat-line speed-line">
					<div>Speed</div>
					<div className="dot-line" />
					<div>{pokemonBaseStats.baseSpeed}</div>
				</div>
			</div>
		);
	}
}

Stats.propTypes = {
	pokemonInfo: PropTypes.object.isRequired,
	pokemonBaseStats: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(Stats);
