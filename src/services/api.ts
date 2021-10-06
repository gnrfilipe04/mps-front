import axios from "axios";
import https from "https";

import Cookie from "js-cookie";

let host
const ip = Cookie.get("Agente-doc-mps")

ip ? host = ip : host = 'localhost'

export const api = axios.create({
    baseURL: `https://${host}:443/`,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})