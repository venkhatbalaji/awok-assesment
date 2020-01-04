import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
class QuadsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onStart: false,
            secondsElapsed: this.props.data.maxFlightTime.slice(0, -3) * 60,
            sessionDetails: []
        }
    }
    getMinutes() {
        return Math.floor(this.state.secondsElapsed / 60);
    }
    getSeconds() {
        return ('0' + this.state.secondsElapsed % 60).slice(-2);
    }
    onClickStart() {
        this.setState({ onStart: true, sessionDetails: this.props.registeredData});
        let sessionData = [...this.props.globalRegisteredData];
        sessionData.push(this.props.registeredData);
        this.props.onStartGlobalSession(sessionData);
        this.props.onCloseEvent();
        setInterval(() => {
            if (this.state.secondsElapsed >= 0) {
                this.setState({
                    secondsElapsed: this.state.secondsElapsed - 1
                })
                if (this.state.secondsElapsed === 0) {
                    alert(`Thank you ${this.state.sessionDetails.firstName} your session is complete`);
                    let completeSession = [];
                    this.props.globalRegisteredData.forEach((item) => {
                        if(item.mailId !== this.state.sessionDetails.mailId){
                            completeSession.push(item);
                        }
                    });  
                    this.props.onStartGlobalSession(completeSession);
                    this.setState({ onStart: false, sessionDetails: [] });
                    this.props.onTimerStop();
                }
            }
        }, 1000)
    }
    render() {
        return (
            <Col xs={3}>
                <Card className="card" style={{ width: '18em' }}>
                    <Card.Body>
                        <Card.Title><strong>{this.props.data.model}</strong></Card.Title>
                        <Card.Text>
                            {this.state.onStart ? <span><strong>Timer : {this.getMinutes()}{":"}{this.getSeconds()}</strong></span> :
                                <React.Fragment>
                                    <span><strong>Maximum Flight Time : </strong></span>
                                    {this.props.data.maxFlightTime}
                                    <br />
                                    <span><strong>Manufaturer : </strong></span>
                                    {this.props.data.manufacturer}
                                    <br />
                                    <span><strong>Charge : </strong></span>
                                    {this.props.data.charge}
                                </React.Fragment>
                            }
                        </Card.Text>
                        {!this.state.onStart ? <Button variant="primary" disabled={this.props.cardbuttonEnable} onClick={this.onClickStart.bind(this)}>Start</Button> : null}
                    </Card.Body>
                </Card>
                <br />
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInData: state.loggedInData,
        isLoggedIn: state.isLoggedIn,
        cardbuttonEnable: state.cardbuttonEnable,
        registeredData: state.registeredData,
        globalRegisteredData: state.globalRegisteredData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseEvent: () => dispatch({ type: 'START_BUTTONCLICK' }),
        onStartGlobalSession: (sessionData) => dispatch({ type: 'START_GLOBAL_SESSION', data: sessionData }),
        onTimerStop: () => dispatch({type: 'LOGOUT_CLICK'})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(QuadsCard);