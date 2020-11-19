import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
	constructor() {
		super();
		const tempArr = ["And", "Rew", "Per", "Sad"];
		this.displaySearch = this.displaySearch.bind(this);
		this.tempArr = tempArr;
	}

	displaySearch(event) {
		console.log(event);
		let counter = 0;
		const filteredList = this.tempArr.filter(item => {
			if (
				event.currentTarget.value &&
				item.toLowerCase().indexOf(event.currentTarget.value.toLowerCase()) !== -1 &&
				counter < 1
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
				<input type="text" name="test" list="data" onInput={e => this.displaySearch(e)} />
			</>
		);
	}
}

TextInput.propTypes = {};

export default TextInput;
