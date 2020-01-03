import { Navbar, Nav } from 'react-bootstrap';
import Login from '../Login/login';
import Register from '../Register/register';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand className="nav-bar">Drone Rentals</Navbar.Brand>
                <Nav onSelect={selectedKey => this.props.onClickEvent(selectedKey)}>
                    <Nav.Item>
                        <Nav.Link eventKey="LOGIN_CLICK">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="REGISTER_CLICK">Register</Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.props.isLoginClicked ? <Login/> : null}
                {this.props.isRegisterClicked ? <Register/> : null}
            </Navbar>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isLoginClicked: state.isLoginClicked,
        isRegisterClicked : state.isRegisterClicked
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickEvent: (selectedKey) => dispatch({ type: selectedKey})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);