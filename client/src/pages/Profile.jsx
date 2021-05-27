import React from "react";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";
import axios from "axios";

import { queryClient } from "..";

import { Header, Footer } from "../components";

export const Profile = () => {
    const mutation = useMutation(async () => {
        await queryClient.removeQueries("me");
        localStorage.setItem("token", "");
        return axios.get("http://localhost:3000/api/user/logout");
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
