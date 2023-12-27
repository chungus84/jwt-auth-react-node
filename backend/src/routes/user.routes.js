import express from 'express';

import { registerNewUser, loginUser } from '../controllers/user.controller.js';
import { login } from '../services/user.services.js';
import { verifyToken } from '../middleware/authJwt.js';



export const router = express.Router();

router.post('/', registerNewUser);
