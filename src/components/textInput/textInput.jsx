import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../config/store";

class TextInput extends Component {
	constructor() {
		super();
		this.displaySearch = this.displaySearch.bind(this);
		this.renderSelectButtons = this.renderSelectButtons.bind(this);
	}

	displaySearch(event) {
		const { inputArr } = this.props;
		const { pokemon } = store.getState();
		let counter = 0;
		const filteredList = inputArr.filter(item => {
			if (
				event.currentTarget.value &&
				item.toLowerCase().indexOf(event.currentTarget.value.toLowerCase()) !== -1 &&
				counter < 5
			) {
				counter += 1;
				return item;
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
		console.log(pokemonDropdList);
	}

	render() {
		const { pokemonDropdList } = this.props;
		return (
			<>
				<input type="text" name="pokemon-input" onInput={e => this.displaySearch(e)} />
				{pokemonDropdList.length > 0 ? this.renderSelectButtons() : ""}
			</>
		);
	}
}

TextInput.propTypes = {
	inputArr: PropTypes.array.isRequired,
	pokemonDropdList: PropTypes.array.isRequired
	// pokemonChoice: PropTypes.string.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(TextInput);
