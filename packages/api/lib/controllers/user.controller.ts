import { Request, Response } from 'express'
import { User } from '../models'
import { JWT_SECRET } from '../utils/enviroment'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import passport from 'passport'
import '../services/passport'

export class UserController {
	/** Function that returns all users contained in database. */
	public async getUsers(req: Request, res: Response): Promise<void> {}

	/** Function that returns one user with id (email) specified in parameter. */
	public async getUser(req: Request, res: Response) {}

	/** Function that creates a new user in database. */
	public async createUser(req: Request, res: Response): Promise<void> {
		// Create Encrypted Password
		const hashedPassword = bcrypt.hashSync(
			req.body.password,
			bcrypt.genSaltSync(10)
		)
		// Save User to Database
		await User.create({
			username: req.body.username,
			password: hashedPassword,
		})
		// Create JWT
		const token = jwt.sign({
			username: req.body.username,
			scope: req.body.scope,
			JWT_SECRET,
		})
		res.status(200).send({
			message: 'User created!',
			token: token,
		})
	}

	/** Function that updates user specified in params. */
	public async patchUser(req: Request, res: Response) {}

	/** Function that deletes a user with id specified in params. */
	public async deleteUser(req: Request, res: Response) {}
}
