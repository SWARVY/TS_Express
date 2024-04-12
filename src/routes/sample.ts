import { Router } from 'express';

const sampleRouter = Router();

sampleRouter.get('/', (req, res) => {
  res.send('hello world');
});

export default sampleRouter;
