import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from './utils/logger'
import routes from './routes'

const port = config.get<number>("port") || 3000;

const app = express();
app.use(express.json())

app.listen(port, async () => {
  logger.info(`the app is running on http://localhost:${port}`);
  await connect();
  routes(app)
});
