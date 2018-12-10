const request = require('supertest')
const assert = require('assert')

const app = require('../index')

describe('GET /', () => {
  it('respond with hello world', done => {
    request(app).get('/').expect('hello from js!', done)
  })

  it('should return -1 when the value is not present', function() {
    assert.equal([1,2,3].indexOf(4), -1);
  })
})


