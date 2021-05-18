const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_CART": {
            const currentProductItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentProductItems,
                    totalPrice: getTotalPrice(currentProductItems),
                },
            };

            const items = Object.values(newItems);
            const allProducts = [].concat.apply([]);
            const totalPrice = getTotalPrice(allProducts);

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
