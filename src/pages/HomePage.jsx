import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/footer'
import SearchBar from '../components/SearchBar'






const HomePage = ({ onSearch, results }) => {
  return (
    <>
        <Hero />
        <SearchBar onSearch={handleSearch} results={results} />
        <Footer />
    </>
  )
}

export default HomePage