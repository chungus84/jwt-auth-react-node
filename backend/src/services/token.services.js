import Token from "../models/token.model.js";
import jwt from "jsonwebtoken";

export const tokenRefresh = async (token) => {

    try {
        const validToken = Token.findOne({ token: token.refreshToken })

        if (!validToken) return { message: `No valid details found` }
        // console.log(validToken);
        return validToken;
    } catch (err) {
        throw err;
    }
}
