import config from "config";
import logger from './logger'


const mongoose = require("mongoose");

const connect = async () => {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);

    logger.info("Connected to database ");
  } catch (error) {
    logger.error(`Error connecting to the database`);
  }
};

export default connect;
