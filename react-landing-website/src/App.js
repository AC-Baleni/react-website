import React from 'react'
import Navbar from './components/Navbar/navbar'
import Landing from './components/landing/landing'
import Title from './components/landing/Title'
import About from './components/landing/About'

const App = () => {

  return (
    <>
      <Navbar/>
      <Landing />
      <Title heading={"About"} subHeading={"What we offer"}/>
      <About />
    </>
  )}
export default App
