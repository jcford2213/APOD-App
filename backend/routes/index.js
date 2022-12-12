// DEPENDENCIES & IMPORTS
import express from 'express';
import { getTodaysImage, getNewImage } from '../controllers/getImages.js';
import getImageSize from '../controllers/getImageSize.js';

// Set up router
const router = express.Router();

router.get('/', async (req, res) => {
  const image = await getTodaysImage(); // Returns an object. Gets todays APOD data 
  getImageSize(image.hdurl)
  getImageSize(image.url)
  console.log(`Sending today's image`);
  res.send(image); // Sends an object
});

router.post('/', async (req, res) => {
  const data = req.body;
  if (data.date === undefined) {  
    res.send('undefined date: from backend/routes/index.js')
  }
  else {
    console.log(`date sent from frontend = ${data.date}; backend/routes/index.js ln20`);
    try {
      const image = await getNewImage(data.date); // Sends request to NASA's api for specific date
      console.log(` Image HDURL is: ${image.hdurl}\n  Image URL is ${image.url}\n Image mediatype is ${image.mediaType}\n/router/index.js ln23`);
      res.send(image);
    }
    catch (err) {
      res.send('Error connecting to NASA API');
    }
  }
})


export default router;