import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../config/store";
import StarFilled from "../../global/assets/images/stars-filled.svg";
import StarEmpty from "../../global/assets/images/stars-empty.svg";

class ShinySelect extends Component {
	constructor() {
		super();
		this.toggleShiny = this.toggleShiny.bind(this);
	}

	toggleShiny() {
		const { pokemon } = store.getState();
		const { showShiny } = this.props;

		pokemon.showShiny = !showShiny;
		const localHash = JSON.parse(window.localStorage.pokeHash);
		localHash.showShiny = !showShiny;
		window.localStorage.pokeHash = JSON.stringify(localHash);

		store.dispatch({
			type: "START_LOAD",
			payload: pokemon
		});
	}

	render() {
		const { showShiny } = this.props;
		return (
			<div className="shiny-container">
				<button onClick={this.toggleShiny} type="button" className="shiny-btn">
					<img
						src={showShiny ? StarFilled : StarEmpty}
						alt="Shiny Select"
						className="shiny-img"
					/>
				</button>
			</div>
		);
	}
}

ShinySelect.propTypes = {
	showShiny: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(ShinySelect);
