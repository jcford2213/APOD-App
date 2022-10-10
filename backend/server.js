// DEPENDENCIES & IMPORTS
import express from 'express';
import cors from 'cors';
import indexRouter from './routes/index.js';


// Inititalize Express App and Setup
const app = express();
app.use(express.json());
app.use(cors());

// Set up Routes
app.get('/', indexRouter);
app.post('/', indexRouter);

// Set App to listen on port 5000
const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`Server listneing on port ${port}`);
}) 