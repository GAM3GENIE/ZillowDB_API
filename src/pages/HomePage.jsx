import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/footer'
import SearchBar from '../components/SearchBar'






const HomePage = ({ handleSearch }) => {
  return (
    <>
        <Hero />
        <SearchBar handleSearch={handleSearch} />
        <Footer />
    </>
  )
}

export default HomePage