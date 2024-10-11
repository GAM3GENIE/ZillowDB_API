import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY

// Client for Zillow's Publc Data API call
const apiClient = axios.create({
    baseUrl: `https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=${apiKey}&near=`,
    header: {
        'Content-Type': 'application/json'
    }
})

// Get method
const getPulicData = (url, config = {}) => {
    return apiClient.get(url, config)
}

export default getPulicData