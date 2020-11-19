const initialState = {
	pokemonChoice: "Bulbasaur"
};

const appContainerReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_CHOICE":
			return {
				...action.payload
			};

		default:
			return state;
	}
};

export default appContainerReducer;
