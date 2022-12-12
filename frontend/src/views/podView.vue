<template>
  <div id="dateArrowsBar" class="flex flex-row items-center h-fit border-t-[2px] border-nasaBlue">
      <button id="toYesterdaysImage" :disabled="dateIndex === (dates.length - 1)" @click="changeIndex(1)" class="disabled:opacity-75 h-full w-[15%] bg-nasaBlue text-nasaWhite text-center desktop:text-lg desktop:font-bold">&#60</button>
      <p id="podDate" class="flex-grow text-center font-bold text-sm text-textPrimary tablet:text-base desktop:text-lg">{{ podDate }}</p>
      <button id="toTomorrowsImage" :disabled="dateIndex === 0" @click="changeIndex(-1)" class="disabled:opacity-75 h-full w-[15%] bg-nasaBlue text-nasaWhite text-center desktop:text-lg desktop:font-bold">&#62</button>
    </div>
  <div id="wrapper" class="desktop:grid desktop:grid-cols-[5%_auto_430px_5%] desktop:gap-[10px]">
    <div id="mediaWrapper" v-if="imageExists" class="relative desktop:col-start-2 desktop:self-center desktop:justify-self-center">
      <img id="podImage" v-if="isImage" :src="podURL" alt="Picture of the Day" class="w-full h-auto max-h-full indent-[100%] whitespace-nowrap overflow-hidden desktop:w-auto desktop:max-h-full"/>
      <p id="copyright" v-if="isImage" class="absolute bottom-0 text-[0.65rem] leading-tight text-nasaWhite bg-darkGrey/[.6] p-[2px]">{{ copyright }}</p>
      <iframe id="podVideo" v-if="!isImage" :src="podURL" class="w-full aspect-video indent-[100%] whitespace-nowrap overflow-hidden" ></iframe>
      <p id="noImageMessage" v-if="!imageExists" class="h-[200px] bg-darkGrey text-center text-nasaWhite">{{ noImageMessage }}</p>
    </div>
    <div id="descriptionContainer" class="desktop:col-start-3 desktop:justify-self-start">
      <p id="podTitle" class="h-fit text-center font-bold pt-[10px] text-textPrimary tablet:text-lg desktop:row-start-1 desktop:col-start-2">{{ podTitle }}</p>
      <div id="hrDescriptionBar" class="flex py-[10px] text-sm">
        <hr class="flex-grow self-center text-primary w-full border-[1px] border-nasaBlue">
        <h4 class="flex-none px-2 font-bold text:sm text-textPrimary desktop:text-lg">Description</h4>
        <hr class="flex-grow self-center text-primary w-full border-[1px] border-nasaBlue">
      </div>
      <p id="podDescription" class="px-2 text-sm font-medium indent-8 text-textPrimary largeTablet:text-base">{{ podDescription }}</p>
    </div>
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
        copyright: ''
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
          response = await axios.get(`${import.meta.env.VITE_SERVER_URL}`)
        }
      // Gets search picture
        else {
          console.log(`Calling server for image from ${this.urlDate} | from podView getImage()`)
          response = await axios.post(`${import.meta.env.VITE_SERVER_URL}`, {date: this.urlDate});
        }
        if (typeof response.data.mediaType !== 'undefined') {
          this.mediaType = response.data.mediaType;
          this.podDescription = response.data.explanation;
          this.podDate = response.data.date;
          this.podTitle = response.data.title;
          this.copyright = response.data.copyright;
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