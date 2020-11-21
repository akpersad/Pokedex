import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import store from "../../config/store";

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
		const { pokemonChoice, pokemonInfo, pokeLoad } = this.props;
		return (
			<>
				{pokeLoad ? (
					<Loader type="Oval" color="#00BFFF" height={100} width={100} />
				) : (
					<div>
						<ul>
							<li>
								Name:
								{pokemonChoice.charAt(0).toUpperCase() + pokemonChoice.slice(1)}
							</li>
							<li>
								Number:
								{pokemonInfo.pokemonNumber}
							</li>
							<li>
								Type:
								{pokemonInfo.pokemonType}
							</li>
							<li>
								Base HP:
								{pokemonInfo.pokemonBaseStats.baseHp}
							</li>
							<li>
								Base Attack:
								{pokemonInfo.pokemonBaseStats.baseAttack}
							</li>
							<li>
								Base Defense:
								{pokemonInfo.pokemonBaseStats.baseDefense}
							</li>
							<li>
								Base Special Attack:
								{pokemonInfo.pokemonBaseStats.baseSpAttack}
							</li>
							<li>
								Base Special Defense:
								{pokemonInfo.pokemonBaseStats.baseSpDefense}
							</li>
							<li>
								Base Speed:
								{pokemonInfo.pokemonBaseStats.baseSpeed}
							</li>
							<li>
								Description:
								{pokemonInfo.pokemonDescription}
							</li>
							<li>
								<img src={pokemonInfo.pokemonImageDefault} alt="Pokemon" />
							</li>
							<li>
								<img src={pokemonInfo.pokemonImageShiny} alt="Pokemon" />
							</li>
						</ul>
					</div>
				)}
			</>
		);
	}
}

PokedexContainer.propTypes = {
	pokemonChoice: PropTypes.string.isRequired,
	pokemonInfo: PropTypes.object.isRequired,
	pokeLoad: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(PokedexContainer);
