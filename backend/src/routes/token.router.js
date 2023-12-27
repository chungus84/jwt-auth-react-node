import express from 'express';

import { refreshToken } from '../controllers/token.controller.js'

export const router = express.Router()
router.post('/', refreshToken);
