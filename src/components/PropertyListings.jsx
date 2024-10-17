import React from 'react'
import Spinner from './Spinner'
import { toast } from 'react-toastify'
import PropertyListing from './PropertyListing'

const PropertyListings = ({ results, loading, error }) => {
  return (
    <>
        <section>
            {results.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-6 gap-4'>
                    {results.map((listings) => (
                        <div>
                            {listings.building.map((item) => (
                                <div>
                                    {listings.areas.map((area) => (
                                        <PropertyListing 
                                        key={listings.id} 
                                        listings={listings} 
                                        item={item} 
                                        area={area} 
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                loading && <Spinner loading={loading} />
            )}
            {error && toast.error({error})}
        </section>
    </>
  )
}

export default PropertyListings