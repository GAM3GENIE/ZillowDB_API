import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY

// Client for Zillow's Publc Data API call
const apiClient = axios.create({
    baseUrl: `https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=${apiKey}&offset=0&limit=200&near=`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default apiClient