import React, { Component } from 'react';
import Cards from './components/cards';


class App extends Component {
    state = {}

    render() {
        return(
            <>
                <div className="jumbotron jumbotron-fluid bg-dark">
                    <div className="container">
                        <h1 className="display-4 text-white">Studio Ghibli Film Portfolio</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Cards />
                    </div>
                </div>
            </>
        )
    }
}

export default App;