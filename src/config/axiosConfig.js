import axios from 'axios';

// create an axios instance
const axiosInstance = axios.create({
// put configurations here
    baseURL: `${process.env.REACT_APP_BACKEND_URL}`
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default axiosInstance;