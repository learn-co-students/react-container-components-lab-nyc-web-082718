import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: null
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }
  //handle change will take care of changing the state, and rending those changes to the page

  handleSubmit = (event) => {
    event.preventDefault()
    this.findSearch(this.state.searchTerm)
  }//handle submit function

  findSearch = (searchTerm) => {
    fetch(`${URL}&query=${searchTerm}`)
      .then(response => response.json())
      .then(reviews => {
        this.setState({
          reviews: reviews
        })
      })
  }//end of find search

  render() {
    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='search-input'>Search Movie Reviews</label>
        <input
          id='search-input'
          type="text"
          style={{ width: 300 }}
          onChange={this.handleChange}
           />
        <button type="submit">Submit</button>
      </form>
      <MovieReviews reviews={this.state.reviews}/>
    </div>
    );
  }

}//end of class

export default SearchableMovieReviewsContainer
