import React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { queryClient } from "..";

import { Header, Footer, Button } from "../components";
import { config } from "../utils/config";

export const Profile = () => {
    const history = useHistory();
    const mutation = useMutation(async () => {
        queryClient.removeQueries("me");
        localStorage.setItem("token", "");
        await axios.get(`${config.SERVER_URL}/user/logout`);
        history.push("/");
    });

    return (
        <section className="profile">
            <Header />
            <div className="container">
                <center>
                    <h1 style={{ marginTop: "20px" }}>COMING SOON</h1>
                </center>
                <h2>profile</h2>
                <Button onClick={mutation.mutate}>Log out</Button>
            </div>
            <Footer />
        </section>
    );
};
