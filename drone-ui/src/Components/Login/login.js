import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <Modal show={this.props.isLoginClicked} onHide={this.props.onCloseEvent}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onCloseEvent}>Close</Button>
                    <Button variant="primary" onClick={this.props.onCloseEvent}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isLoginClicked: state.isLoginClicked
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseEvent: () => dispatch({ type: 'CLOSE_LOGIN' })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);