import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
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
		const { pokeLoad } = this.props;
		return (
			<>
				{pokeLoad ? (
					<Loader type="Oval" color="#00BFFF" height={100} width={100} />
				) : (
					<div className="pokedex">
						<PokedexLeftPanel />
						<PokedexDivider />
						<PokedexRightPanel />
					</div>
				)}
			</>
		);
	}
}

PokedexContainer.propTypes = {
	pokeLoad: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(PokedexContainer);
