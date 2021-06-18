import React, { useContext } from "react";

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

export const SignUpForm = () => {
    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Fullname" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Sign up</SubmitButton>
            <Marginer direction="vertical" margin="1.6em" />
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="#" onClick={switchToSignin}>
                    Sign in
                </BoldLink>{" "}
            </MutedLink>
        </BoxContainer>
    );
};
