import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../config/store";
import { fetchData } from "../pokemon/fetchPokemonData";

class Dropdown extends Component {
	constructor() {
		super();
		this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
	}

	handleDropdownSelect(event) {
		const { pokemon } = store.getState();
		pokemon.pokeLoad = true;
		pokemon.pokemonInfo.pokemonNumber = event.currentTarget.value;
		pokemon.pokemonChoice = event.currentTarget[event.currentTarget.selectedIndex].innerHTML;

		store.dispatch({
			type: "UPDATE_TYPE_LIST",
			payload: pokemon
		});

		fetchData();
	}

	renderOptions() {
		const { inputArr } = this.props;
		return inputArr.map(item => {
			return (
				<option key={item.value} value={item.value}>
					{item.name}
				</option>
			);
		});
	}

	render() {
		const { pokemonInfo } = this.props;
		return (
			<>
				<select
					className="select-option"
					value={pokemonInfo.pokemonNumber}
					onChange={e => {
						this.handleDropdownSelect(e);
					}}
				>
					{this.renderOptions()}
				</select>
			</>
		);
	}
}

Dropdown.propTypes = {
	inputArr: PropTypes.array.isRequired,
	pokemonInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(Dropdown);
