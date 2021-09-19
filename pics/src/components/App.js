import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: []}
    // call back function
    // use arrow function to make sure "this is binded to App"
    onSearchSubmit = async (term) => {
        const response = await unsplash
        .get('/search/photos', {
            params: { query: term }
        });
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
};

export default App;