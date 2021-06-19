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

export const LoginForm = () => {
    const { switchToSignup } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Pasword" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Sign in</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Don't have an account?
                <BoldLink href="#" onClick={switchToSignup}>
                    Sign up
                </BoldLink>{" "}
            </MutedLink>
        </BoxContainer>
    );
};
