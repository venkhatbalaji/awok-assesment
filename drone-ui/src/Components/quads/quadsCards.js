import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';


class QuadsCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.data.model}</Card.Title>
                        <Card.Text>
                            {this.props.data.maxFlightTime}
                            {this.props.data.manufacturer}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <br />
            </div>
        );
    }

}

export default QuadsCard;