import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://buger-order.firebaseio.com/'
});

export default instance;