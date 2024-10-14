import React, { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import PropertyListings from './components/PropertyListings'
import apiClient from './api/PdApiClient'
import SearchBar from './components/SearchBar'




function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')

  const apiKey = import.meta.env.VITE_API_KEY

  const handleSearch = async (inputValue) => {
      setLoading(true)
      setError('')
      setQuery(inputValue)
      try {
          const response = await apiClient.get(`https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=${apiKey}&offset=0&limit=200&near=${query}`)
          setResults(response.data.bundle)
          //console.log(response.data.bundle)
      }catch (error) {
          console.log('Error fetching data', error)
      }finally {
          setLoading(false)
      }
    }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout />} >
        <Route index element={ <HomePage onSearch={handleSearch} results={results} loading={loading} error={error} /> } />
        <Route path='/propertylistings' element={ <PropertyListings onSearch={handleSearch} results={results} loading={loading} error={error} /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Route>
    )
  )

  return <RouterProvider router={ router } />
  
}
 
export default App
