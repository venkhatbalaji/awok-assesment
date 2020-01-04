import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class Login extends Component {
    onSubmitClick() {
        if (this.refs) {
            let emailId = this.refs.emailaddress.value;
            if (emailId) {
                if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
                    if (emailId === this.props.registeredData.mailId) {
                        if (this.props.globalRegisteredData.length > 0) {
                            let result = false;
                            this.props.globalRegisteredData.forEach((item) => {
                                if (emailId === item.mailId) {
                                    this.props.onCloseEvent();
                                    result = true;
                                }
                            });
                            if (result === true) {
                                alert('Your session is already running');
                                return;
                            }
                        }
                        this.props.onSubmitLogin();
                        this.props.onCloseEvent();
                    } else {
                        if (this.props.globalRegisteredData.length > 0) {
                            let result = false;
                            this.props.globalRegisteredData.forEach((item) => {
                                if (emailId === item.mailId) {
                                    this.props.onSubmitRegister(item);
                                    this.props.onRegisteredLogin();
                                    this.props.onCloseEvent();
                                    result = true;
                                }
                            });
                            if (result === true) {
                                alert('Your session is already running');
                                return;
                            }
                        }
                        alert("Please Register before logging in!!");
                    }
                } else {
                    alert("Please check your Email Address!!");
                }
            } else {
                alert("Email Id or Password cannot be empty");
            }
        }
    }
    render() {
        return (
            <Modal show={this.props.isLoginClicked} onHide={this.props.onCloseEvent}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref="emailaddress" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onCloseEvent}>Close</Button>
                    <Button variant="primary" onClick={this.onSubmitClick.bind(this)}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isLoginClicked: state.isLoginClicked,
        registeredData: state.registeredData,
        loggedInData: state.loggedInData,
        globalRegisteredData: state.globalRegisteredData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseEvent: () => dispatch({ type: 'CLOSE_LOGIN' }),
        onSubmitLogin: () => dispatch({ type: 'SUBMIT_LOGIN' }),
        onSubmitRegister: (registerData) => dispatch({ type: 'SUBMIT_REGISTER', data: registerData }),
        onRegisteredLogin: () => dispatch({type: 'REGISTERED_LOGIN'})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);