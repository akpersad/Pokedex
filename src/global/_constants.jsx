import axios from "axios";
import store from "../config/store";

const getNamesLink = "https://pokeapi.co/api/v2/pokemon?limit=151";
export const getSpeciesInfo = "https://pokeapi.co/api/v2/pokemon-species/";
export const pokeDataLink = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokemonList = () => {
	const { app } = store.getState();
	axios.get(getNamesLink).then(res => {
		if (res.status === 200) {
			const { results } = res.data;
			const pokeList = results.map(item => {
				return item.name.charAt(0).toUpperCase() + item.name.slice(1);
			});

			app.pokeListLoading = false;
			app.pokeList = pokeList;

			store.dispatch({
				type: "INITIAL_STATE",
				payload: app
			});

			return pokeList;
		}
		return false;
	});
	return [];
};

export const pokemonList = [
	"Bulbasaur",
	"Ivysaur",
	"Venusaur",
	"Charmander",
	"Charmeleon",
	"Charizard",
	"Squirtle",
	"Wartortle",
	"Blastoise",
	"Caterpie",
	"Metapod",
	"Butterfree",
	"Weedle",
	"Kakuna",
	"Beedrill",
	"Pidgey",
	"Pidgeotto",
	"Pidgeot",
	"Rattata",
	"Raticate",
	"Spearow",
	"Fearow",
	"Ekans",
	"Arbok",
	"Pikachu",
	"Raichu",
	"Sandshrew",
	"Sandslash",
	"Nidoran-m",
	"Nidorina",
	"Nidoqueen",
	"Nidoran-f",
	"Nidorino",
	"Nidoking",
	"Clefairy",
	"Clefable",
	"Vulpix",
	"Ninetales",
	"Jigglypuff",
	"Wigglytuff",
	"Zubat",
	"Golbat",
	"Oddish",
	"Gloom",
	"Vileplume",
	"Paras",
	"Parasect",
	"Venonat",
	"Venomoth",
	"Diglett",
	"Dugtrio",
	"Meowth",
	"Persian",
	"Psyduck",
	"Golduck",
	"Mankey",
	"Primeape",
	"Growlithe",
	"Arcanine",
	"Poliwag",
	"Poliwhirl",
	"Poliwrath",
	"Abra",
	"Kadabra",
	"Alakazam",
	"Machop",
	"Machoke",
	"Machamp",
	"Bellsprout",
	"Weepinbell",
	"Victreebel",
	"Tentacool",
	"Tentacruel",
	"Geodude",
	"Graveler",
	"Golem",
	"Ponyta",
	"Rapidash",
	"Slowpoke",
	"Slowbro",
	"Magnemite",
	"Magneton",
	"Farfetch’d",
	"Doduo",
	"Dodrio",
	"Seel",
	"Dewgong",
	"Grimer",
	"Muk",
	"Shellder",
	"Cloyster",
	"Gastly",
	"Haunter",
	"Gengar",
	"Onix",
	"Drowzee",
	"Hypno",
	"Krabby",
	"Kingler",
	"Voltorb",
	"Electrode",
	"Exeggcute",
	"Exeggutor",
	"Cubone",
	"Marowak",
	"Hitmonlee",
	"Hitmonchan",
	"Lickitung",
	"Koffing",
	"Weezing",
	"Rhyhorn",
	"Rhydon",
	"Chansey",
	"Tangela",
	"Kangaskhan",
	"Horsea",
	"Seadra",
	"Goldeen",
	"Seaking",
	"Staryu",
	"Starmie",
	"Mr. Mime",
	"Scyther",
	"Jynx",
	"Electabuzz",
	"Magmar",
	"Pinsir",
	"Tauros",
	"Magikarp",
	"Gyarados",
	"Lapras",
	"Ditto",
	"Eevee",
	"Vaporeon",
	"Jolteon",
	"Flareon",
	"Porygon",
	"Omanyte",
	"Omastar",
	"Kabuto",
	"Kabutops",
	"Aerodactyl",
	"Snorlax",
	"Articuno",
	"Zapdos",
	"Moltres",
	"Dratini",
	"Dragonair",
	"Dragonite",
	"Mewtwo",
	"Mew"
];
