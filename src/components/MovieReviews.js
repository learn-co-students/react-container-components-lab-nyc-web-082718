// Code MovieReviews Here
import React, {Component} from 'react'

const MovieReviews = (props) => {
  const {reviews} = props

  return (
  
    <ol className="review-list">
        {reviews.map(review => <li className='review' key={review.date_updated + review.display_title}>{review.display_title}</li>)}
    </ol>

  )



} //end of functional component

export default MovieReviews
