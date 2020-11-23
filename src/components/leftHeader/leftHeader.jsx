import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

class LeftHeader extends Component {
	render() {
		const { pokemonChoice, pokemonInfo, pokeLoad } = this.props;
		return (
			<div className="pokemon-name screen">
				{pokeLoad ? (
					<Loader type="Oval" color="#42cc28" height={40} width={40} />
				) : (
					pokemonChoice
				)}
				<div>
					<span className="name-no">
						No.
						{pokeLoad ? (
							<Loader type="Oval" color="#42cc28" height={30} width={30} />
						) : (
							pokemonInfo.pokemonNumber
						)}
					</span>
				</div>
			</div>
		);
	}
}

LeftHeader.propTypes = {
	pokemonChoice: PropTypes.string.isRequired,
	pokemonInfo: PropTypes.object.isRequired,
	pokeLoad: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(LeftHeader);
