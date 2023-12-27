import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import { router as userRouter } from './src/routes/user.routes.js'
import { router as loginRouter } from './src/routes/login.routes.js';
import { router as tokenRouter } from './src/routes/token.router.js'
import { verifyToken } from './src/middleware/authJwt.js';
import { main } from './src/db/main.js';

const app = express();

dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` })
const PORT = process.env.PORT;
const HOST = process.env.HOST;


const users = [
    {
        userName: "testyCleese",
        title: "Post 1"
    },
    {
        userName: "dave@dave.com",
        title: "Post 2"
    }
]

app.use(cors());
app.use(bodyParser.json());
app.use('/signup', userRouter)
app.use('/login', loginRouter)
app.get('/profile', verifyToken, (req, res) => {
    // console.log(req.user);
    res.json(users.filter(post => post.userName === req.user.name))
})
app.use('/token', tokenRouter)

main();


const server = app.listen(PORT, HOST, () => {
    console.log(`Server is listening at http://${HOST}:${PORT}`);
})

export default server;
