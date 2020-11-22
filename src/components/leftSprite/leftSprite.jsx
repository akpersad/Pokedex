import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LeftSprite extends Component {
	render() {
		const { pokemonInfo, showShiny } = this.props;
		const imgUrl = showShiny ? pokemonInfo.pokemonImageShiny : pokemonInfo.pokemonImageDefault;
		return (
			<div className="sprite-container">
				<img src={imgUrl} alt="Pokemon Sprite" className="pokemon-sprite" />
			</div>
		);
	}
}

LeftSprite.propTypes = {
	pokemonInfo: PropTypes.object.isRequired,
	showShiny: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(LeftSprite);
