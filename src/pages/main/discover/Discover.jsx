import React from 'react'
import DiscoverCard from '../../../components/discoverCard/DiscoverCard'
import arrowLeft from '../../../images/arrow__left.png'
import arrowRight from '../../../images/arrow__right.png'
import '../discover/discover.css'

const Discover = () => {
  const tabs = [
    {
      viewTab: 'Popular',
      postTab: 'popular',
    },
    {
      viewTab: 'Featured',
      postTab: 'featured',
    },
    {
      viewTab: 'MostVisited',
      postTab: 'most-visited',
    },
    {
      viewTab: 'Europe',
      postTab: 'europe',
    },
    {
      viewTab: 'Asia',
      postTab: 'asia',
    },
  ]

  return (
    <div className="discover">
      <div className="discover__container">
        <div className="discover__text">
          <p className="discover__head">Discover</p>
          <div className="discover__arrows">
            <button className="discover__btn">
              <img src={arrowLeft} alt="arrow__left" className="arrow__left" />
            </button>
            <button className="discover__btn">
              <img
                src={arrowRight}
                alt="arrow__right"
                className="arrow__right"
              />
            </button>
          </div>
        </div>
        <div className="discover__list">
          <DiscoverCard />
        </div>
      </div>
    </div>
  )
}

export default Discover
