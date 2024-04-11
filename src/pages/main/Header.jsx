import React from 'react'
import arrow from '../../images/arrow__right.svg'
import frame from '../../images/frame.png'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__box">
          <div className="header__description">
            <h1 className="header__head">
              Winter <br /> Vacation Trips
            </h1>
            <p className="header__text">
              Enjoy your winter vacations with warmth and amazing sightseeing on
              the mountains. Enjoy the best experience with us!
            </p>
            <button
              className="header__btn"
              onClick={() =>
                window.scrollTo({
                  top: 700,
                  left: 0,
                  behavior: 'smooth',
                })
              }
            >
              Let`s Go!
              <img
                src={arrow}
                alt="arrow__right"
                className="arrow__right"
              ></img>
            </button>
          </div>
          <div className="header__image">
            <img src={frame} alt="frame" className="frame__img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
