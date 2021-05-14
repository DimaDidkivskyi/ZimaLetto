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
            dispatch(setPizzas(data));
        });
};

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items,
});
