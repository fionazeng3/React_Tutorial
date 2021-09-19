import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // called when the object is created
//    constructor(props) {
//         super(props); // call react.component's constructor functions
//         this.state = { lat: null, errorMessage: '' }; // this is the only time we do direct assignment to state object
//     } 

    state = {lat: null, errorMessage: ''}; // equavalent to initializing in constructor

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // setState is the only function 
                // we can call to update the state object
                this.setState({ lat: position.coords.latitude});
            }, // success
            (err) => {
                this.setState({ errorMessage: err.message});
            } // fail
        );

    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message = "please accept location request"/>;
    }

    // react says we have to define render
    // called frequently
    // updating 'state' on a component causes the component to instantly rerender
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
        
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);