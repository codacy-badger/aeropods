import { config } from 'dotenv'
import path from 'path'
import signale from 'signale'

config({
	path: path.resolve(__dirname, '..', '..', '..', '..', '.env'),
})

let { MONGODB_URL, JWT_SECRET, NODE_ENV } = process.env

// Falback resolve of JWT Secret, usually used for testing and development enviroment.
if (!JWT_SECRET && NODE_ENV !== 'production') {
	JWT_SECRET = 'unsecureJWT'
	signale.log("Fallbacked JWT_SECRET to unsecureJWT")
}

if (!MONGODB_URL && NODE_ENV !== 'production') {
	MONGODB_URL = 'unsecureJWT'
	signale.log("Fallbacked MONGODB_URL to docker address.")
}

export { MONGODB_URL, JWT_SECRET, NODE_ENV }
