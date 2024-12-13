import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDB} from './config/dbConfig.js'; 
import webinarRoutes from './routes/webinarRoutes.js'; 

dotenv.config();

const app = express();

connectDB()


app.use(cors());
app.use(express.json());

app.use('/api', webinarRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
