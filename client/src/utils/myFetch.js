import { config } from "./config";

export const myFetch = (url, options) => {
    const token = "Bearer " + localStorage.getItem("token");
    url = config.SERVER_URL + url;

    if (options) {
        options.headers = {
            authorization: "Bearer " + token,
            ...options.headers,
        };
    }

    return fetch(
        url,
        options || { headers: { authorization: "Bearer " + token } }
    );
};
