const initialState = {
	pokemonChoice: "bulbasaur",
	pokemonDropdList: [],
	pokemonInfo: {
		pokemonNumber: 1,
		pokemonType: ["grass", "poison"],
		pokemonBaseStats: {
			baseHp: 45,
			baseAttack: 49,
			baseDefense: 49,
			baseSpAttack: 65,
			baseSpDefense: 65,
			baseSpeed: 45
		},
		pokemonDescription:
			"A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.",
		pokemonImage:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
	},
	pokeLoad: false
};

const appContainerReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_CHOICE":
			return {
				...action.payload
			};

		case "UPDATE_TYPE_LIST":
			return {
				...action.payload
			};

		default:
			return state;
	}
};

export default appContainerReducer;
