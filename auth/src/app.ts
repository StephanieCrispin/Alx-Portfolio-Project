import express from 'express';
import routes from './routes';

const app = express();

const { signUpRouter } = routes;
app.get('/', (req, res) => {
  res.status(200).send({});
});
app.use(express.json());
app.use(signUpRouter);
export default app;
