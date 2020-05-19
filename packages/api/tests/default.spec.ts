import { ServerInstance } from '../lib/server'
import { createServer } from 'http'
import supertest from 'supertest'
const pkg = require('../package.json')
const postmanDocumentation = require('../lib/data/@aeropods-api.postman_collection.json')

const server = new ServerInstance().core
const req = supertest(server)

describe('About Router Testing', function() {
	it('Response status should be 200', async function() {
		const res = await req.get('/')
		expect(res.status).toBe(200)
	})
	it('Response body should return package information.', async function() {
		const res = await req.get('/')
		expect(res.body).toStrictEqual({ name: pkg.name, version: pkg.version })
	})
})

describe('Postman Documentation Testing', function() {
	it('Response status should be 200', async function() {
		const res = await req.get('/postman')
		expect(res.status).toBe(200)
	})
	it('Response body should return Postman Collection', async function() {
		const res = await req.get('/postman')
		expect(res.body).toStrictEqual(postmanDocumentation)
	})
})
