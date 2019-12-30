import React, { Component } from 'react';
import QuadsList from './quads/quadsList';
import Header from './Header/header';


class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <QuadsList />
            </React.Fragment>
        );
    }
}

export default Main;