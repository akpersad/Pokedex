import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class RightDescription extends Component {
	render() {
		const { pokemonInfo } = this.props;

		return (
			<div className="panel-row pokemon-description screen">
				<span>{pokemonInfo.pokemonDescription}</span>
			</div>
		);
	}
}

RightDescription.propTypes = {
	pokemonInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(RightDescription);
