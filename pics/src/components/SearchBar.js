import React from 'react';

class SearchBar extends React.Component{
    state = { term: ''};

    // arrow function always make sure that "this" is binded to "SearchBar"
    // use this style for callback functions
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return ( 
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={(e) => this.setState({ term: e.target.value })} />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;