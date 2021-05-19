import axios from "axios";

export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload,
});

export const fetchClothes = (sortBy, category) => (dispatch) => {
    dispatch({
        type: "SET_LOADED",
        payload: false,
    });

    axios
        .get(
            `/products?${
                category !== null ? `category=${category}` : ""
            }&_sort=${sortBy.type}&_order=${sortBy.order}`
        )
        .then(({ data }) => {
            dispatch(setProducts(data));
        });
};

export const setProducts = (items) => ({
    type: "SET_PRODUCTS",
    payload: items,
});
