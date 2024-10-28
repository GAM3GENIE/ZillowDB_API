import axios from 'axios'


// Client for Zillow's Publc Data API call
const apiClient = axios.create({
    baseURL: `https://api.bridgedataoutput.com/api/v2/pub`,
    headers: {
        'Content-Type': 'application/json'  
    }
})

const _get = (url) => {
    return apiClient.get(url);
  };

export default _get