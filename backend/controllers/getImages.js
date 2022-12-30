// DEPENDENCIES & IMPORTS
import * as dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

// Gets today's APOD data from NASA's api
// Returns an object
export const getTodaysImage = async () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
  const apiResult = await axios(url)
    .then(res => {
      console.log(`Sending today's image`);
      return res.data
    })  //returns hdurl which is the key for the image link
    .catch(error => {
      console.log(`Error with Axios Call: ${error.message}`)
      return 'Axios Error'
    });
    return apiResult
}

// Serves a different image for a user selected date
export const getNewImage = async (date) => {
  if (date != undefined) {
    try {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}` // plus date inputs
      const apiResult = await axios(url)
        .then(res => { return res.data });  // hdurl is the key for the apiResult link
        return apiResult;
      } catch (error) {
        throw new Error('Error failed to connect to NASA API :: backend/controllers/index.js :: ');
      };
  } else {
    throw new Error('Error failed to connect to NASA API :: backend/controllers/index.js :: ');
  };
}

