import axios from "axios";
export const api = axios.create({
    baseURL: `https://10.0.0.108:3333/`
})