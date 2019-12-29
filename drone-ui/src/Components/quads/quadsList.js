import QuadsCard from './quadsCards';
import Quads from './quads';
import React, { Component } from 'react';

class QuadsList extends Component {
    render() {
        const cards = Quads.quads.map((quad) =>{
            return(
                <QuadsCard key={0} data={quad}/>
            );
        });
        return (
            <div>
                {cards}            
            </div>
        );
    }
}

export default QuadsList;