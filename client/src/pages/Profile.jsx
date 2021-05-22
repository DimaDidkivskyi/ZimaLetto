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

export const Profile = () => {
    const mutation = useMutation(async () => {
        await queryClient.removeQueries("me");
        localStorage.setItem("token", "");
        return axios.get("http://localhost:3000/api/user/logout");
    });

    return (
        <div>
            asdan
            <h2>profile</h2>
            <button onClick={mutation.mutate}>Log out</button>
        </div>
    );
};
