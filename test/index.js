"use strict"
let request = require('supertest-as-promised')
const api = require('../app')
const host = api

request = request(host)

describe('Ruta indice, Hola mundo', function() {
  describe('GET /', function() {
    it('deberia regresar un Hola mundo', function(done) {
      request
        .get('/')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-type', /application\/json/)
        .end((err,res) => {
          let body = res.body

          expect(body).to.have.property('message','Hola mundo')
          done(err)
        })
    })
  })
  
})