import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-backend-tristan.herokuapp.com"
    // baseURL: "http://localhost:8002"
});

export default instance;