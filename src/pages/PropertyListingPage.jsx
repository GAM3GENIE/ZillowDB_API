import React from 'react'
import PropertyListings from '../components/PropertyListings'
import SearchBar from '../components/SearchBar'

const PropertyListingPage = ({ onSearch, results, loading }) => {
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <PropertyListings results={results} loading={loading} />    
    </>
  )
}

export default PropertyListingPage