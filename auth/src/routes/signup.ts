import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const signUpRouter = express.Router();

signUpRouter.post(
  '/api/auth/signup',
  [body('email').isEmail().withMessage('Email must be a valid format')],
  async (req: Request, res: Response) => {
    // const { email } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).send({});
    res.send({});
    return false;
  }
);

export default signUpRouter;
