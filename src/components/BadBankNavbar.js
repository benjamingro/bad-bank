import React from 'react';
import { Navbar, Button, Nav, NavDropdown, Form, FormControl,Tooltip,OverlayTrigger } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMask } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import MenuBarTooltip from './MenuBarTooltip.js';





function BadBankNavbar({ userAccount, handleLogout }) {
    const [homeTooltip,setHomeTooltip] = React.useState(true); 
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand as={Link} to="/" id="home" >Bad Bank&nbsp;&nbsp;<FontAwesomeIcon icon={faMask} className="" style={{}} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* ml-auto  */}
                    <Nav className="mr-auto ml-auto">
                        
                        <Nav.Link as={Link} to="/account" id="account" >
                            {!userAccount && (
                                <span>Log in / Create Account </span>
                            )}
                            {userAccount && (
                                <span>Home </span>
                            )}

                        </Nav.Link>
                        <Tooltip>
                            Home tootltip
                        </Tooltip>
                        {/* <MenuBarTooltip show={homeTooltip} targetId="deposit"/> */}
                        <Nav.Link as={Link} to="/deposit" id="deposit" >Deposit</Nav.Link>
                        <Nav.Link as={Link} to="/withdraw" id="withdraw" >Withdraw</Nav.Link>
                        <Nav.Link as={Link} to="/alldata" id="alldata" >All Data</Nav.Link>
                        {userAccount && <Nav.Link as={Link} onClick={()=>{handleLogout()}} id="logout" >Logout</Nav.Link>}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default BadBankNavbar