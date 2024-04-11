import React from 'react'
import popularCard from '../../../src/images/popular__card.png'

const RecommendedCard = () => {
  return (
    <>
      <div className="recommended__card">
        <div className="recommended__card-img">
          <img src={popularCard} alt="popular__card-img" />
        </div>
      </div>
    </>
  )
}

export default RecommendedCard
