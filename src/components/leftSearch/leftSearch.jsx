import React, { Component } from "react";
// import PropTypes from "prop-types";
import { /* fetchPokemonList */ pokemonList } from "../../global/_constants";
import Dropdown from "../dropdown/dropdown";
import TextInput from "../textInput/textInput";

class LeftSearch extends Component {
	render() {
		return (
			<div className="pokemon-search screen">
				<Dropdown inputArr={pokemonList} />
				<TextInput inputArr={pokemonList} />
			</div>
		);
	}
}

// LeftSearch.propTypes = {};

export default LeftSearch;
