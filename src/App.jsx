import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import CardDetails from './components/CardDetails'
import About from './components/About'
import Claim from './components/Claim'
import Review from './components/Review'

const App = () => {
  return (
    <div>
  <Header/>
  <Navbar/>
  <CardDetails/>
    <About/>
    <Claim/>
    <Review/>
    </div>
  )
}

export default App