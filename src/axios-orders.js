import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-b0d49.firebaseio.com/'
});

export default instance;
