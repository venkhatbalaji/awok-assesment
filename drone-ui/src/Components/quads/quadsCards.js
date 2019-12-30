import React, { Component } from 'react';
import {Card, Button, Col} from 'react-bootstrap';


class QuadsCard extends Component {
    render() {
        return (
            <Col xs={3}>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><strong>{this.props.data.model}</strong></Card.Title>
                        <Card.Text>
                            <span><strong>MaximumFlightTime:</strong></span>
                            {this.props.data.maxFlightTime}
                            <br/>
                            <span><strong>Manufaturer:</strong></span>
                            {this.props.data.manufacturer}
                            <br />
                            <span><strong>Charge:</strong></span>
                            {this.props.data.charge}
                        </Card.Text>
                        <Button variant="primary">Order</Button>
                    </Card.Body>
                </Card>
                <br />
            </Col>
        );
    }

}

export default QuadsCard;