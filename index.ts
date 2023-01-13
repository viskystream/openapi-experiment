import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import * as OpenApiValidator from 'express-openapi-validator';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(
  OpenApiValidator.middleware({
    apiSpec: './api.yaml',
    operationHandlers: path.join(__dirname),
  }),
);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // format error
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
