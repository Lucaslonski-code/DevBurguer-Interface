import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

api.interceptors.request.use( (config) => {
    const token = localStorage.getItem('token') 
//   messmo nome que colocou no localStorage, neste caso, 'token' é o token
    config.headers.Authorization = `Bearer ${token}`;

    return config;
})