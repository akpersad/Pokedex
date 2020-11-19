import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../config/store";

class Dropdown extends Component {
	constructor() {
		super();
		this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
	}

	handleDropdownSelect(event) {
		const { pokemon } = store.getState();
		pokemon.pokemonChoice = event.currentTarget.value;
		store.dispatch({
			type: "UPDATE_CHOICE",
			payload: pokemon
		});
	}

	renderOptions() {
		const { inputArr } = this.props;
		return inputArr.map(item => {
			return (
				<option key={item} value={item.toLowerCase()}>
					{item}
				</option>
			);
		});
	}

	render() {
		const { pokemonChoice } = this.props;
		return (
			<>
				<select
					className="select-option"
					value={pokemonChoice}
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
	pokemonChoice: PropTypes.string.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(Dropdown);
