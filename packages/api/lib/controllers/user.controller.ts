import { Request, Response } from 'express'

export class UserController {
	/** Function that returns all users contained in database. */
	public async getUsers(req: Request, res: Response): Promise<void> {}

	/** Function that returns one user with id (email) specified in parameter. */
	public async getUser(req: Request, res: Response) {}

	/** Function that creates a new user in database. */
	public async createUser(req: Request, res: Response) {}

	/** Function that updates user specified in params. */
	public async patchUser(req: Request, res: Response) {}

	/** Function that deletes a user with id specified in params. */
	public async deleteUser(req: Request, res: Response) {}
}
