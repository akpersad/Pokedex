import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../config/store";

class TextInput extends Component {
	constructor() {
		super();
		this.displaySearch = this.displaySearch.bind(this);
		this.renderSelectButtons = this.renderSelectButtons.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick(event) {
		const { pokemon } = store.getState();
		pokemon.pokemonChoice = event.currentTarget.value.toLowerCase();
		pokemon.pokemonDropdList = [];

		document.querySelector(".text-input").value = "";

		store.dispatch({
			type: "UPDATE_TYPE_LIST",
			payload: pokemon
		});
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
		return pokemonDropdList.map(item => {
			return (
				<button
					key={item}
					value={item}
					type="button"
					className="choice-btn"
					onClick={e => {
						this.handleButtonClick(e);
					}}
				>
					{item}
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
					onInput={e => this.displaySearch(e)}
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
