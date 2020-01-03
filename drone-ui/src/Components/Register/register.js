import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class Register extends Component {
    render() {
        return (
            <Modal show={this.props.isRegisterClicked} onHide={this.props.onCloseEvent}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name"/>                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Emergency Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name"/>                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
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
        isRegisterClicked: state.isRegisterClicked
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseEvent: () => dispatch({ type: 'CLOSE_REGISTER' })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);