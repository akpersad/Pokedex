import React, { Component } from "react";
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

export default connect(mapStateToProps)(AppContainer);
