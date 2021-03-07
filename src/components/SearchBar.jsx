import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  state = { searchTerm: '' };

  //   event Handler
  onFormSubmit = (event) => {
    event.preventDefault();

    // * invoking function from APP COMPONENT ==> "onSubmit" was "OnSearchSubmit"
    // * that we passed it in as a props into our searchBar
    // * Component
    this.props.onSubmit(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  };
  //   onInputchange = (e) => {
  //     this.setState({ searchTerm: e.target.value });
  //   };

  render() {
    return (
      <div className="searchbar-container">
        <form
          className="search-form"
          onSubmit={this.onFormSubmit}
        >
          <input
            onChange={(e) =>
              this.setState({
                searchTerm: e.target.value,
              })
            }
            type="text"
            value={this.state.searchTerm}
            placeholder="Search Here :)"
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
