import React from "react";

import { Header, Footer, ContactsAboutUs } from "../components";

export const Contacts = () => {
    return (
        <section className="contacts">
            <Header />
            <div className="contacts__inner">
                <ContactsAboutUs />
            </div>
            <Footer />
        </section>
    );
};
