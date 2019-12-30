import QuadsCard from './quadsCards';
import Quads from './quads';
import React, { Component } from 'react';
import {Row} from 'react-bootstrap';

class QuadsList extends Component {
    render() {
        const cards = Quads.quads.map((quad) =>{
            return(
                <QuadsCard key={0} data={quad}/>
            );
        });
        return (
            <div className="card-list">
                <Row>
                    {cards}            
                </Row>
            </div>
        );
    }
}

export default QuadsList;