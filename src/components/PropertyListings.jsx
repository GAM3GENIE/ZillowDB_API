import React from 'react'

const PropertyListings = ({ results, loading, error }) => {
  return (
    <div>
        <h3>Property Listings</h3>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {results.length > 0 ? (
            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item.county}</li>
                ))}
            </ul>
        ) : (
            <p>No results found.</p>
        )}
    </div>
  )
}

export default PropertyListings