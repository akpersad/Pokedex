import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";
import { /* fetchPokemonList */ pokemonList } from "../../global/_constants";
import Dropdown from "../dropdown/dropdown";
import TextInput from "../textInput/textInput";
import PokedexContainer from "../pokedexContainer/pokedexContainer";

class AppContainer extends Component {
	// constructor() {
	// 	super();
	// 	fetchPokemonList();
	// }

	render() {
		// const { pokeListLoading, pokeList } = this.props;
		return (
			// <>
			// 	{pokeListLoading ? (
			// 		<Loader type="Oval" color="#00BFFF" height={100} width={100} />
			// 	) : (
			<>
				<div className="d-flex">
					<Dropdown inputArr={pokemonList} />
					<TextInput inputArr={pokemonList} />
				</div>
				<div className="pokedex-container">
					<PokedexContainer />
				</div>
			</>
			// 	)}
			// </>
		);
	}
}

// AppContainer.propTypes = {
// pokeListLoading: PropTypes.bool.isRequired,
// pokeList: PropTypes.array.isRequired
// };

const mapStateToProps = state => {
	return {
		...state.app
	};
};

export default connect(mapStateToProps)(AppContainer);
