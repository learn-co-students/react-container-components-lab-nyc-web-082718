import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`
            + `?api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
     this.state = {
      searchTerm: '',
      reviews: [],
    }
  }
   query = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(reviewsJSON => {
        this.setState({
          reviews: reviewsJSON.results
        })
      })
  }
   getURL = (query) => {
    return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${NYT_API_KEY}`;
  }
   handleSubmit = (e) => {
    e.preventDefault();
    this.query(this.getURL(this.state.searchTerm))
  }
   handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    })
  }
   render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
