import axios from "axios";

import { config } from "../../utils/config";

export const fetchProducts = async (page = 0, category) => {
    const {
        data: [productList, productCount],
    } = await axios.get(
        `${config.SERVER_URL}/product?page=${page}${
            category ? `&category=${category}` : ""
        } `
    );
    return { productList, productCount };
};
