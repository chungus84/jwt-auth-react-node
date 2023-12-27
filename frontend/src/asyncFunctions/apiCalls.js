import axios from "axios";

import { authHeader } from "./authHeaders";


export const loginUser = async (user) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_AUTH_URI}/login`, user);
        // console.log(res.data);
        if (res.data.accessToken) {
            localStorage.setItem(`user`, JSON.stringify(res.data))
        }
        return { user: res.data, status: res.status };

    } catch (err) {
        return {
            status: err.response?.status,
            error: {
                type: `post`,
                message: err.response?.status
            }
        }
    }
}

export const getProfile = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_AUTH_URI}/profile`, { headers: authHeader() });

        return res

    } catch (err) {
        // console.log(err);
        // console.log(authHeader());
        if (err.response.status === 403) {
            const refreshRes = await axios.post(`${import.meta.env.VITE_AUTH_URI}/token`, authHeader())
            // console.log(refreshRes);
            if (refreshRes.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(refreshRes.data))
            }
            const res = await axios.get(`${import.meta.env.VITE_AUTH_URI}/profile`, { headers: authHeader() })
            return res
        }
        return {
            status: err.response?.status,
            error: {
                type: `get`,
                message: err.response?.status
            }
        }
    }

}

export const logOutUser = async (user) => {
    console.log(user);
    try {
        const tokenDeleted = await axios.delete(`${import.meta.env.VITE_AUTH_URI}/token`, { headers: authHeader() })
        return tokenDeleted
    } catch (err) {
        return {
            status: err.response?.status,
            error: {
                type: `post`,
                message: err.response?.status
            }
        }
    }
}
