import axios from 'axios';

// create an axios instance
<<<<<<< HEAD
const axiosInstance = axios.create({
  // put configurations here
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})
=======
const httpRequest = axios.create({
    // put configurations here
    // baseURL: `${process.env.REACT_APP_BACKEND_URL}`
    baseURL: `${process.env.REACT_APP_DEVELOPMENT_URL}`
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
>>>>>>> 4f244b8fb739f2b1cb2d80e2a0d9155f278fc84d

export default httpRequest;