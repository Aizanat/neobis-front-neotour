import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './recommendedCard.css'

const RecommendedCard = () => {
  const [trips, setTrips] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          'https://neobis-back-neotour-d00d4638f0fd.herokuapp.com/api/tours/recommended'
        )
        setTrips(response.data)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchTrips()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="recocard">
      <div className="recocard__cards">
        {trips.map((trip) => (
          <div className="recocard__card" key={trip.id}>
            <Link to={`onetour/${trip.id}`}>
              <img
                src={trip.image_url}
                alt="recommended img"
                className="recocard__img"
              />
            </Link>

            <div className="recocard__name"></div>
            <p className="recocard__title">
              {trip.city}, {trip.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendedCard
