const initialState = {
	pokemonChoice: "bulbasaur",
	pokemonDropdList: []
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
