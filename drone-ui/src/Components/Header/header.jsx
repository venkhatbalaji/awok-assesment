import React from 'react';
import {Navbar, Button, Nav , FormControl} from 'react-bootstrap';
function Header(){
    return(
        <Navbar bg="primary" variant="dark">
            <h1 className="nav-tiitle">Drone Rental</h1>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Login</Nav.Link>
                <Nav.Link href="#home">/</Nav.Link>
                <Nav.Link href="#home">Register</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;