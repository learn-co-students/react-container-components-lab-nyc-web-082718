// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
  console.log("Movie Reviews", props.reviews)
  return (
    <div className="review-list">
      {props.reviews.map((review) => {
        return <h2 key={review.display_title} className="review"> {review.display_title} </h2>
      })}
    </div>
  )
}

export default MovieReviews
