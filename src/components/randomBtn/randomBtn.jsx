import React, { Component } from "react";
import store from "../../config/store";
import { fetchData } from "../pokemon/fetchPokemonData";
import { pokemonNumber } from "../../global/_constants";

class RandomBtn extends Component {
	dispatchRandomNum() {
		const { pokemon } = store.getState();

		pokemon.pokeLoad = true;

		store.dispatch({
			type: "START_LOAD",
			payload: pokemon
		});

		const min = 1;
		const intNumber = Math.floor(Math.random() * (pokemonNumber - min)) + min;
		pokemon.pokemonInfo.pokemonNumber = intNumber;

		fetchData();
	}

	render() {
		return (
			<button
				type="button"
				onClick={this.dispatchRandomNum}
				className="rand-button"
				title="Random Pokemon"
			>
				<span />
			</button>
		);
	}
}

export default RandomBtn;
