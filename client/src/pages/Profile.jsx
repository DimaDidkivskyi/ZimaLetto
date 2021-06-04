import React from "react";
import { useMutation } from "react-query";
import axios from "axios";

import { queryClient } from "..";

import { Header, Footer } from "../components";
import { config } from "../utils/config";

export const Profile = () => {
    const mutation = useMutation(async () => {
        queryClient.removeQueries("me");
        localStorage.setItem("token", "");
        return axios.get(`${config.SERVER_URL}/api/user/logout`);
    });

    return (
        <div>
            <Header />
            asdan
            <h2>profile</h2>
            <button onClick={mutation.mutate}>Log out</button>
            <Footer />
        </div>
    );
};
