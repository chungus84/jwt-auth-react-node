import User from "../models/user.model.js";
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
    console.log(user);
    try {
        const userDetails = await User.findOne({ email: user.email });
        // console.log(userDetails.password);
        // console.log(bcrypt.compareSync(user.password, userDetails.password));
        if (userDetails && (bcrypt.compareSync(user.password, userDetails.password))) {
            const userName = { name: user.email }
            const accessToken = generateToken(userName)

            // console.log("password matches");
            // console.log(userDetails);
            // return userDetails

            return {
                _id: userDetails._id,
                userName: userDetails.userName,
                accessToken: accessToken
            }

        } else {
            console.log("password does not match");
        }
    } catch (err) {
        throw err
    }
}
