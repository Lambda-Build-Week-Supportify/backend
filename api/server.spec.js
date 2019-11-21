const request = require('supertest');

const server = require('./server');

describe('server.js', () => {

  describe('index route', () => {
    it('should return OK status code 200 form the index route', async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get('/api');

      expect(response.status).toEqual(expectedStatusCode);


    })

    it('should retrun a JSON object from the index route', async () => {

      const expectedBody = {
        "api": "THIS IS YOUR BASE API ROUTER. OTHERS: /api/auth  /api/users "
      };

      const response = await request(server).get('/api');

      expect(response.body).toEqual(expectedBody);

    })

    it('should return a JSON type object from the index route', async () => {

      const response = await request(server).get('/api');

      expect(response.type).toEqual('application/json')

    })

  })

})