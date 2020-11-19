import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
	constructor() {
		super();
		this.displaySearch = this.displaySearch.bind(this);
	}

	displaySearch(event) {
		const { inputArr } = this.props;
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
		console.log(filteredList);
	}

	render() {
		return (
			<>
				<input type="text" name="pokemon-input" onInput={e => this.displaySearch(e)} />
			</>
		);
	}
}

TextInput.propTypes = {
	inputArr: PropTypes.array.isRequired
	// pokemonChoice: PropTypes.string.isRequired
};

export default TextInput;
