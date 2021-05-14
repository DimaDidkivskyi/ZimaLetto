export const addProductToCart = (id, clothesObj) => ({
    type: "ADD_PRODUCT_CART",
    payload: clothesObj,
});
