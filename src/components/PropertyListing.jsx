import React from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { SiZillow } from 'react-icons/si'

const PropertyListing = ({ listings, item, area }) => {

  return (
    <>
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{ listings.landUseDescription }</div>
                    <h3 className="text-xl font-bold">
                        { listings.address.house } { listings.address.street } { listings.address.streetSuffix }
                    </h3>
                </div>
                <div className="mb-5">
                { listings.county }
                </div>
                <h3 className="text-blue-600 mb-2">
                    {item.bedrooms} Bed | {item.fullBaths} Bath | {area.areaSquareFeet} SqFt
                </h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-red-600 mb-3">
                        <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                        { listings.address.city }, { listings.address.state} { listings.address.zip }
                    </div>
                    <a href={`https://www.zillow.com/homes/${listings.zpid}_zpid/`} className="h-[36px] bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        <SiZillow />
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default PropertyListing