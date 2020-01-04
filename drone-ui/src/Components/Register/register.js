import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class Register extends Component {
    onRegisterClick() {
        let formData = {}
        if (this.refs.firstName.value && this.refs.lastName.value && this.refs.userPhoneNumber.value && this.refs.userMailId.value) {
            let emailId = this.refs.userMailId.value;
            if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
                formData = {
                    firstName: this.refs.firstName.value,
                    lastName: this.refs.lastName.value,
                    phoneNumber: this.refs.userPhoneNumber.value,
                    mailId: this.refs.userMailId.value
                }
                if (formData) {
                    if (this.props.globalRegisteredData.length > 0) {
                        let result = false;
                        this.props.globalRegisteredData.forEach((item) => {
                            if (formData.mailId === item.mailId) {
                                this.props.onCloseEvent();
                                result = true;
                            }
                        });
                        if(result === true){
                            alert('Your session is already active');
                            return;
                        }
                    }
                }
                this.props.onSubmitRegister(formData);
                this.props.onCloseEvent();
            } else {
                alert("Enter a valid Email id");
            }
        } else {
            alert("Fill up all the details");
        }
    }
    render() {
        return (
            <Modal show={this.props.isRegisterClicked} onHide={this.props.onCloseEvent}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control ref="firstName" type="text" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control ref="lastName" type="text" placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Emergency Phone Number</Form.Label>
                        <Form.Control ref="userPhoneNumber" type="text" placeholder="Enter your phone number incase of emergencey" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control ref="userMailId" type="text" placeholder="Enter your email Id" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onCloseEvent}>Close</Button>
                    <Button variant="primary" onClick={this.onRegisterClick.bind(this)}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isRegisterClicked: state.isRegisterClicked,
        registeredData: state.registeredData,
        globalRegisteredData: state.globalRegisteredData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseEvent: () => dispatch({ type: 'CLOSE_REGISTER' }),
        onSubmitRegister: (registerData) => dispatch({ type: 'SUBMIT_REGISTER', data: registerData })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);