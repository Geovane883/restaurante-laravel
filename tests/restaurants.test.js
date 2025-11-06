const request = require('supertest');
const app = require('../app/app');
const db = require('../resources/models/db');

afterAll(async () => {
  await db.destroy();
});

test('GET /restaurants retorna 200 e array', async () => {
  const res = await request(app).get('/restaurants');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
