import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import {
    useQuery,
    useQueryClient,
    useMutation,
    QueryClient,
    QueryClientProvider,
} from "react-query";

import { FormSignup } from "./FormSignup";
import { FormSuccess } from "./FormSuccess";
import { myFetch } from "../../utils/myFetch";

import Img2 from "../../assets/img/img-2.svg";

export const Form = ({ showModal, setShowModal }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const mutation = useMutation(
        (credentials) =>
            axios.post(
                "http://localhost:3000/api/user/registration",
                credentials
            ),
        {
            onSuccess: ({ data }) => {
                localStorage.setItem("token", data.token);
                console.log(data);
            },
        }
    );

    const { refetch, data } = useQuery("me", () =>
        axios.get("http://localhost:3000/api/user/me")
    );

    console.log(data);

    const submitForm = useCallback(
        async (values) => {
            await mutation.mutateAsync(values);
            await refetch();
            setIsSubmitted(true);
        },
        [mutation]
    );

    const closeModalByButton = () => {
        setShowModal((prev) => !prev);
    };

    const closeModalByBackground = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const modalRef = useRef();
    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
    });

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

    return (
        <>
            {showModal ? (
                <animated.div style={{ ...animation, zIndex: 10 }}>
                    <section
                        ref={modalRef}
                        onClick={closeModalByBackground}
                        className="modal"
                    >
                        <div className="form-container">
                            <span
                                onClick={closeModalByButton}
                                className="close-btn"
                            >
                                ×
                            </span>
                            <div className="form-content-left">
                                <img
                                    src={Img2}
                                    alt="spaceship"
                                    className="form-img"
                                />
                            </div>
                            {!isSubmitted ? (
                                <FormSignup submitForm={submitForm} />
                            ) : (
                                <FormSuccess />
                            )}
                        </div>
                    </section>
                </animated.div>
            ) : null}
        </>
    );
};
