const app = require('./server/app');
const express = require('express');
const moxios = require('moxios');
const request = require('supertest');

// const initServer = () => {
//   const app = express();
//   app.use(server());
//   return app;
// }

// let result;

// beforeAll(async () => {
//   result = await request(app).get('/');
// });

describe('Test the root path: GET /', () => {
  let result;
  beforeAll(async () => {
    result = await request(app).get('/');
  });

  test('responds with html', () => expect(result.type).toBe('text/html'));

  test('responds with status code of 200', () => expect(result.status)
    .toBe(200));
});


describe('Test DB query: GET /search', () => {
  let result
  beforeAll(async () => {
    result = await request(app).get('/search');
  });

  test('responds with json', async () => {
    expect(result.type).toBe('application/json')
  });

  test('responds with status code of 200', () => {
    expect(result.status).toBe(200)
  });

  test('responds with 100 items', () => {
    expect(result.body.length).toBe(100)
  });

});

describe('Test non-existent post route: POST /', () => {
  let result;
  beforeAll(async () => {
    result = await request(app).post('/');
  });

  test('responds with status code of 404', () => expect(result.status)
    .toBe(404));
});