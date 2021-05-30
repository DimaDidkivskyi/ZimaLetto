import axios from "axios";

import { config } from "../../utils/config";

export const fetchCategories = async () => {
    const { data } = await axios.get(`${config.SERVER_URL}/category`);
    return { data };
};
