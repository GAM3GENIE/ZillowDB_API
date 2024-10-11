import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import PropertyListings from './components/PropertyListings'



function App() {

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={ <MainLayout />} >
          <Route index element={ <HomePage /> } />
          <Route path='/propertylistings' element={ <PropertyListings /> } />
          <Route path='*' element={ <NotFoundPage /> } />
        </Route>
      )
    )

  return <RouterProvider router={ router } />
}

export default App
