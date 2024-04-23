import React, { useState } from 'react'
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
      postTab: 'continent/europe',
    },
    {
      viewTab: 'Asia',
      postTab: 'continent/asia',
    },
  ]

  const [category, setCategory] = useState('popular')
  const [active, setActive] = useState('Popular')

  const handleActiveClick = (tab) => {
    setActive(tab.viewTab)
    setCategory(tab.postTab)
  }

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
          {tabs.map((tab, idx) => (
            <li
              key={idx}
              className={`discover__list__li ${
                active === tab.viewTab ? 'active' : ''
              }`}
              onClick={() => handleActiveClick(tab)}
              style={{ color: active === tab.viewTab ? '#6A62B7' : 'black' }}
            >
              {tab.viewTab}
            </li>
          ))}
        </div>
        <DiscoverCard category={category} />
      </div>
    </div>
  )
}

export default Discover
