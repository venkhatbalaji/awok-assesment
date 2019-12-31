import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
function Header(){
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand className="nav-bar">React-Bootstrap</Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="#home">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#home">Register</Nav.Link>
                </Nav.Item>         
            </Nav>            
        </Navbar>
    );
}

export default Header;