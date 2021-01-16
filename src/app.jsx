import React, { Component } from 'react';
import Cards from './components/cards';
import LoadButtons from './components/loadbuttons';


class App extends Component {
    state = { 
        loadFilms: false,
        loadPerson: false
    }

    updateFilmsLoad = (loadState) => {
        if(this.state.loadFilms === this.state.loadPerson) {  //only should be true when page first loads
            this.setState({ loadFilms: loadState })
        } else {
            this.setState({ //replaces person with films info, brings back person button
                loadFilms: loadState,
                loadPerson: false
            });
        }
    }
    
    updatePersonLoad = (loadState) => {
        if(this.state.loadFilms === this.stateloadPerson) { //only should be true when page first loads
            this.setState({ loadPerson: loadState })
        } else {
            this.setState({ //replaces films with person info, brings back film button
                loadPerson: loadState,
                loadFilms: false
            })
        }
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
                    <LoadButtons loadFilms={this.state.loadFilms} updateFilmsLoad={this.updateFilmsLoad} loadPerson={this.state.loadPerson} updatePersonLoad={this.updatePersonLoad} />
                </div>
                <div className="container">
                    <div className="row">
                        <Cards loadFilms={this.state.loadFilms} loadPerson={this.state.loadPerson} />
                    </div>
                </div>
            </>
        )
    }
}

export default App;