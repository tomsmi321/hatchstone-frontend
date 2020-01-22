import axios from 'axios';

// create an axios instance
const axiosInstance = axios.create({
  // put configurations here
  baseURL: `${process.env.REACT_APP_DEVELOPMENT_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export default axiosInstance;