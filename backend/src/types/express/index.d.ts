import { JwtPayload } from 'jsonwebtoken';
import { User } from '../../models/User';

// Leaving this here so I can attempt this again in the future.
declare global {
	namespace Express {
		interface Request {
			auth?: JwtPayload & {
				sub?: string;
				email?: string;
				username?: string;
			};
			user?: User;
		}
	}
}

export {}; // required to make this a module
