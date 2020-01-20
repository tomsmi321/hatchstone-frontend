import axios from 'axios';

// create an axios instance
const axiosInstance = axios.create({
// put configurations here
    baseURL: 'https://young-sierra-89309.herokuapp.com/' 
    // http://localhost:5000/
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default axiosInstance;