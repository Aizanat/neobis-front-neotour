import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main.jsx'
import DetailTour from './pages/detTourPage/DetailTour.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="onetour/:id" element={<DetailTour />} />
      </Routes>
    </>
  )
}

export default App
