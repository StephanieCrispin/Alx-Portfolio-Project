import request from 'supertest';
import app from '../../app';

// it('Should return a 405 for non posts requests to the sign up route', async () => {});

it('Should return a 422 if the email is not valid', async () => {
  await request(app).post('/api/auth/signup').send({}).expect(422);
  await request(app).post('/api/auth/signup').send({ email: 'randomå' }).expect(422);
});
