import QuadsCard from './quadsCards';
import Quads from './quads';
import React, { Component } from 'react';
import {Row} from 'react-bootstrap';

class QuadsList extends Component {
    render() {
        var keyVal = 0;
        const cards = Quads.quads.map((quad) =>{
            keyVal = keyVal + 1; 
            return(
                <QuadsCard key={keyVal} data={quad}/>
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