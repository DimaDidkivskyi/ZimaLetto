import React, { useContext, useCallback } from "react";
import { useQuery, useMutation } from "react-query";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { useForm } from "react-hook-form";

import { Marginer } from "../marginer/index";
import {
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
    BoldLink,
} from "./common";
import { AccountContext } from "./accountContext";
import { config } from "../../utils/config";
import { loginSchema } from "./validationLogin";

export const LoginForm = () => {
    const { switchToSignup, closeModal } = useContext(AccountContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(loginSchema),
    });
    const mutation = useMutation(
        (credentials) =>
            axios.post(`${config.SERVER_URL}/user/login`, credentials),
        {
            onSuccess: ({ data }) => {
                localStorage.setItem("token", data.token);
                closeModal();
            },
        }
    );

    const { refetch } = useQuery("me", () =>
        axios.get(`${config.SERVER_URL}/user/me`)
    );

    const submitForm = useCallback(
        async (values) => {
            await mutation.mutateAsync(values);
            await refetch();
        },
        [mutation, refetch]
    );

    return (
        <BoxContainer>
            <FormContainer onSubmit={handleSubmit(submitForm)}>
                <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                />
                {errors && errors.email && <p>{errors.email.message}</p>}
                <Input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                />
                {errors && errors.password && <p>{errors.password.message}</p>}
                <Marginer direction="vertical" margin={40} />
                <SubmitButton type="submit">Sign in</SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin={70} />
            <MutedLink href="#">
                Don't have an account?
                <BoldLink href="#" onClick={switchToSignup}>
                    Sign up
                </BoldLink>{" "}
            </MutedLink>
        </BoxContainer>
    );
};
