import React, { Component } from 'react';

class LoadButtons extends Component {

    state = { 
        showFilmsButton: true,
        showPersonButton: true
    }

    updateFilmsLoad = () => {
        this.props.updateFilmsLoad(true);
        this.setState({ 
            showFilmsButton: false,
            showPersonButton: true
        });
    }

    updatePersonLoad = () => {
        this.props.updatePersonLoad(true);
        this.setState({
            showPersonButton: false,
            showFilmsButton: true
        })
    }

    render() {
        if(this.state.showFilmsButton && this.state.showPersonButton) {
            return(
                <div className="mb-5">
                    <img className="mr-5" src="logo.png" alt="Studio Ghibli logo"/>
                    <button onClick={this.updateFilmsLoad} type="button" className="btn btn-lg btn-dark ml-5">Load Films</button>
                    <button onClick={this.updatePersonLoad} type="button" className="btn btn-lg btn-dark ml-5">Load People</button>
                </div>
            )
        } else if(!this.state.showFilmsButton && this.state.showPersonButton) {
            return(
                <div className="mb-5">
                    <img src="logo.png" alt="Studio Ghibli logo"/>
                    <button onClick={this.updatePersonLoad} type="button" className="btn btn-lg btn-dark ml-5">Load People</button>
                </div>
            )
        } else {
            return(
                <div className="mb-5">
                    <img className="mr-5" src="logo.png" alt="Studio Ghibli logo"/>
                    <button onClick={this.updateFilmsLoad} type="button" className="btn btn-lg btn-dark ml-5">Load Films</button>
                </div>
            )
        }
    }
}

export default LoadButtons;