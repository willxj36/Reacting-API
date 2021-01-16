import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Cards extends Component {
    state = {
        componentLoaded: false, //placeholder, might not be used
        filmArray: [],
        personArray: []
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.loadFilms !== prevProps.loadFilms && this.props.loadFilms) {
            let newFilm = [];
            this.setState({ 
                filmArray: [],
                personArray: []
            });
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
        } else if(this.props.loadPerson !== prevProps.loadPerson && this.props.loadPerson) {
            let newPerson = [];
            this.setState({
                personArray: [],
                filmArray: []
            });
            fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(obj => {
                newPerson = obj.map((person) => {
                    return(
                        <div className="card col-md-5 m-2 shadow border rounded" key={person.id}>
                            <div className="card-body">
                                <h4 className="card-title">{person.name}</h4>
                                <h6 className="card-subtitle m-2 text-muted">{person.gender}</h6>
                                <h6 className="card-subtitle m-2 text-muted">{person.age}</h6>
                                <a href={person.url} target="_blank" className="btn btn-dark">Character JSON</a>
                            </div>
                        </div>
                    )
                })
                this.setState({ personArray: [...this.state.personArray, ...newPerson] });
            })
            .catch(err => console.log(err));
        }
    }

    render() {
        if(this.props.loadFilms) {
            return(<> {this.state.filmArray} </>);
        } else if(this.props.loadPerson) {
            return(<> {this.state.personArray} </>);
        } else {
            return null;
        }
    }
}

export default Cards;