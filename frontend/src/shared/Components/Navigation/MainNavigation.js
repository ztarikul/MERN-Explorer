import React, { Fragment, useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import './MainNavigation.css';
import BackDrop from "../UIElements/BackDrop";

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }
    return (
        <Fragment>
            // Alternative: condition && statement

            {/* drawerIsOpen && (<SideDrawer></SideDrawer>) */}
            {drawerIsOpen && (<BackDrop onClick={closeDrawer} />)}

            {drawerIsOpen ? (<SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>) : null}
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
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