import React from "react";

import AboutUs from "../../assets/img/about-us.png";

export const ContactsAboutUs = () => {
    return (
        <section className="contacts-about">
            <div className="container">
                <h1>About us</h1>
                <img src={AboutUs} alt="" />

                <div className="contacts-about__content">
                    <p>
                        Zimaletto Corporation is a global leader in the design,
                        marketing, and distribution of premium lifestyle
                        products in five categories, including apparel,
                        accessories, home, fragrances, and hospitality. For more
                        than 50 years, Ralph Lauren’s reputation and distinctive
                        image have been consistently developed across an
                        expanding number of products, brands, and international
                        markets. The Company’s brand names, which include Ralph
                        Lauren Collection, Ralph Lauren Purple Label, Polo Ralph
                        Lauren, Double RL, Lauren Ralph Lauren, Polo Ralph
                        Lauren Children, Chaps, and Club Monaco, among others,
                        constitute one of the world's most widely recognized
                        families of consumer brands. We believe that our global
                        reach, breadth of product offerings, and multichannel
                        distribution are unique among luxury and apparel
                        companies.
                    </p>
                    <p>
                        Reflecting a distinctive American perspective, we have
                        been an innovator in aspirational lifestyle branding and
                        believe that, under the direction of internationally
                        renowned designer Ralph Zimaletto, we have had a
                        considerable influence on the way people dress and the
                        way that fashion is advertised and celebrated throughout
                        the world. We combine consumer insights with our design,
                        marketing, and imaging skills to offer, along with our
                        licensing alliances, broad lifestyle product collections
                        with a unified vision.
                    </p>
                </div>
            </div>
        </section>
    );
};
