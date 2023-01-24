// use jest to test if the GET / route responds with a 200 status code
let request = require('supertest');
const express = require('express');
const { expect } = require('@jest/globals');


const app = express();
request = request('http://localhost:3001');

// test GET / route
describe('GET /', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
  });
});
