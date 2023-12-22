import express from 'express';

import { registerNewUser } from '../controllers/user.controller.js';


export const router = express.Router();

router.post('/', registerNewUser);
