import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../config/store";
import { fetchData } from "../pokemon/fetchPokemonData";

class TextInput extends Component {
	constructor() {
		super();
		this.displaySearch = this.displaySearch.bind(this);
		this.renderSelectButtons = this.renderSelectButtons.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick(event) {
		const { pokemon } = store.getState();
		pokemon.pokeLoad = true;
		pokemon.pokemonChoice = event.currentTarget.innerHTML;
		pokemon.pokemonInfo.pokemonNumber = event.currentTarget.value;
		pokemon.pokemonDropdList = [];

		store.dispatch({
			type: "UPDATE_TYPE_LIST",
			payload: pokemon
		});

		document.querySelector(".text-input").value = "";
		fetchData();
	}

	displaySearch(event) {
		const { inputArr } = this.props;
		const { pokemon } = store.getState();
		let counter = 0;
		const filteredList = inputArr.filter(item => {
			const tempHash = {};
			if (
				event.currentTarget.value &&
				item.name.toLowerCase().indexOf(event.currentTarget.value.toLowerCase()) !== -1 &&
				counter < 5
			) {
				counter += 1;
				tempHash.name = item.name;
				tempHash.value = item.value;
				return tempHash;
			}
			return false;
		});
		pokemon.pokemonDropdList = [...filteredList];
		store.dispatch({
			type: "UPDATE_TYPE_LIST",
			payload: pokemon
		});
	}

	renderSelectButtons() {
		const { pokemonDropdList } = this.props;
		return pokemonDropdList.map(item => {
			return (
				<button
					key={item.value}
					value={item.value}
					type="button"
					className="choice-btn"
					onClick={e => {
						this.handleButtonClick(e);
					}}
				>
					{item.name}
				</button>
			);
		});
	}

	render() {
		const { pokemonDropdList } = this.props;
		return (
			<div className="text-input_container">
				<input
					className="text-input"
					type="text"
					name="pokemon-input"
					placeholder="Type Pokemon Name"
					onInput={e => this.displaySearch(e)}
					autoComplete="off"
				/>
				<div className="pokemon-selection_container">
					{pokemonDropdList.length > 0 ? this.renderSelectButtons() : ""}
				</div>
			</div>
		);
	}
}

TextInput.propTypes = {
	inputArr: PropTypes.array.isRequired,
	pokemonDropdList: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(TextInput);
