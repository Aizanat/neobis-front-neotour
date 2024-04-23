import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import arrow from '../../../src/images/arrow__goBack.svg'
import location from '../../../src/images/location.svg'
import avatar from '../../../src/images/avatar.png'
import axios from 'axios'
import '../detTourPage/detailTour.css'
import ReservModal from '../../components/reservModal/ReservModal'

const DetailTour = () => {
  const [data, setData] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  const [modalActive, SetModalActive] = useState(false)

  const handleClick = () => {
    navigate('/')
  }

  useEffect(() => {
    axios(
      `https://neobis-back-neotour-d00d4638f0fd.herokuapp.com/api/tours/${id}`
    )
      .then(({ data }) => {
        setData(data)
      })
      .catch((error) => {
        console.error('Error fetching meal details:', error)
      })
  }, [id])

  return (
    <div className="detailTour">
      {data && data.images && (
        <img src={data.image_url[0]} alt="" className="tour__img" />
      )}

      <button className="tour__btn" onClick={handleClick}>
        <img src={arrow} alt="" className="tour__arrow" />
        Go back
      </button>
      <div className="tour__container">
        <div className="tour__box">
          <h2 className="tour__name">{data.name}</h2>
          <div className="tour__location">
            <img src={location} alt="" className="tour__location__img" />
            <p className="tour__location__name">{data.country}</p>
          </div>
          <div className="tour__description">
            <p className="tour__description__head">Description</p>
            <p className="tour__description__title">{data.city}</p>
          </div>
          <div className="tour__reviews">
            <p className="tour__description__p">Reviews</p>
            <div className="tour__reviews-card">
              <div className="tour__reviews-card-title">
                <img
                  src={avatar}
                  alt="avatar"
                  className="tour__reviews-card-img"
                />
                <p className="tour__reviews-card-p">Anonymous</p>
              </div>
              <p className="tour__reviews-card-text">{data.comment}</p>
            </div>
            <div className="tour__reviews-card">
              <div className="tour__reviews-card-title">
                <img
                  src={avatar}
                  alt="avatar"
                  className="tour__reviews-card-img"
                />
                <p className="tour__reviews-card-p">Anonymous</p>
              </div>
              <p className="tour__reviews-card-p">{data.comment}</p>
            </div>
          </div>
          <button className="tour__btns" onClick={() => SetModalActive(true)}>
            Book now
          </button>
        </div>
        <ReservModal active={modalActive} setActive={SetModalActive} id={id} />
      </div>
    </div>
  )
}

export default DetailTour
