import React from 'react'
import RecommendedCard from '../../../components/recommendedCard/RecommendedCard'
import '../recommended/recommended.css'

const Recommended = () => {
  return (
    <div className="recommended">
      <div className="recommended__container">
        <p className="recommended__head">Recommended</p>
        <div className="recommended__list">
          <RecommendedCard />
        </div>
      </div>
    </div>
  )
}

export default Recommended
