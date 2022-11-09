import {axiosInstance} from "./axios.service";

import {baseURL} from "../configs";

const jobService = {
    getAllJobs:() => axiosInstance.get(`${baseURL}`)

}

export {
    jobService
}