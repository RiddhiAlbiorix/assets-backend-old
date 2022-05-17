import mongoose from 'mongoose';

import { AuthSchema } from './schemas/index.js';

export default {
	Users: mongoose.model('users', AuthSchema),
};