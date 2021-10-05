import axios from "axios";
import https from "https";
export const api = axios.create({
    baseURL: `https://Catalinas-MacBook-Pro.local:3333/`,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})