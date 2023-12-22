import { addNewUser } from "../services/user.services.js";

export const registerNewUser = async (req, res) => {
    try {
        const user = await addNewUser(req.body)
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json(err)
    }
}
