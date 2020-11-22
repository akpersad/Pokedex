import React, { Component } from "react";
import store from "../../config/store";
import ArrowUp from "../../global/assets/images/arrow-up.svg";
import ArrowRight from "../../global/assets/images/arrow-right.svg";
import ArrowDown from "../../global/assets/images/arrow-down.svg";
import ArrowLeft from "../../global/assets/images/arrow-left.svg";
import { fetchData } from "../pokemon/fetchPokemonData";
import { pokemonNumer } from "../../global/_constants";

class DirectionalPad extends Component {
	handleBtnClick(event) {
		const { pokemon } = store.getState();
		const { pokemonInfo } = pokemon;
		let counter = 0;

		switch (event.currentTarget.value) {
			case "up":
				counter = pokemonInfo.pokemonNumber + 10;
				break;

			case "right":
				counter = pokemonInfo.pokemonNumber + 1;
				break;

			case "down":
				counter = pokemonInfo.pokemonNumber - 10;
				break;

			case "left":
				counter = pokemonInfo.pokemonNumber - 1;
				break;

			default:
				break;
		}

		if (counter > 0 && counter < pokemonNumer + 1) {
			pokemon.pokeLoad = true;

			store.dispatch({
				type: "START_LOAD",
				payload: pokemon
			});

			pokemonInfo.pokemonNumber = counter;
			fetchData();
		}
	}

	render() {
		return (
			<div className="directional-container">
				<div className="btn-up">
					<button
						type="button"
						onClick={e => {
							this.handleBtnClick(e);
						}}
						value="up"
						className="btn-control"
					>
						<span>
							<img
								src={ArrowUp}
								alt="arrow-up"
								className="directional-arrow arrow-up"
							/>
						</span>
					</button>
				</div>
				<div className="btn-left">
					<button
						type="button"
						onClick={e => {
							this.handleBtnClick(e);
						}}
						value="left"
						className="btn-control"
					>
						<span>
							<img
								src={ArrowLeft}
								alt="arrow-left"
								className="directional-arrow arrow-left"
							/>
						</span>
					</button>
				</div>
				<div className="empty" />
				<div className="btn-right">
					<button
						type="button"
						onClick={e => {
							this.handleBtnClick(e);
						}}
						value="right"
						className="btn-control"
					>
						<span>
							<img
								src={ArrowRight}
								alt="arrow-right"
								className="directional-arrow arrow-right"
							/>
						</span>
					</button>
				</div>
				<div className="btn-down">
					<button
						type="button"
						onClick={e => {
							this.handleBtnClick(e);
						}}
						value="down"
						className="btn-control"
					>
						<span>
							<img
								src={ArrowDown}
								alt="arrow-down"
								className="directional-arrow arrow-down"
							/>
						</span>
					</button>
				</div>
			</div>
		);
	}
}

export default DirectionalPad;
