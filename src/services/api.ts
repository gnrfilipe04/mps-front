import axios from "axios";
import https from "https";

import Cookie from "js-cookie";

let host
const ip = Cookie.get("Agente-doc-mps")

ip ? host = ip : host = 'localhost'

export const api = axios.create({
    baseURL: `http://${host}:3333/`,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})