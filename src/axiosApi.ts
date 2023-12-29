import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://dpg.gg/'
});

export default axiosApi;