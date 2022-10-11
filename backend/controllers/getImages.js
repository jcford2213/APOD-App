// DEPENDENCIES & IMPORTS
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

// Gets today's APOD data from NASA's api
// Returns an object
export const getTodaysImage = async () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
  const image = await axios(url)
    .then(res => {
      return {
        mediaType: res.data.media_type,
        date: res.data.date,
        url: res.data.url,
        hdurl: res.data.hdurl,
        explanation: res.data.explanation,
        title: res.data.title,
        copyright: res.data.copyright
      };
    })  //returns hdurl which is the key for the image link
    .catch(error => console.log(`Error: ${error.message}`));
  return image;
}

// Serves a different image for a user selected date
export const getNewImage = async (date) => {
  if (date != undefined) {
    try {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}` // plus date inputs
      const image = await axios(url)
        .then(res => {
          return {
            mediaType: res.data.media_type,
            date: res.data.date,
            url: res.data.url,
            hdurl: res.data.hdurl,
            explanation: res.data.explanation,
            title: res.data.title,
            copyright: res.data.copyright
          };
        });  // hdurl is the key for the image link
        return image;
      } catch (error) {
        throw new Error('Error failed to connect to NASA API :: backend/controllers/index.js :: ');
      };
  } else {
    throw new Error('Error failed to connect to NASA API :: backend/controllers/index.js :: ');
  };
}

