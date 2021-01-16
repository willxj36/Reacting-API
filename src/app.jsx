import React, { Component } from 'react';
import Cards from './components/cards';
import LoadButton from './components/loadbutton';


class App extends Component {
    state = { loadCmd: false }

    updateLoad = (loadState) => {
        this.setState({ loadCmd: loadState });
    }

    render() {
        return(
            <>
                <div className="jumbotron jumbotron-fluid bg-dark">
                    <div className="container">
                        <h1 className="display-4 text-white">Studio Ghibli Film Portfolio</h1>
                    </div>
                </div>
                <div className="container bg-muted">
                    <LoadButton loadCmd={this.state.loadCmd} updateLoad={this.updateLoad} />
                </div>
                <div className="container">
                    <div className="row">
                        <Cards loadCmd={this.state.loadCmd} />
                    </div>
                </div>
            </>
        )
    }
}

export default App;