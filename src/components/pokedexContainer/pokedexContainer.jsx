import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../config/store";
import PokedexLeftPanel from "../pokedexLeftPanel/pokedexLeftPanel";
import PokedexRightPanel from "../pokedexRightPanel/pokedexRightPanel";
import PokedexDivider from "../pokedexDivider/pokedexDivider";

class PokedexContainer extends Component {
	constructor() {
		super();
		if (window.localStorage.pokeHash) {
			let { pokemon } = store.getState();
			pokemon = JSON.parse(window.localStorage.pokeHash);

			store.dispatch({
				type: "INITIAL_LOCAL_CHECK",
				payload: pokemon
			});
		}
	}

	render() {
		return (
			<div className="pokedex">
				<PokedexLeftPanel />
				<PokedexDivider />
				<PokedexRightPanel />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(PokedexContainer);
