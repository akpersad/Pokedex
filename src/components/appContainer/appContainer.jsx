import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pokemonList } from "../../global/_constants";
import Dropdown from "../dropdown/dropdown";

class AppContainer extends Component {
	render() {
		return (
			<div>
				<Dropdown inputArr={pokemonList} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state.app
	};
};

// AppContainer.propTypes = {};

export default connect(mapStateToProps)(AppContainer);
