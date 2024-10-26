import React from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'



const HomePage = ({ handleSearch }) => {
  return (
    <>
        <Hero />
        <SearchBar handleSearch={handleSearch} />
    </>
  )
}

export default HomePage