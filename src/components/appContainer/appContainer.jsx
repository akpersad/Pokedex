import React, { Component } from "react";
import { connect } from "react-redux";
import { pokemonList } from "../../global/_constants";
import Dropdown from "../dropdown/dropdown";
import TextInput from "../textInput/textInput";

class AppContainer extends Component {
	render() {
		return (
			<div>
				<Dropdown inputArr={pokemonList} />
				<TextInput />
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
