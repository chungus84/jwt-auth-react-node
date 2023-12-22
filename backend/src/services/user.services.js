import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
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
