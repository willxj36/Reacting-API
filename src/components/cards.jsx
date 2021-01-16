import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Cards extends Component {
    state = {
        componentLoaded: false, //placeholder, might not be used
        filmArray: [],
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.loadCmd !== prevProps.loadCmd) {
            let newFilm;
            this.setState({ componentLoaded: true });
            fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => {
                newFilm = obj.map((film) => {
                    return(
                        <div className="card col-md-5 m-2 shadow border rounded" key={film.id}>
                            <div className="card-body">
                                <h4 className="card-title">{film.title}</h4>
                                <h6 className="card-subtitle m-2 text-muted">{film.release_date}</h6>
                                <p className="card-text">{film.description}</p>
                            </div>
                        </div>
                    )
                })
                this.setState({ filmArray: [...this.state.filmArray, ...newFilm] });
            })
            .catch(err => console.log(err));
        }
    }

    render() {
        // if(this.props.loadCmd) {
            return(<> {this.state.filmArray} </>);
        // } else {
        //     return null;
        // } 
    }
}

export default Cards;