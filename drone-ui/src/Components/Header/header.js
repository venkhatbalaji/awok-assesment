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
                    {!this.props.isLoggedIn ?
                        <Nav.Item>
                            <Nav.Link eventKey="LOGIN_CLICK">Login</Nav.Link>
                        </Nav.Item> :
                        <React.Fragment>
                            <Nav>
                                <Navbar.Brand><strong>Welcome {this.props.registeredData.firstName + " " + this.props.registeredData.lastName}</strong></Navbar.Brand>
                                <Nav.Item>
                                    <Nav.Link eventKey="LOGOUT_CLICK">Logout</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </React.Fragment>}
                    {this.props.isRegistered ? null :
                        <Nav.Item>
                            <Nav.Link eventKey="REGISTER_CLICK">Register</Nav.Link>
                        </Nav.Item>}
                </Nav>
                {this.props.isLoginClicked ? <Login /> : null}
                {this.props.isRegisterClicked ? <Register /> : null}
            </Navbar>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isLoginClicked: state.isLoginClicked,
        isRegisterClicked: state.isRegisterClicked,
        isRegistered: state.isRegisterd,
        isLoggedIn: state.isLoggedIn,
        registeredData: state.registeredData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickEvent: (selectedKey) => dispatch({ type: selectedKey })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);