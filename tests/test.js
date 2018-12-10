const request = require('supertest')

var app = require('../index')

describe('GET /', () => {
  it('respond with hello world', done => {
    request(app).get('/').expect('hello world', done)
  })
})