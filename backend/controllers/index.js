// DEPENDENCIES & IMPORTS
import axios from 'axios';
import 'dotenv/config';

// Serves today's featured picture on page load
export const getTodaysImage = async () => {
  const url = process.env.API_URL;
  const image = await axios(url)
    .then(res => {
      return {
        date: res.data.date,
        hdurl: res.data.hdurl,
        explanation: res.data.explanation,
        title: res.data.title
      };
    })  //returns hdurl which is the key for the image link
    .catch(error => console.log(`Error: ${error.message}`));
  return image;
}

// Serves a different image for a user selected date
export const getNewImage = async (date) => {
  const url = `${process.env.API_URL}&date=${date}` // plus date inputs
  const image = await axios(url)
    .then(res => {
      return {
        date: res.data.date,
        url: res.data.url,
        hdurl: res.data.hdurl,
        explanation: res.data.explanation,
        title: res.data.title
      };
    })  // hdurl is the key for the image link
    .catch(error => console.log(`Error: ${error.message}`));
  return image;
}

