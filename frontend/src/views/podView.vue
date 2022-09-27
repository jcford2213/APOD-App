<template>
  <div id="wrapper">
    <div id="dateArrowsBar" class="flex flex-row items-center h-[30px] border-t-[2px] border-nasaBlue">
      <button id="toYesterdaysImage" :disabled="dateIndex === (dates.length - 1)" @click="changeIndex(1)" class="disabled:opacity-75 h-full w-[15%] bg-nasaBlue text-[white] text-center">&#60</button>
      <p id="podDate" class="flex-grow text-center font-bold text-sm text-textPrimary">{{ podDate }}</p>
      <button id="toTomorrowsImage" :disabled="dateIndex === 0" @click="changeIndex(-1)" class="disabled:opacity-75 h-full w-[15%] bg-nasaBlue text-[white] text-center">&#62</button>
    </div>

    <div id="media" class="min-h-[200px] bg-darkGrey">
      <mediaComp v-if="imageExists" :isImage="isImage" :podURL="podURL" :podHDURL="podHDURL" />
      <p id="noImageMessage" v-if="!imageExists" class="text-center text-nasaWhite">{{ noImageMessage }}</p>
    </div>

    <p id="podTitle" class="text-center font-bold text-sm pt-[10px] text-textPrimary">{{ podTitle }}</p>

    <div id="hrDescriptionBar" class="flex py-[10px]">
      <hr class="flex-grow self-center text-primary w-full border-[1px] border-nasaBlue">
      <h4 class="flex-none px-2 font-bold text:sm lg:text-lg text-textPrimary">Description</h4>
      <hr class="flex-grow self-center text-primary w-full border-[1px] border-nasaBlue">
    </div>

    <p id="podDescription" class="px-2 text-sm lg:text-base font-medium indent-8 text-textPrimary">{{ podDescription }}</p>
  </div>
</template>

<script>
// IMPORTS & DEPENDENCIES
  import axios from 'axios';
  
// COMPONENTS
  import mediaComp from '../components/mediaComp.vue';

// let descriptionVisibility = false;  // If false, indicates the podDescription is not visible
  export default {
    el: '#wrapper', // Used for $el selector to select elements from the local template html.
    name: 'podView',
    components: {
      mediaComp,
// PROPS
    },
    props: {
      dates: Array, // Contains all dates from 1995-06-16 to present. Each array element is an object | sent from App.vue
      urlDate: String,  // defined by the route path ( /:urlDate ) | from routes/index.js
      dateIndex: Number // is the index of the current date from dates array | sent from App.vue
    },
// DATA
    data() {
      return {
        noImageMessage: 'No image exists on this day',
        imageExists: true,
        isImage: true,
        response: Object,
        mediaType: '',
        podTitle: '',
        podDate: '',
        podDescription: '',
        podHDURL: '',
        podURL: '',
      }
    },
    computed: {
      currentIndex() { return this.dateIndex; } // Index of the current date in the dates array
    },
// METHODS
    methods: {
      async getImage() {
        let response;
        // Gets todays picture
        if (typeof this.urlDate === 'undefined') {
          console.log(`Calling server for today's image | from podView getImage()`);
          response = await axios('http://localhost:5000');
        }
      // Gets search picture
        else {
          console.log(`Calling server for image from ${this.urlDate} | from podView getImage()`)
          response = await axios.post('http://localhost:5000', {date: this.urlDate});
        }
        if (typeof response.data.mediaType !== 'undefined') {
          this.mediaType = response.data.mediaType;
          this.podDescription = response.data.explanation;
          this.podDate = response.data.date;
          this.podTitle = response.data.title;
        // Display either image or video
          switch (this.mediaType) {
            case 'image':
              this.podHDURL = response.data.hdurl;
              this.podURL = response.data.url;
              this.isImage = true;
              break;
            case 'video':
              this.podURL = response.data.url;
              this.isImage = false
              break;
          }
        } else {
          this.podDate = this.dates[this.dateIndex].string;
          this.imageExists = false;
        }
      },
      // Sends to parent component the image's currentIndex +/- 1
      // Called by the buttons #toYesterday'sImage and #toTomorrow'sImage
      changeIndex(increment) {
        this.$emit ('indexChanged', (this.currentIndex + increment));
      }
    },
// CREATED
    created() {
      this.getImage();
      console.log(`DateIndex == ${this.currentIndex} | from podView created()`);
    }
  }
</script>