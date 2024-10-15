import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/footer'
import SearchBar from '../components/SearchBar'






const HomePage = ({ handleSearch, results }) => {
  return (
    <>
        <Hero />
        <SearchBar handleSearch={handleSearch} results={results} />
        <Footer />
    </>
  )
}

export default HomePage