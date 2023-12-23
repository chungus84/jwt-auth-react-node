import express from 'express';

import { registerNewUser, loginUser } from '../controllers/user.controller.js';
import { login } from '../services/user.services.js';


export const router = express.Router();

router.post('/', registerNewUser);
router.post('/', loginUser);
