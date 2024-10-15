import React from 'react'
import PropertyListings from '../components/PropertyListings'
import SearchBar from '../components/SearchBar'

const PropertyListingPage = ({ handleSearch, results, loading }) => {
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <PropertyListings results={results} loading={loading} />    
    </>
  )
}

export default PropertyListingPage