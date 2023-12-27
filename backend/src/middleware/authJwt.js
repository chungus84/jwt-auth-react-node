import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    // console.log(req.headers['accesstoken']);
    const authHeader = req.headers['accesstoken']
    const token = authHeader && authHeader

    if (token == null) return res.sendStatus(401)


    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        // console.log(user);
        // console.log(req.user);
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
