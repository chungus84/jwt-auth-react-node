import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import { router as userRouter } from './src/routes/user.routes.js'
import { router as loginRouter } from './src/routes/login.routes.js';
import { main } from './src/db/main.js';

const app = express();

dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` })
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(cors());
app.use(bodyParser.json());
app.use('/signup', userRouter)
app.use('/login', loginRouter)

main();


const server = app.listen(PORT, HOST, () => {
    console.log(`Server is listening at http://${HOST}:${PORT}`);
})

export default server;
