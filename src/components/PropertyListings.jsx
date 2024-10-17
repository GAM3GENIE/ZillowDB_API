import React from 'react'
import Spinner from './Spinner'
import { toast } from 'react-toastify'
import PropertyListing from './PropertyListing'

const PropertyListings = ({ results, loading, error }) => {
  return (
    <>
        <section>
            {error && toast.error({error})}
            {results.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {results.map((listings) => (
                        <PropertyListing key={listings.id} listings={listings} />
                    ))}
                </div>
            ) : (
                loading && <Spinner loading={loading} />
            )}
        </section>
    </>
  )
}

export default PropertyListings