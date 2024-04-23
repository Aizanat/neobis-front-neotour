import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import './discoverCard.css'

const DiscoverCard = ({ category }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchpopular = async () => {
      if (category === undefined) {
        console.log('ОШИБКА')
        return
      }
      try {
        const responce = await axios.get(
          `https://neobis-back-neotour-d00d4638f0fd.herokuapp.com/api/tours/${category}`
        )
        setData(responce.data)
        console.log(responce.data)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchpopular()
  }, [category])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <div className="popularcards">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="popularcards__card" key={el.id}>
                <Link to={`onetour/${el.id}`} className="popularcards__link">
                  <img
                    src={el.image_url}
                    alt="popular card"
                    className="popularcards__card__img"
                  />
                </Link>
                <div className="popularcards__div"></div>
                <p className="popularcards__des">{el.country}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default DiscoverCard
