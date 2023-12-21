import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` })
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(cors());
app.use(bodyParser.json());
app.post('/login', (req, res) => {
    res.end("POST request from login")
})
app.post('/signup', (req, res) => {
    res.end('POST request from signup')
})


const server = app.listen(PORT, HOST, () => {
    console.log(`Server is listening at http://${HOST}:${PORT}`);
})

export default server;
