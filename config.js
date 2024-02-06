import dotenv from 'dotenv';

dotenv.config({path: './config.env'});

export const PORT = 5555;
export const mongoDBURL =
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.n7msjwt.mongodb.net/?retryWrites=true&w=majority`;
