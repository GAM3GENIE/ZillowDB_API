import React from 'react'
import Spinner from './Spinner'
import { toast } from 'react-toastify'
import PropertyListing from './PropertyListing'

const PropertyListings = ({ results, loading, error }) => {

  return (
    <>
        <section>
            {results.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-6 gap-x-1'>
                    {results.map((listings, index) => (
                    <>
                    {listings.building.map((buildings) => (
                    <>
                    {listings.areas.map((area) => (
                        <div>
                            <PropertyListing 
                                key={index} 
                                listings={listings}
                                buildings={buildings}
                                area={area}
                            />
                        </div>
                    ))}
                    </>
                    ))}
                    </>
                    ))}
                </div>
            ) : error ? (
                toast.error({error})
            ) : (
                loading && <Spinner loading={loading} />
            )}
        </section>
    </>
  )
}

export default PropertyListings