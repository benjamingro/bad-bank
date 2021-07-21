import React from 'react';
import { Navbar, Button, Nav, NavDropdown, Form, FormControl, Tooltip, OverlayTrigger } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMask } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from "react-router-dom";

import Switch from "react-switch";

import {
    useLocation
} from "react-router-dom";

import '../css/BadBankNavbar.css';


function BadBankNavbar({ userAccount, handleLogout }) {

    //#region Update active link in Navbar using useLocation() . 
    const UpdateLinkActive = () => {
        let location = useLocation();
        let pathname = location.pathname;
        // transforms /account to account
        pathname = pathname.substring(1);
        // if(pathname==''){
        //     pathname='home';
        // }
        try
        {
            const myLinks = document.getElementsByTagName('a');
            Array.prototype.forEach.call(myLinks, (link) => {
                link.classList.remove('active');
                if(link.id!='home'){
                    link.classList.add('inactive');
                }
                
            });

            document.getElementById(pathname).classList.remove('inactive');
            document.getElementById(pathname).classList.add('active');

        }
        catch(e){
            // fail silently, DOM has not loaded yet
        }
         
    };
    UpdateLinkActive();
    //#endregion


    const [tooltips, setTooltips] = React.useState(true);
    const homeTooltip = (
        tooltips && !userAccount ?
            <Tooltip>
                Log in or create an account
            </Tooltip>
            :
            (tooltips && userAccount ?
                <Tooltip>
                    View account options
                </Tooltip>
                : <div></div>)

    );

    const depositTooltip = (
        tooltips && !userAccount ?
            <Tooltip>
                Log in to make a deposit
            </Tooltip>
            :
            (tooltips && userAccount ?
                <Tooltip>
                    Make a deposit
                </Tooltip>
                : <div></div>)

    );

    const withdrawTooltip = (
        tooltips && !userAccount ?
            <Tooltip>
                Log in to withdraw money from your account
            </Tooltip>
            :
            (tooltips && userAccount ?
                <Tooltip>
                    Withdraw money from your account
                </Tooltip>
                : <div></div>)

    );

    const allDataTooltip = (
        tooltips ?
            <Tooltip>
                View all user data
            </Tooltip>
            :
            <div></div>

    );

    const logoutTooltip = (
        tooltips ?
            <Tooltip>
                Log out of your account
            </Tooltip>
            :
            <div></div>

    );

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand as={Link} to="/" id="home" >Bad Bank&nbsp;&nbsp;<FontAwesomeIcon icon={faMask} className="" style={{}} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* ml-auto  */}
                    <Nav className="mr-auto ml-auto">

                        <OverlayTrigger trigger="hover" placement="bottom" overlay={homeTooltip}>
                            <Nav.Link as={Link} to="/account" id="account" >
                                {!userAccount && (
                                    <span>Log in / Create Account </span>
                                )}
                                {userAccount && (
                                    <span>Home </span>
                                )}

                            </Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger trigger="hover" placement="bottom" overlay={depositTooltip}>
                            <Nav.Link as={Link} to="/deposit" id="deposit" >Deposit</Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={withdrawTooltip}>
                            <Nav.Link as={Link} to="/withdraw" id="withdraw" >Withdraw</Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={allDataTooltip}>
                            <Nav.Link as={Link} to="/alldata" id="alldata" >All Data</Nav.Link>
                        </OverlayTrigger>


                        {userAccount && (
                            <OverlayTrigger trigger="hover" placement="bottom" overlay={logoutTooltip}>
                                <Nav.Link as={Link} onClick={() => { handleLogout() }} id="logout" >Logout</Nav.Link>
                            </OverlayTrigger>

                        )}

                    </Nav>

                    <div className="d-block">
                        <label className="my-0">
                            <Switch onChange={setTooltips} checked={tooltips} />
                        </label>
                    </div>
                    <div className="d-block ml-2 text-secondary">
                        {tooltips && (
                            <>tooltips on</>
                        )}
                        {!tooltips && (
                            <>tooltips off</>
                        )}
                    </div>


                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default BadBankNavbar