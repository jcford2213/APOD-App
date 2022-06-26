<template>
  <div class="flex flex-col place-items-center mt-10" id="wrapper">
    <h1 class="text-primary font-bold text-4xl mb-5">NASA Astronomy Picture of the Day</h1>

    <div class="flex flex-row gap-x-5 my-5" id="searchBar">
      <label class="font-semibold text-primary" id="inputLabel" for="userInput" >Search for Image by Date:</label>
      <input class="focus:outline-none focus:value-none border-2 rounded-md border-primary placeholder:text-primaryLight px-1.5 invalid:border-secondaryDark invalid:placeholder-secondary" autocomplete="off" type="text" id="userInput" v-model.trim.lazy="userInput" :placeholder="placeHolder"/>
      <button class="md:hover:bg-colorGrayLightest border-2 rounded-md border-primary px-1.5 text-primaryLight font-semibold " id="dateButton" @click="getSearchImage(userInput)">Get Image</button>
    </div>

    <img class="my-5" id="homeImage" :src="imageURL" alt="NASA Image"/>

    <div class="w-11/12 my-5 center-center" id="imageParagraph">
      <p class="font-bold text-xl text-primary pb-3" id="imageTitle">{{ imageTitle }}</p>
      <p class="text-colorBase font-medium indent-8 my-5" id="imageDescription">{{ imageDescription }}</p>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  
  export default {
    // props: {
    //   userInput: String
    // },
    data() {
      return {
        imageURL: String,
        imageDescription: String,
        todaysDate: String,
        inputDate: String,
        imageTitle: String,
        placeHolder: 'YYYY-MM-DD',
        userInput: ''
      }
    },
    async mounted() {   // On load (mounted) requests today's image from server and sets it as imageURL
      const response = await axios.get('http://localhost:5000');
      this.imageURL = response.data.hdurl;
      this.imageDescription = response.data.explanation;
      this.todaysDate = response.data.date;
      this.imageTitle = response.data.title;
    },
    methods: {
      async getSearchImage(input) {
        const checkExpression = /\d\d\d\d\-\d\d\-\d\d/;  // YYYY-MM-DD
        if (input != undefined && input.match(checkExpression)) {
          console.log(`Date: ${input} - Searching for image...`)
          this.$el.querySelector('#userInput').setCustomValidity('');
          const response = await axios.post('http://localhost:5000', {
          date: input
          });
          console.log(response.data);
          switch (response.data.hdurl) {
            case undefined:
              this.imageURL = response.data.imageURL;
              break;
            default:
              this.imageURL = response.data.hdurl;
              break;
          }
          this.imageDescription = response.data.explanation;
          this.inputDate = response.data.date;
          this.imageTitle = response.data.title;
        } else {
          console.log(`Search Error: Invalid User input: "${this.userInput}"`);
          this.$el.querySelector('#userInput').setCustomValidity('Invalid Field');
          this.clearInput();
        }
      },

      clearInput() {
        this.userInput = "";
      }
    }
  }
</script>