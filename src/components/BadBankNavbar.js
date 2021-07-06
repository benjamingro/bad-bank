import React from 'react';
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMask } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class BadBankNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myfirstcomponents: "",
            simpleform: ""
        };
        // this.state={myState:false}; 
        // this.clickHandler = this.clickHandler.bind(this);

    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    // clickHandler(event) {
    //     console.log(`clicked event.target.id ${event.target.id}`); 
    //     // if(event.target.id==='navbar-brand-id')
    //     // {

    //     // }
    //     // document.getElementById('myfirstcomponents').classList.remove('active');
    // }


    render() {
        return (
            <>
                <Navbar bg="light" variant="light" expand="lg">
                    <Navbar.Brand as={Link} to="/" id="home" >Bad Bank&nbsp;&nbsp;<FontAwesomeIcon icon={faMask} className="" style={{}} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* ml-auto  */}
                        <Nav className="mr-auto ml-auto">
                            <Nav.Link as={Link} to="/createaccount" id="createaccount" >Create Account</Nav.Link>
                            <Nav.Link as={Link} to="/deposit" id="deposit" >Deposit</Nav.Link>
                            <Nav.Link as={Link} to="/withdraw" id="withdraw" >Withdraw</Nav.Link>
                            <Nav.Link as={Link} to="/alldata" id="alldata" >All Data</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>

        );
    }
}

export default BadBankNavbar