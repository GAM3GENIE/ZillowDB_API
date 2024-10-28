import React, { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import PropertyListingPage from './pages/PropertyListingPage'
import _get from './api/PdApiClient'




function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')

  const apiKey = import.meta.env.VITE_API_KEY

  const handleSearch = async (searchQuery) => {
    setLoading(true)
    setError('')
    setQuery(searchQuery)
    try {
        const response = await _get(`/parcels?access_token=${apiKey}&offset=0&limit=200&near=${searchQuery}`)
        setResults(response.data.bundle)      
    }catch (error) {
        console.log('Error fetching data', error)
    }finally {
        setLoading(false)
    }
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout />} >
        <Route index element={ 
          <HomePage handleSearch={handleSearch} /> 
          } />
        <Route path='/propertylistingpage' element={ 
          <PropertyListingPage 
          handleSearch={handleSearch} 
          results={results} 
          loading={loading} 
          error={error}
          /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Route>
    )
  )

  return <RouterProvider router={ router } />
}
 
export default App
