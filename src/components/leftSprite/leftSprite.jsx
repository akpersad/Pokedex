import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

class LeftSprite extends Component {
	render() {
		const { pokemonInfo, showShiny, pokeLoad } = this.props;
		const imgUrl = showShiny ? pokemonInfo.pokemonImageShiny : pokemonInfo.pokemonImageDefault;
		return (
			<div className="sprite-container">
				{pokeLoad ? (
					<Loader type="Oval" color="#00BFFF" height={300} width={300} />
				) : (
					<img src={imgUrl} alt="Pokemon Sprite" className="pokemon-sprite" />
				)}
			</div>
		);
	}
}

LeftSprite.propTypes = {
	pokemonInfo: PropTypes.object.isRequired,
	showShiny: PropTypes.bool.isRequired,
	pokeLoad: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(LeftSprite);
