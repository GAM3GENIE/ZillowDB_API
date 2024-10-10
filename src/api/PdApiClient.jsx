import axios from 'axios'

// Client for Zillow's Publc Data API call
const apiClient = axios.ceate({
    baseUrl: PUBLIC_DATA_BASE_URL,
    header: {
        'Content-Type': 'application/json'
    }
})

// Get method
const getPulicData = (url, config ={}) => {
    return apiClient.get(url, config)
}

export default getPulicData