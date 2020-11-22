import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LeftHeader extends Component {
	render() {
		const { pokemonChoice, pokemonInfo } = this.props;
		return (
			<div className="pokemon-name screen">
				{pokemonChoice}
				<span className="name-no">
					No.
					{pokemonInfo.pokemonNumber}
				</span>
			</div>
		);
	}
}

LeftHeader.propTypes = {
	pokemonChoice: PropTypes.string.isRequired,
	pokemonInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(LeftHeader);
