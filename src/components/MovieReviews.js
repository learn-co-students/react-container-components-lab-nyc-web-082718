// import React from 'react'
//
// const Review = (props) => {
//   return (
//   <div key={props.review.headline} className="review">
//     <h3>{ props.review.display_title }</h3>
//     <a href={props.review.link.url}>{ props.review.headline }</a>
//     <blockquote>{ props.review.summary_short }</blockquote>
//   </div>
//   )
// }
//
// const MovieReviews = ({ reviews }) => {
//   return(
//     <div className="review-list">
//       { reviews.map(rv => <Review review={rv} />) }
//     </div>
//   )
// }
//
// export default MovieReviews

// Q: why doesn't Enzyme work with the above code?

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
