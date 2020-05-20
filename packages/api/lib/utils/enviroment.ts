import { config } from 'dotenv'
import path from 'path'

const dotenv = config({
	path: path.resolve(__dirname, '..', '..', '..', '..', '.env'),
})

export const { MONGODB_URL, JWT_SECRET } = process.env
