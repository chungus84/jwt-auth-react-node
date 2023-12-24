import axios from "axios";


export const loginUser = async (user) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_AUTH_URI}/login`, user);
        console.log(res.data);
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
