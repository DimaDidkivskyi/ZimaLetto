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
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentProductItems,
                    totalPrice: getTotalPrice(currentProductItems),
                },
            };

            const items = Object.values(newItems).map((obj) => obj.items);
            const allProducts = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allProducts);

            return {
                ...state,
                items: newItems,
                totalCount: allProducts.length,
                totalPrice,
            };
        }

        case "CLEAR_CART":
            return {
                totalPrice: 0,
                totalCount: 0,
                items: {},
            };

        case "REMOVE_CART_ITEM":
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
            };

        default:
            return state;
    }
};

export default cart;
