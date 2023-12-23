import express from 'express';

import { loginUser } from '../controllers/user.controller.js';
import { login } from '../services/user.services.js';


export const router = express.Router();


router.post('/', loginUser);
