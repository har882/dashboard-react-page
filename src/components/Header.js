import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import {Col, NavbarBrand, NavItem, Row} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import "../styles/Menu.css";
import Menu from "./Menu";
import audio from '../assets/tick.mp3';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Header = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);



    const scrollHandler = () => {
        if (window.scrollY >= 70) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    };
    const start = () => {
        new Audio(audio).play();
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>

                <NavbarToggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                        start();
                    }}
                ><Menu onClick={start}/>
                </NavbarToggle>
                <NavItem>
                    <Link
                        className="Dashboard-heading"
                        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                    >
                        Dashboard
                    </Link>
                    <br/>
                    <Link
                        className="Navlink"
                        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={750}
                    >
                        Monday, 20 July 2020
                    </Link>
                </NavItem>
                    <NavbarCollapse id="responsive-navbar-nav">





                    <Nav className="ml-auto" defaultActiveKey="#home">

                        <NavItem>

                        <Link
                            className="Navlink"
                            activeClass="active"
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750}
                        >
                            <NotificationsIcon/> John Bayer
                        </Link>
                        <Link
                            className="Navlink"
                            activeClass="active"
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750}
                        >
                            <SearchOutlinedIcon/>Search for Applications here
                        </Link>
                    </NavItem>


                    </Nav>

                </NavbarCollapse>

            </Container>
        </Navbar>

    );
};



export default Header;
