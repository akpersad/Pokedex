import axios from "axios";
import store from "../../config/store";
import { pokeDataLink } from "../../global/_constants";

export const fetchData = () => {
	const { pokemon } = store.getState();
	axios.get(`${pokeDataLink}${pokemon.pokemonChoice}`).then(res => {
		if (res.status === 200) {
			return res.data;
		}
		return false;
	});
};
