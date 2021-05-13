const initialState = {
    items: [],
    isLoaded: false,
};

const clothes = (state = initialState, action) => {
    if (action.type === "SET_PIZZAS") {
        return {
            ...state,
            items: action.payload,
        };
    }

    return clothes;
};

export default clothes;
