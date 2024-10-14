import React from 'react'

const PropertyListings = ({ results }) => {
  return (
    <div>
        <h3>Property Listings</h3>
        {results.length > 0 ? (
            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item.id}</li>
                ))}
            </ul>
        ) : (
            <p>No results found.</p>
        )}
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default PropertyListings