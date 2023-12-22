import axios from "axios";

const BASE_URL = "https://api.edenai.run/v2/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`

export default axios;