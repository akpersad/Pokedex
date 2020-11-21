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
			let count = 0;
			const pokeList = results.map(item => {
				const tempHash = {};
				count += 1;
				tempHash.name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
				tempHash.value = count;
				return tempHash;
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
	{
		name: "Bulbasaur",
		value: 1
	},
	{
		name: "Ivysaur",
		value: 2
	},
	{
		name: "Venusaur",
		value: 3
	},
	{
		name: "Charmander",
		value: 4
	},
	{
		name: "Charmeleon",
		value: 5
	},
	{
		name: "Charizard",
		value: 6
	},
	{
		name: "Squirtle",
		value: 7
	},
	{
		name: "Wartortle",
		value: 8
	},
	{
		name: "Blastoise",
		value: 9
	},
	{
		name: "Caterpie",
		value: 10
	},
	{
		name: "Metapod",
		value: 11
	},
	{
		name: "Butterfree",
		value: 12
	},
	{
		name: "Weedle",
		value: 13
	},
	{
		name: "Kakuna",
		value: 14
	},
	{
		name: "Beedrill",
		value: 15
	},
	{
		name: "Pidgey",
		value: 16
	},
	{
		name: "Pidgeotto",
		value: 17
	},
	{
		name: "Pidgeot",
		value: 18
	},
	{
		name: "Rattata",
		value: 19
	},
	{
		name: "Raticate",
		value: 20
	},
	{
		name: "Spearow",
		value: 21
	},
	{
		name: "Fearow",
		value: 22
	},
	{
		name: "Ekans",
		value: 23
	},
	{
		name: "Arbok",
		value: 24
	},
	{
		name: "Pikachu",
		value: 25
	},
	{
		name: "Raichu",
		value: 26
	},
	{
		name: "Sandshrew",
		value: 27
	},
	{
		name: "Sandslash",
		value: 28
	},
	{
		name: "Nidoran-m",
		value: 29
	},
	{
		name: "Nidorina",
		value: 30
	},
	{
		name: "Nidoqueen",
		value: 31
	},
	{
		name: "Nidoran-f",
		value: 32
	},
	{
		name: "Nidorino",
		value: 33
	},
	{
		name: "Nidoking",
		value: 34
	},
	{
		name: "Clefairy",
		value: 35
	},
	{
		name: "Clefable",
		value: 36
	},
	{
		name: "Vulpix",
		value: 37
	},
	{
		name: "Ninetales",
		value: 38
	},
	{
		name: "Jigglypuff",
		value: 39
	},
	{
		name: "Wigglytuff",
		value: 40
	},
	{
		name: "Zubat",
		value: 41
	},
	{
		name: "Golbat",
		value: 42
	},
	{
		name: "Oddish",
		value: 43
	},
	{
		name: "Gloom",
		value: 44
	},
	{
		name: "Vileplume",
		value: 45
	},
	{
		name: "Paras",
		value: 46
	},
	{
		name: "Parasect",
		value: 47
	},
	{
		name: "Venonat",
		value: 48
	},
	{
		name: "Venomoth",
		value: 49
	},
	{
		name: "Diglett",
		value: 50
	},
	{
		name: "Dugtrio",
		value: 51
	},
	{
		name: "Meowth",
		value: 52
	},
	{
		name: "Persian",
		value: 53
	},
	{
		name: "Psyduck",
		value: 54
	},
	{
		name: "Golduck",
		value: 55
	},
	{
		name: "Mankey",
		value: 56
	},
	{
		name: "Primeape",
		value: 57
	},
	{
		name: "Growlithe",
		value: 58
	},
	{
		name: "Arcanine",
		value: 59
	},
	{
		name: "Poliwag",
		value: 60
	},
	{
		name: "Poliwhirl",
		value: 61
	},
	{
		name: "Poliwrath",
		value: 62
	},
	{
		name: "Abra",
		value: 63
	},
	{
		name: "Kadabra",
		value: 64
	},
	{
		name: "Alakazam",
		value: 65
	},
	{
		name: "Machop",
		value: 66
	},
	{
		name: "Machoke",
		value: 67
	},
	{
		name: "Machamp",
		value: 68
	},
	{
		name: "Bellsprout",
		value: 69
	},
	{
		name: "Weepinbell",
		value: 70
	},
	{
		name: "Victreebel",
		value: 71
	},
	{
		name: "Tentacool",
		value: 72
	},
	{
		name: "Tentacruel",
		value: 73
	},
	{
		name: "Geodude",
		value: 74
	},
	{
		name: "Graveler",
		value: 75
	},
	{
		name: "Golem",
		value: 76
	},
	{
		name: "Ponyta",
		value: 77
	},
	{
		name: "Rapidash",
		value: 78
	},
	{
		name: "Slowpoke",
		value: 79
	},
	{
		name: "Slowbro",
		value: 80
	},
	{
		name: "Magnemite",
		value: 81
	},
	{
		name: "Magneton",
		value: 82
	},
	{
		name: "Farfetch’d",
		value: 83
	},
	{
		name: "Doduo",
		value: 84
	},
	{
		name: "Dodrio",
		value: 85
	},
	{
		name: "Seel",
		value: 86
	},
	{
		name: "Dewgong",
		value: 87
	},
	{
		name: "Grimer",
		value: 88
	},
	{
		name: "Muk",
		value: 89
	},
	{
		name: "Shellder",
		value: 90
	},
	{
		name: "Cloyster",
		value: 91
	},
	{
		name: "Gastly",
		value: 92
	},
	{
		name: "Haunter",
		value: 93
	},
	{
		name: "Gengar",
		value: 94
	},
	{
		name: "Onix",
		value: 95
	},
	{
		name: "Drowzee",
		value: 96
	},
	{
		name: "Hypno",
		value: 97
	},
	{
		name: "Krabby",
		value: 98
	},
	{
		name: "Kingler",
		value: 99
	},
	{
		name: "Voltorb",
		value: 100
	},
	{
		name: "Electrode",
		value: 101
	},
	{
		name: "Exeggcute",
		value: 102
	},
	{
		name: "Exeggutor",
		value: 103
	},
	{
		name: "Cubone",
		value: 104
	},
	{
		name: "Marowak",
		value: 105
	},
	{
		name: "Hitmonlee",
		value: 106
	},
	{
		name: "Hitmonchan",
		value: 107
	},
	{
		name: "Lickitung",
		value: 108
	},
	{
		name: "Koffing",
		value: 109
	},
	{
		name: "Weezing",
		value: 110
	},
	{
		name: "Rhyhorn",
		value: 111
	},
	{
		name: "Rhydon",
		value: 112
	},
	{
		name: "Chansey",
		value: 113
	},
	{
		name: "Tangela",
		value: 114
	},
	{
		name: "Kangaskhan",
		value: 115
	},
	{
		name: "Horsea",
		value: 116
	},
	{
		name: "Seadra",
		value: 117
	},
	{
		name: "Goldeen",
		value: 118
	},
	{
		name: "Seaking",
		value: 119
	},
	{
		name: "Staryu",
		value: 120
	},
	{
		name: "Starmie",
		value: 121
	},
	{
		name: "Mr. Mime",
		value: 122
	},
	{
		name: "Scyther",
		value: 123
	},
	{
		name: "Jynx",
		value: 124
	},
	{
		name: "Electabuzz",
		value: 125
	},
	{
		name: "Magmar",
		value: 126
	},
	{
		name: "Pinsir",
		value: 127
	},
	{
		name: "Tauros",
		value: 128
	},
	{
		name: "Magikarp",
		value: 129
	},
	{
		name: "Gyarados",
		value: 130
	},
	{
		name: "Lapras",
		value: 131
	},
	{
		name: "Ditto",
		value: 132
	},
	{
		name: "Eevee",
		value: 133
	},
	{
		name: "Vaporeon",
		value: 134
	},
	{
		name: "Jolteon",
		value: 135
	},
	{
		name: "Flareon",
		value: 136
	},
	{
		name: "Porygon",
		value: 137
	},
	{
		name: "Omanyte",
		value: 138
	},
	{
		name: "Omastar",
		value: 139
	},
	{
		name: "Kabuto",
		value: 140
	},
	{
		name: "Kabutops",
		value: 141
	},
	{
		name: "Aerodactyl",
		value: 142
	},
	{
		name: "Snorlax",
		value: 143
	},
	{
		name: "Articuno",
		value: 144
	},
	{
		name: "Zapdos",
		value: 145
	},
	{
		name: "Moltres",
		value: 146
	},
	{
		name: "Dratini",
		value: 147
	},
	{
		name: "Dragonair",
		value: 148
	},
	{
		name: "Dragonite",
		value: 149
	},
	{
		name: "Mewtwo",
		value: 150
	},
	{
		name: "Mew",
		value: 151
	}
];
