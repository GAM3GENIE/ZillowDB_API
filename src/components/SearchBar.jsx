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
            <div className='flex rounded-md overflow-hidden max-w-xl mx-auto font-[sans-serif] p-10'>
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Enter City and State, or Zipcode'
                    className='w-full border-blue-600 border-2 rounded-md rounded-r-none focus:outline-none text-sm px-4 py-3'
                />
                <button type='submit' className='flex items-center justify-center bg-blue-600 text-white hover:bg-blue-800 px-5 text-xl font-semibold rounded-r-md'>Search</button>
            </div>     
        </form>
    </>
  )
}

export default SearchBar