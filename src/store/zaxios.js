import axios from 'axios';

const createAxiosInstance = () => {
    if (window.location.host === 'localhost:3000') {
        return axios.create({
            baseURL: 'http://localhost:8080',
            withCredentials: true,
        });
    } else {
        return axios.create({
            baseURL: 'http://s.yeon-tae-woo.kro.kr',
            withCredentials: true,
        });
    }
};

const zaxios = createAxiosInstance();

export default zaxios;