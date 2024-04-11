import React from 'react'
import image from '../../../src/images/popular__card.png'
import arrow from '../../../src/images/arrow__goBack.svg'
import location from '../../../src/images/location.svg'
import avatar from '../../../src/images/avatar.png'
import '../detTourPage/detailTour.css'

const DetailTour = () => {
  return (
    <div className="detailTour">
      <img src={image} alt="" className="tour__img" />
      <button className="tour__btn">
        <img src={arrow} alt="goBack__arrow" className="goBack__arrow" />
        Go back
      </button>
      <div className="tour__container">
        <div className="tour__box">
          <h2 className="tour__name">Mount Fuji</h2>
          <div className="tour__location">
            <img
              src={location}
              alt="tour__location"
              className="tour__location-svg"
            />
            <p className="tour__location-name">Honshu, Japan</p>
          </div>
          <div className="tour__description">
            <p className="tour__description-head">Description</p>
            <p className="tour__description__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
              eget amet viverra eget fames rhoncus. Eget enim venenatis enim
              porta egestas malesuada et. Consequat mauris lacus euismod montes.
            </p>
          </div>
          <div className="tour__reviews">
            <p className="tour__description-head">Reviews</p>
            <div className="tour__reviews-card">
              <div className="tour__reviews-card-title">
                <img
                  src={avatar}
                  alt="avatar"
                  className="tour__reviews-card-img"
                />
                <p className="tour__reviews-card-head">Anonymous</p>
              </div>
              <p className="tour__reviews-card-text">
                That was such a nice place. The most beautiful place I’ve ever
                seen. My advice to everyone not to forget to <br />
                take warm coat
              </p>
            </div>
            <div className="tour__reviews-card">
              <div className="tour__reviews-card-title">
                <img
                  src={avatar}
                  alt="avatar"
                  className="tour__reviews-card-img"
                />
                <p className="tour__reviews-card-head">Anonymous</p>
              </div>
              <p className="tour__reviews-card-text">
                That was such a nice place. The most beautiful place I`ve ever
                seen. My advice to everyone not to forget to take warm coat
              </p>
            </div>
          </div>
          <button className="tour__button">Book now</button>
        </div>
      </div>
    </div>
  )
}

export default DetailTour
