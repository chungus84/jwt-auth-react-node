import { generateToken } from "../helper.js";
import { tokenRefresh } from "../services/token.services.js"
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {

    // console.log(req.body);
    try {
        const token = await tokenRefresh(req.body)
        // console.log(token);
        jwt.verify(token.token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {

            // console.log(err);
            console.log(user);
            if (err) return res.status(403)
            const userName = { name: user.name }
            const accessToken = generateToken(userName)
            // console.log(accessToken);
            res.status(201).json({
                _id: req.body._id,
                userName: req.body.userName,
                accessToken: accessToken,
                refreshToken: req.body.refreshToken
            })
        })

        // res.status(200).json(token)
    } catch (err) {
        res.status(400).json(err);
    }
}
