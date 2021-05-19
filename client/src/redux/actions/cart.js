export const addProductCart = (clothesObj) => ({
    type: "ADD_PRODUCT_CART",
    payload: clothesObj,
});

export const clearCart = () => ({
    type: "CLEAR_CART",
});

export const removeCartItem = (id) => ({
    type: "REMOVE_CART_ITEM",
    payload: id,
});
