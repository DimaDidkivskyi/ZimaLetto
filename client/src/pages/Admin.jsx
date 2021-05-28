import React from "react";

export const Admin = () => {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
                <div className="container-fluid">
                    <a href="##" className="navbar-brand waves-effect">
                        <strong className="blue-text">Zimaletto</strong>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a href="##" className="nav-link waves-effect">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a href="##" className="nav-link waves-effect">
                                    About us
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a href="##" className="nav-link waves-effect">
                                    News
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a href="##" className="nav-link waves-effect">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="sidebar-fixed position-fixed">
                <a href="##" className="logo-wrapper waves-effect">
                    <img
                        src="https://mdbootstrap.com/img/logo/mdb-email.png"
                        alt="logo"
                        className="img-fluid"
                    />
                </a>
                <div className="list-group list-group-flush">
                    <a
                        href="##"
                        className="list-group-item waves-effect active"
                    >
                        <i className="fa fa-pie-chart mr-3 ">Dashboard</i>
                    </a>
                    <a href="##" className="list-group-item waves-effect">
                        <i className="fa fa-user mr-3">Profile</i>
                    </a>
                    <a href="##" className="list-group-item waves-effect">
                        <i className="fa fa-table mr-3">Tables</i>
                    </a>
                    <a href="##" className="list-group-item waves-effect">
                        <i className="fa fa-map mr-3">Maps</i>
                    </a>
                    <a href="##" className="list-group-item waves-effect">
                        <i className="fa fa-money mr-3">Orders</i>
                    </a>
                </div>
            </div>
        </header>
    );
};
