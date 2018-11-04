// Your MovieReviews component should be stateless and functional.
//
// You are free to lay out each review as you like using the data that the API returns, but make sure that the component outputs a top-level element with the class review-list and that each review is wrapped by an element with class review.
//

import React from 'react'

const MovieReviews = (props) => {
  return(
    <ol className='review-list'>
      {props.reviews.map((movie) => <li className='review' key={movie.date_updated + movie.display_title}>{movie.display_title}</li>)}
    </ol>
  )
}

export default MovieReviews
