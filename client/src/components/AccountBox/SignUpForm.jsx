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
import { registrationSchema } from "./validationRegistration";

export const SignUpForm = () => {
    const { switchToSignin, closeModal } = useContext(AccountContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(registrationSchema),
    });
    console.log(errors);
    const mutation = useMutation(
        (credentials) =>
            axios.post(`${config.SERVER_URL}/user/registration`, credentials),
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
                    {...register("fname")}
                    type="text"
                    placeholder="First name"
                />
                {errors && errors.fname && <p>{errors.fname.message}</p>}
                <Input
                    {...register("lname")}
                    type="text"
                    placeholder="Last name"
                />
                {errors && errors.lname && <p>{errors.lname.message}</p>}
                <Input
                    {...register("email", { minLength: 2 })}
                    type="email"
                    placeholder="Email"
                />
                {errors && errors.email && <p>{errors.email.message}</p>}
                <Input
                    {...register("password", { minLength: 2 })}
                    type="password"
                    placeholder="Password"
                />
                {errors && errors.password && <p>{errors.password.message}</p>}
                <Input
                    {...register("password2", { minLength: 2 })}
                    type="password"
                    placeholder="Confirm password"
                />
                {errors && errors.password2 && (
                    <p>{errors.password2.message}</p>
                )}
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit">Sign up</SubmitButton>
            </FormContainer>

            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="#" onClick={switchToSignin}>
                    Sign in
                </BoldLink>{" "}
            </MutedLink>
            <Marginer direction="vertical" margin={20} />
        </BoxContainer>
    );
};
