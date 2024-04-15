import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main.jsx'
import DetailTour from './pages/detTourPage/DetailTour.jsx'
import ReservModal from './components/reservModal/ReservModal.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/" element={<DetailTour />}></Route> */}
      </Routes>
      <DetailTour />
      <ReservModal />
    </>
  )
}

export default App
