import axios from "axios";
import {getEncrypted, getEncrypted2} from "../../pages/Extension_product/constants";

const baseURL = process.env.REACT_APP_API_URL;
const tokenURL = process.env.REACT_APP_TOKEN_URL
const DROPSHIP_API = process.env.REACT_APP_DROPSHIP_URL

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache, no-store, must-revalidate",
        priority: "u=1, i",
        accept: "application/json",
        "accept-language": "en,vi;q=0.9,en-GB;q=0.8,en-US;q=0.7",
    },
    referrer: "https://app.dropship.io/",
    referrerPolicy: "strict-origin-when-cross-origin",
    mode: "cors",
    credentials: "include",
});

export const getCompetitorReq = async (endpoint, filters = {}) => {
    return instance.post(baseURL, {
        url: `${DROPSHIP_API}${endpoint}`,
        method: 'POST',
        "payload": {
            "page": 1,
            "page_size": 50,
            "ordering": [
                null
            ],
            "new_search": true,
            ...filters
        },
        is_encode: true,
    })
};
