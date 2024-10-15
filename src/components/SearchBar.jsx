import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchBar = ({ handleSearch }) => {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() !== ''){
            handleSearch(inputValue)
            navigate('/propertylistingpage')
            setInputValue('')
        }
    }
    
  return (
    <>
       <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter City, State, or Zipcode'
            />
            <button type='submit'>Search</button>        
       </form>
    </>
  )
}

export default SearchBar