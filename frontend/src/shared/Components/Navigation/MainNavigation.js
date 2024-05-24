import React, { Fragment, useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import './MainNavigation.css';
import BackDrop from "../UIElements/BackDrop";

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false)
    }
    return (
        <Fragment>
            // Alternative: condition && statement

            {/* drawerIsOpen && (<SideDrawer></SideDrawer>) */}
            {drawerIsOpen && (<BackDrop onClick={closeDrawerHandler} />)}

            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
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