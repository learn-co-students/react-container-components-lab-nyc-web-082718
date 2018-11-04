// Code MovieReviews Here
import React from 'react'
 const Review = ({
  display_title,
  headline,
  link,
  summary_short
}) => {
  return (
  <div className="review">
    <h3>{ display_title }</h3>
    <a href={link.url}>{ headline }</a>
    <blockquote>{ summary_short }</blockquote>
  </div>
  )
}
 const MovieReviews = ({ reviews }) => {
  return(
    <div className="review-list">
      { reviews.map(Review) }
    </div>
  )
}
 export default MovieReviews
