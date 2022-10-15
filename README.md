Title:
  A NASA's Astronomy Picture of the Day (APOD) Website

Version:
  1.0.2 - Mobile friendly only prototype

Descirption:
  The goal of this project is to build a modern looking NASA APOD website using NASA's APOD API 

  This project is intended to be an exercise in building a website using data from an API.
  This project is built using: 
  - Node.js as the server 
    - Nodemon to automatically restart the server when a file save is detected
  - Vue.js as the frontend
    - Tailwindcss CSS Framework
      
  NASA features an astronomical photo or video daily online. 
  The first image was featured on June 16 1995
  The NASA official website link is: https://apod.nasa.gov/apod/astropix.html
  NASA offers a free API to access their APOD data.
```
// App Setup
    - Generate A Free NASA API Key at https://api.nasa.gov
  
  // Frontend Code
    cd frontend
    npm install
    npm run dev

  // Frontend .env
      ```env
      VITE_SERVER_PORT={the server's port}
      ```

  // Backend Code
    cd backend
    npm install
    npx nodemon

  // Backend .env
    ```env
    API_KEY={your nasa api key}
    SERVER_PORT={the server's port}
    ```

// Run APP - Open web browser to http://localhost:3000
```
    