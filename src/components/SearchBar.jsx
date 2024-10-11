import React, { useState } from 'react'
import getPulicData from '../api/PdApiClient'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [search, setSearch] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await getPulicData(searchTerm);
            setSearch(response.data);
            //console.log(response.data);
        } catch (error) {
            console.log(error)
        }

        

    }

    const propInfo = search.map((item) => 
        <li>{item.address.full}</li>
    )

  return (
    <>
    <div>
        <input 
        type="text" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='City, State or Zipcode'
        />
        <button onClick={handleSearch}>Search</button>
        {/* Display Search results hear */}
        <ul>
            {propInfo}
        </ul>
    </div>
    </>
  )
}

export default SearchBar