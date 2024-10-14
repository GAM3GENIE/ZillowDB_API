import React, { useState } from 'react'


const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() !== ''){
            onSearch(inputValue)
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