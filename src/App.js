import axios from 'axios';
import React, { Component } from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import { ACCESS_KEY as YOUR_ACCESS_KEY } from './api.js';

class App extends Component {
  state = { images: [] };
  // event handler
  OnSearchSubmit = async (term) => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${YOUR_ACCESS_KEY}&query=${term}`
    );
    console.log(response.data.results);
    this.setState({ images: response.data.results });
    // ! same Functionality with code bellow
    // axios
    //   .get('https://api.unsplash.com/search/photos', {
    //     params: { query: term },
    //     headers: {
    //       Authorization:
    //         'Client-ID 8a16ygXI27EHljnT3wHQFtfpAZHVujNIZJy7BlD-xpI',
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });
    // console.log(term);
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.OnSearchSubmit} />
        FOUND {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
