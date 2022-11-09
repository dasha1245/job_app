import axios from "axios";

import {baseURL, token} from "../configs";

const axiosInstance = axios.create({baseURL});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export {
    axiosInstance
}