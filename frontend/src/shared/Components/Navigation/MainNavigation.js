import React, { Fragment } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import './MainNavigation.css';

const MainNavigation = props => {
    return (
        <Fragment>
            <SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title"><Link to={"/"}>YourPlaces</Link></h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </Fragment>

    );
};

export default MainNavigation;