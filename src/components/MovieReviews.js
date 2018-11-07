import React from 'react';

const MovieReviews = ({reviews}) => {
  return(
    <div className='review-list'>
      {reviews.map(reviewObj => <div key={reviewObj.display_title} className="review">
        <h4>{reviewObj.headline}</h4>
        <p>{reviewObj.summary_short}</p>
        <hr />
      </div>)}
    </div>
  )
}

export default MovieReviews
