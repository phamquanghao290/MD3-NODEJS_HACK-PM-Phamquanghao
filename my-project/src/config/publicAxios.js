import axios from "axios";

const baseURL = "http://localhost:9999";

const publicAxios = axios.create({baseURL,headers: {"Content-Type": "application/json"}})

export default publicAxios;