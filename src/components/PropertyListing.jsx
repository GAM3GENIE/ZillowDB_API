import React from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { SiZillow } from 'react-icons/si'

const PropertyListing = ({ listings, buildings, area }) => {
  return (
    <>
        <div className="bg-white rounded-xl shadow-md relative border-t-2 m-1">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600">{ listings.landUseDescription }</div>
                    <ul className="text-xl font-bold">
                        <li className='inline'>{ listings.address.house } </li>
                        <li className='inline'>{ listings.address.street } </li>
                        <li className='inline'>{ listings.address.streetSuffix } </li>
                        <li style={{ display: listings.address.unitType ? 'inline' : 'none'}}>{listings.address.unitType} </li>
                        <li style={{ display: listings.address.unit ? 'inline' : 'none'}}>{listings.address.unit}</li>
                    </ul>
                </div>
                <div className="mb-5">
                { listings.county }
                </div>
                <ul className="text-blue-600 mb-2">
                    <li style={{ display: (buildings.bedrooms && buildings.bedrooms === 0) ? 'inline' : 'none'}}>
                        <b>{buildings.bedrooms}</b>
                        <abb> bds | </abb>
                    </li>
                    <li style={{ display: (buildings.baths === null || buildings.baths === 0) && (buildings.fullBaths === null || buildings.fullBaths === 0) ? 'none' : 'inline'}}>
                        <b>{null ?? buildings.baths ?? buildings.fullBaths}</b>
                        <abb> ba | </abb>
                    </li>
                    <li style={{ display: area.areaSquareFeet ? 'inline' : 'none'}}>
                        <b>{area.areaSquareFeet}</b>
                        <abb> sqft</abb>
                    </li>
                </ul>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-red-600 mb-3">
                        <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                        { listings.address.city }, { listings.address.state } {listings.address.zip}
                    </div>
                    <a href={`https://www.zillow.com/homes/${listings.zpid}_zpid/`} className="h-[36px] bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-center text-sm"
                    style={{ display: listings.zpid ? 'inline' : 'none' }}
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