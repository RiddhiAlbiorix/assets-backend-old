import mongoose from 'mongoose';

import { RegisterSchema } from './schemas/index.js';

export default {
	Users: mongoose.model('users', RegisterSchema),
};