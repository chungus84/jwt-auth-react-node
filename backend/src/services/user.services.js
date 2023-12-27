import User from "../models/user.model.js";
import Token from "../models/token.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { generateToken } from "../helper.js";

// import { encryptPassword } from "../helper.js";


export const addNewUser = async (user) => {
    try {



        const newUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            email: user.email,
            password: bcrypt.hashSync(user.password, 8)
        }

        const res = await User.create(newUser);
        return res;
    } catch (err) {
        throw err;
    }
}

export const login = async (user) => {
    // console.log(user);
    try {
        const userDetails = await User.findOne({ email: user.email });
        // console.log(userDetails);
        if (!userDetails) return { message: `User not found` }
        if (userDetails && (bcrypt.compareSync(user.password, userDetails.password))) {
            const userName = { name: userDetails.userName }
            const accessToken = generateToken(userName)
            const refreshToken = jwt.sign(userName, process.env.REFRESH_TOKEN_SECRET)

            await Token.create({ token: refreshToken });



            return {
                _id: userDetails._id,
                userName: userDetails.userName,
                accessToken: accessToken,
                refreshToken: refreshToken
            }

        } else {
            console.log("password does not match");
        }
    } catch (err) {
        throw err
    }
}
