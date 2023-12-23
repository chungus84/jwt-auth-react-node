import { addNewUser, login } from "../services/user.services.js";

export const registerNewUser = async (req, res) => {
    // console.log(req);
    try {

        const user = await addNewUser(req.body)
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
}

export const loginUser = async (req, res) => {
    try {
        const user = await login(req.body)
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
}
