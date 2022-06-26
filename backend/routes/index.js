// DEPENDENCIES & IMPORTS
import express from 'express';
import { getTodaysImage, getNewImage } from '../controllers/index.js';

// Set up router
const router = express.Router();

router.get('/', async (req, res) => {
  const image = await getTodaysImage(); // Gets the nasa image of the day url
  console.log(`Sending today's image`);
  res.send(image); 
});

router.post('/', async (req, res) => {
  const data = req.body;
  console.log(`From the server ${data.date}`);
  const image = await getNewImage(data.date);
  console.log(`From /Routes/index.js \n -- New Image HDURL is: ${image.hdurl} \n URL is ${image.url}`);
  res.send(image);
})


export default router;