import React, { Component } from 'react';

class LoadButton extends Component {

    state = { showButton: true }

    updateLoad = () => {
        if(!this.props.loadCmd ? this.props.updateLoad(true) : null);
        this.setState({ showButton: false });
    }

    render() {
        if(this.state.showButton) {
            return(
                <div className="mb-5">
                    <img className="mr-5" src="logo.png" alt="Studio Ghibli logo"/>
                    <button onClick={this.updateLoad} type="button" className="btn btn-lg btn-dark ml-5">Load Films</button>
                </div>
            )
        } else {
            return(
                <div className="mb-5">
                    <img src="logo.png" alt="Studio Ghibli logo"/>
                </div>
            )
        }
    }
}

export default LoadButton;