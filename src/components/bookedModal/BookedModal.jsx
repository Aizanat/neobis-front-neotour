import React from 'react'
import './bookedModal.css'

function BookedModal({ setOpen }) {
  const handleCloseModal = () => {
    setOpen(true)
  }

  return (
    <div className={`modal `}>
      <div className="booked">
        <p className="booked__p">Your trip has been booked!</p>
        <button
          type="button"
          onClick={handleCloseModal}
          className="booked__btn"
        >
          Ok
        </button>
      </div>
    </div>
  )
}

export default BookedModal
