import request from 'supertest';
import app from '../app';

it('Responds with a status code of 200', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(400);
});
