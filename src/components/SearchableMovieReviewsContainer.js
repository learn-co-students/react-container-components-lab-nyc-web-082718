import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Both container components should be class components that maintain state.
//
// The SearchableMovieReviewsContainer should have a top-level wrapping element with class searchable-movie-reviews.
//
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: null
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.search(this.state.searchTerm)
  }

  search = (searchTerm) => {
    fetch(`${URL}&query=${searchTerm}`)
    .then(res => res.json())
    .then(res => res.results)
    .then(reviews => {
      this.setState({
        reviews: reviews
      })
    })
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        SearchableMovieReviewsContainer<br />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name='searchTerm'
          />
          <button>Search</button>
        </form>
        <MovieReviews
          reviews={this.state.reviews}
        />
      </div>
    )
  }
}
