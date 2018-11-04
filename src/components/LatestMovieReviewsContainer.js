import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Both container components should be class components that maintain state.
//
// The LatestMovieReviewsContainer should have a top-level wrapping element with class latest-movie-reviews.
//

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
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
      <div className='latest-movie-reviews'>
        <hr />

        LatestMovieReviewsContainer
        <MovieReviews
          reviews={this.state.reviews}
        />
      </div>
    )
  }
}
