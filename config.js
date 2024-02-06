import dotenv from 'dotenv';

dotenv.config({path: './config.env'});

export const PORT = 5555;
export const mongoDBURL =
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@${process.env.Db_url}`;
