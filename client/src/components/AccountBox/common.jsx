import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.a`
    font-size: 11px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
`;

export const BoldLink = styled.span`
    font-size: 11px;
    color: #fe5f1e;
    font-weight: 500;
    text-decoration: none;
    margin: 0 4px;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 2.5px solid rgba(200, 200, 200, 0.3);
    border-bottom: none;
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 12px;
    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }
    &:focus {
        outline: none;
        border-bottom: #fe5f1e;
    }
    &:last-of-type {
        border-bottom: 2.5px solid rgba(200, 200, 200, 0.3);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 39%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #fe5f1e;
    &:hover {
        filter: brightness(1.03);
    }
`;
