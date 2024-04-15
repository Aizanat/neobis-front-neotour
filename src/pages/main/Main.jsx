import React from 'react'
import Header from './header/Header'
import Discover from './discover/Discover'
import Recommended from './recommended/Recommended'
import '../main/main.css'

const Main = () => {
  return (
    <>
      <Header />
      <Discover />
      <Recommended />
    </>
  )
}

export default Main
