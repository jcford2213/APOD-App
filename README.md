### **NASA's Astronomy Picture of the Day (APOD) Website Recreation**

## **version**
  1.0.2 - Mobile friendly only prototype

## **Descirption**
  **Frontend**: Vue.js, Tailwind CSS

  **Backend**:  Express.js, Node.js

  **First Image**: 1995/06/16 (June 16, 1995)

  **Official NASA APOD website**: [https://apod.nasa.gov/apod/astropix.html]
  
## **App Setup**
  **Generate A Free NASA API Key**: [https://api.nasa.gov]

  **Clone APOD-APP**
  ```
  git clone https://github.com/jcford2213/APOD-App.git
  ```

  **Frontend Code**
    ```
    cd frontend
    npm install
    npm run dev
    ```

   **Frontend .env**
    ```env
    VITE_SERVER_PORT={the server's port}
    ```

  **Backend Code**
  ```
    cd backend
    npm install
    npx nodemon
  ```

  **Backend .env**
  ```env
  API_KEY={your nasa api key}
  SERVER_PORT={the server's port}
  ```

 ## **Run APP**
  Go to http://localhost:3000 in browser

    