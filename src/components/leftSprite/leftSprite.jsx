import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LeftSprite extends Component {
	render() {
		const { pokemonInfo } = this.props;
		return (
			<div className="sprite-container">
				<img
					src={pokemonInfo.pokemonImageDefault}
					alt="pokemon"
					className="pokemon-sprite"
				/>
			</div>
		);
	}
}

LeftSprite.propTypes = { pokemonInfo: PropTypes.object.isRequired };

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(LeftSprite);
