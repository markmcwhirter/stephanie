const formReducer = (state,action) => {
	switch(action.type) {
		case "text":
			return {
				...state,
				[action.field]: action.payload,
			};
		case "consent":
			return {
				...state,
				[action.field]: !state.hasConsented,
			};
		default:
			return state;
	}
};

export default formReducer;
			