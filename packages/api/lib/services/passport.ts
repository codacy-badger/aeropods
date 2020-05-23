import passport from 'passport'
import passportLocal from 'passport-local'
import passportJwt from 'passport-jwt'
import { User } from '../models'
import { JWT_SECRET } from '../utils/enviroment'

const localStrategy = passportLocal.Strategy
const jwtStrategy = passportJwt.Strategy
const extractJWT = passportJwt.ExtractJwt

passport.use(
	new localStrategy(
		{ usernameField: 'email' },
		(username, password, callback) => {
			User.findOne({ username: username.toLowerCase() }, (err, user: any) => {
				if (err) {
					return callback(err)
				} else if (!user) {
					return callback(undefined, false, {
						message: `Username ${username} not found.`,
					})
				}
				user.comparePassword(password, (err: Error, isMatch: boolean) => {
					if (err) {
						return callback(err)
					} else if (isMatch) {
						return callback(undefined, user)
					}
					return callback(undefined, false, {
						message: 'Invalid Username or Password.',
					})
				})
			})
		}
	)
)

passport.use(
	new jwtStrategy(
		{
			jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
			secretOrKey: JWT_SECRET,
		},
		(token, callback) => {
			User.findOne({ username: token.username }, (err, user) => {
				if (err) {
					return callback(err, false)
				} else if (user) {
					return callback(undefined, user, token)
				} else {
					return callback(undefined, false)
				}
			})
		}
	)
)
