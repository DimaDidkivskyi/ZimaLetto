const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_CART": {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            };

            const allProducts = [].concat.apply([], Object.values(newItems));
            const totalPrice = allProducts.reduce(
                (sum, obj) => obj.price + sum,
                0
            );

            return {
                ...state,
                items: newItems,
                totalCount: allProducts.length,
                totalPrice,
            };
        }

        default:
            return state;
    }
};

export default cart;
