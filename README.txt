Title:
  A NASA's Astronomy Picture of the Day (APOD) Website

Descirption:
  The goal of this project is to build a modern looking NASA APOD website using NASA's APOD API 

  This project is intended to be an exercise in building a website using data from an API.
  This project is built using: 
    - Node.js as the server 
      - Nodemon to automatically restart the server when a file save is detected
    - Vue.js as the frontend
      - Tailwindcss CSS Framework
      
  NASA features an Astronomical photo or video daily online.
  The NASA official website link is: https://apod.nasa.gov/apod/astropix.html
  NASA offers a free API to access their APOD data.

Acquire Free NASA API Key:
  You need a NASA API key to run this app from your local machine. 
  The API Key will be sent to the email you provide
  There is a request limit for using the API Key, which is 1,000 requests per hour.
  To get a free API key:
    - Open a browser and go to https://api.nasa.gov
    - Scroll to 'Generate API Key' and fill out the required fields
    - Click Signup
    - An API Key will be generated and displayed when the page loads
    
App Setup
  This program has been written using the VS Code editor
  These instructions are written for the VS Code editor and its internal terminal using Windows Powershell
  However, you should be able to use any editor and terminal you like.
  To setup and run the app follow these instructions: 
    - Clone the repository to you local machine
    - In VS Code open the APOD-APP folder
    - Open a terminal and make sure the working directory is \APOD-APP
    - Install Dependencies in the fronend and backend folders
      - Frontend
        - ```
            cd frontend
          ```
        - ```
            npm Install
          ```
      - Backend
        - ```
            cd ../backend
          ```
        - ```
            npm Install
          ```
    - Setup .env File
      - Create a .env file in the APOD-APP/backend folder
      - On the first line define the API_KEY
        - API_KEY={YOUR_KEY}
      - Save and close the .env file

Run App
  - Open terminal and make sure the working directory is \APOD-APP
  - Start the Node.js server
    - From /APOD-APP change directory to /backend
      ```
        cd backend
      ```
    - Start the server
      ```
        npx nodemon
      ```
  - Start the Vue.js server
    - From /APOD-APP change directory to /frontend
      ```
        cd frontend
      ```
    - Start the server
      ```
        npm run dev
      ```
  - Open a browser and type 'localhost:3000' into the address bar
    - Version (1.0.2) is best suited for mobile screen sizes 
      - For the current version (1.0.2) open the browser developer tools and turn on responsive modern
      - If your preffered browser dose not have this capability, drag the browser window size to a mobile phone size width
    