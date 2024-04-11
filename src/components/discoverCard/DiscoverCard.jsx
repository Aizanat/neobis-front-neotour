import React from 'react'
import popularCard from '../../../src/images/popular__card.png'

const DiscoverCard = () => {
  return (
    <>
      <div className="popular__card">
        <div className="popular__card-img">
          <img src={popularCard} alt="popular__card-img" />
        </div>
      </div>
    </>
  )
}

export default DiscoverCard
