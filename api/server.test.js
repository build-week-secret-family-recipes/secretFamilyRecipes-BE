const request = require('supertest');
const server = require('./server')

describe('server.js', () => {
  test('should set the tesing environment', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('endpoints', () => {
    describe('GET /', () => {
      test('should return 200 OK using async/await', async () => {
        const res = await request(server).get('/')
        expect(res.status).toBe(200)
      })
      test('should return JSON', async () => {
        const res = await request(server).get('/')
        expect(res.type).toBe('application/json')
      })
      test('should return "api: running"', async () => {
        const res = await request(server).get('/')
        expect(res.body).toEqual({ api: 'running' })
      })
    })

  })
})
