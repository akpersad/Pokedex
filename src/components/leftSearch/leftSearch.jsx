import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchPokemonList } from "../../global/_constants";
import Dropdown from "../dropdown/dropdown";
import TextInput from "../textInput/textInput";

class LeftSearch extends Component {
	constructor() {
		super();
		fetchPokemonList();
	}

	render() {
		const { pokeListLoading, pokeList } = this.props;
		return (
			<div className="pokemon-search screen">
				{pokeListLoading ? (
					<Loader type="Oval" color="#42cc28" height={40} width={40} />
				) : (
					<>
						<Dropdown inputArr={pokeList} />
						<TextInput inputArr={pokeList} />
					</>
				)}
			</div>
		);
	}
}

LeftSearch.propTypes = {
	pokeListLoading: PropTypes.bool.isRequired,
	pokeList: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		...state.app
	};
};

export default connect(mapStateToProps)(LeftSearch);
