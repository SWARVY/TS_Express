import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import cors from 'cors';
import sampleRouter from './routes/sample';

const app = express();
const PORT = 3001;

// test api
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'hello world' });
});

// bodyparser setting
app.use(express.json());

app.use(cors());

// router load
app.use('/sample', sampleRouter);

// listen
app.listen(PORT, () => {
  console.log(`Server is running via ${PORT} PORT`);
});
