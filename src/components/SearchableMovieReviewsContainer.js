import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }
  // handleSearch = (event) => {
  //   this.setState({
  //     searchTerm: event.target.value.trim().toLowerCase()
  //   })
  //   fetchReviews()
  // }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = () => {

    fetch(URL.concat(this.state.searchTerm))
    .then(response => response.json())
    .then(reviewData => {
      // console.log(json.results)
      const reviews = reviewData.results
      this.setState({reviews})
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearch} type="text" placeholder="Search for reviews..." value={this.state.searchTerm} />
          <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer
