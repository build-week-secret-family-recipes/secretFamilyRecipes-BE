const request = require('supertest');
const server = require('./server')

describe('server.js', () => {
  test('should set the tesing environment', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

})
