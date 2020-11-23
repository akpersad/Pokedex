import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

class RightDescription extends Component {
	render() {
		const { pokemonInfo, pokeLoad } = this.props;

		return (
			<div className="panel-row pokemon-description screen">
				{pokeLoad ? (
					<Loader type="Oval" color="#42cc28" height={100} width={100} />
				) : (
					<span>{pokemonInfo.pokemonDescription}</span>
				)}
			</div>
		);
	}
}

RightDescription.propTypes = {
	pokemonInfo: PropTypes.object.isRequired,
	pokeLoad: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(RightDescription);
