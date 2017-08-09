
// External modules
const request = require('supertest')
const SailsServer = require('../util/SailsServer').default

let s = new SailsServer()

describe('Blueprint Integration ::', function(){
  before(function (done) {
    s.lift(config)
    .then(done)
    .catch(done)
  })

  after(function (done) {
    s.lower()
    .then(done)
    .catch(done)
  })

  it('test findOne', function(done){
    request(s.sails.hooks.http.app)
    .get(`/videos`)
    .expect(200)
    .end(done)
  })

  it('test findOne', function(done){
    request(s.sails.hooks.http.app)
    .get(`/videos`)
    .expect(403)
    .end(done)
  })
})
