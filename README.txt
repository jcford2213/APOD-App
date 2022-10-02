Title:
  A NASA's Astronomy Picture of the Day (APOD) Website

Descirption:
  The goal of this project is to build a modern looking NASA APOD website using NASA's APOD API 

  This project is intended to be an exercise in building a website using data from an API.
  This project is built using: 
    Node.js as the server 
    Vue.js as the frontend
      Tailwindcss CSS Framework
      
  NASA features an Astronomical photo or video daily online.
  The NASA official website link is: https://apod.nasa.gov/apod/astropix.html
  NASA offers a free API to access their APOD data.


App Setup

  - Acquire Free NASA API Key
    You need a NASA API key to run this app from your local machine. 
    The API Key will be sent to the email you provide
    There is a request limit for using the API Key, which is 1,000 requests per hour.
    To get a free API key:
      - Open a browser and go to https://api.nasa.gov
      - Scroll to 'Generate API Key' and fill out the required fields
      - Click Signup
      - An API Key will be generated and displayed when the page loads
    
  - Setup .env File
    - Create a .env file in the APOD-APP/backend folder
    - On the first line define the API_KEY
      - API_KEY={YOUR_KEY}
    - Save and close the .env file


Install and Run App
  

  - Backend
    - Open a terminal
    - Change directory to APOD-APP/backend
    - Run command: npx nodemon

  - Frontend
    - Open another terminal
    - Change directory to APOD-APP/frontend
    - Run command: npm run dev

  - Open a browser and type localhost:3000 in the address bar

