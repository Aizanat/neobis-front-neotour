import React from 'react'
import close from '../../images/close.svg'
import people from '../../images/people.png'

const ReservModal = () => {
  return (
    <>
      <div className>
        <div className="modal__overlay">
          <form className="modal__content">
            <div className="modal__info">
              <p className="modal__info_p">Info</p>
              <img src={close} alt="close" className="modal__close" />
            </div>
            <p className="modal__title">
              To submit an application for a tour reservation, you need to fill
              in <br />
              your information and select the number of people for the <br />
              reservation
            </p>
            <div className="modal__phone">
              <p className="modal__phone-p">Phone number</p>
              <div className="modal__input"></div>
              <div className="modal__people__len">
                <img src={people} alt="people" className="modal__people__svg" />
                <p className="modal__people__p">People</p>
              </div>
            </div>
            <button className="modal__submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ReservModal
