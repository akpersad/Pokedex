import axios from "axios";
import store from "../../config/store";
import { pokeDataLink, getSpeciesInfo } from "../../global/_constants";

export const fetchData = () => {
	const { pokemon } = store.getState();
	axios.get(`${pokeDataLink}${pokemon.pokemonInfo.pokemonNumber}`).then(res => {
		if (res.status === 200) {
			const { data } = res;
			pokemon.pokemonChoice = data.species.name;
			pokemon.pokemonInfo.pokemonNumber = data.id;

			const arr = data.types.map(item => {
				return item.type.name;
			});
			pokemon.pokemonInfo.pokemonType = arr;

			pokemon.pokemonInfo.pokemonBaseStats.baseHp = data.stats[0].base_stat;
			pokemon.pokemonInfo.pokemonBaseStats.baseAttack = data.stats[1].base_stat;
			pokemon.pokemonInfo.pokemonBaseStats.baseDefense = data.stats[2].base_stat;
			pokemon.pokemonInfo.pokemonBaseStats.baseSpAttack = data.stats[3].base_stat;
			pokemon.pokemonInfo.pokemonBaseStats.baseSpDefense = data.stats[4].base_stat;
			pokemon.pokemonInfo.pokemonBaseStats.baseSpeed = data.stats[5].base_stat;
			pokemon.pokemonInfo.pokemonImageDefault = data.sprites.front_default;
			pokemon.pokemonInfo.pokemonImageShiny = data.sprites.front_shiny;

			axios.get(`${getSpeciesInfo}${pokemon.pokemonInfo.pokemonNumber}`).then(res2 => {
				if (res2.status === 200) {
					pokemon.pokemonInfo.pokemonDescription =
						res2.data.flavor_text_entries[0].flavor_text;
					pokemon.pokeLoad = false;

					window.localStorage.pokeHash = JSON.stringify(pokemon);

					store.dispatch({
						type: "UPDATE_CHOICE",
						payload: pokemon
					});

					return pokemon;
				}
				return true;
			});
		}
		return true;
	});
	return true;
};
