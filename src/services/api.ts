import axios from "axios";
import https from "https";
export const api = axios.create({
    baseURL: `https://10.0.0.108:3333/`,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
      
})