<template>
  <div id="dateArrowsBar" class="flex flex-row items-center h-fit border-t-[2px] border-nasaBlue">
    <button id="toYesterdaysImage" :disabled="dateIndex === (props.dates.length - 1)" @click="changeIndex(1)" class="disabled:opacity-40 disabled:font-thin h-full w-[15%] bg-nasaBlue text-nasaWhite font-bold text-center desktop:text-lg desktop:font-bold">&#60</button>
    <p id="podDate" class="flex-grow text-center font-bold text-sm text-textPrimary tablet:text-base desktop:text-lg ">{{ toDisplayFormat(apiImage.date) }}</p>
    <button id="toTomorrowsImage" :disabled="dateIndex === 0" @click="changeIndex(-1)" class="disabled:opacity-40 disabled:font-thin h-full w-[15%] bg-nasaBlue text-nasaWhite font-bold text-center desktop:text-lg desktop:font-bold">&#62</button>
  </div>
  <h2 class="pt-[10px] pb-[10px] text-center font-bold text-textPrimary bg-darkGrey">APOD images range from 06-16-1995 to today</h2>
  <div id="wrapper" class="desktop:grid desktop:grid-cols-[5%_auto_430px_5%] desktop:gap-[10px]">
    <div id="mediaWrapper" v-if="imageExists" class="relative desktop:col-start-2 desktop:self-center desktop:justify-self-center">
      <img ref="podImage" v-if="isImage" :src="apiImage.url" alt="Picture of the Day" class="w-full h-auto max-h-full indent-[100%] whitespace-nowrap desktop:w-auto desktop:max-h-full"/>
      <p id="copyright" v-if="apiImage.copyright" class="absolute bottom-0 text-[0.65rem] leading-tight text-nasaWhite bg-darkGrey/[.6] p-[2px]">Image Credit & Copyright: {{ apiImage.copyright }}</p>
      <iframe id="podVideo" v-if="!isImage" :src="apiImage.url" class="w-full aspect-video indent-[100%] whitespace-nowrap" ></iframe>
      <p id="noImageMessage" v-if="!imageExists" class="h-[200px] bg-darkGrey text-center text-nasaWhite">{{ noImageMessage }}</p>
    </div>
    <div id="descriptionContainer" class="desktop:col-start-3 desktop:justify-self-start">
      <p id="podTitle" class="h-fit text-center font-bold pt-[10px] text-textPrimary tablet:text-lg desktop:row-start-1 desktop:col-start-2">{{ apiImage.title }}</p>
      <div id="hrDescriptionBar" class="flex py-[10px] text-sm">
        <hr class="flex-grow self-center text-primary w-full border-[1px] border-nasaBlue">
        <h4 class="flex-none px-2 font-bold text:sm text-textPrimary desktop:text-lg">Description</h4>
        <hr class="flex-grow self-center text-primary w-full border-[1px] border-nasaBlue">
      </div>
      <p id="podDescription" class="px-2 mb-4 text-sm font-medium indent-8 text-textPrimary largeTablet:text-base">{{ apiImage.explanation }}</p>
    </div>
  </div>
</template>

<script setup>
// IMPORTS & DEPENDENCIES
  import { computed } from 'vue';
  import axios from 'axios';
  import { toApiFormat, toDisplayFormat } from '../controllers/dateFormatConversions'
 
  const props = defineProps({
    dates: Array, // Contains all dates from 1995-06-16 to present. Each array element is an object | sent from App.vue
    urlDate: String,  // defined by the route path ( /:urlDate ) | from routes/index.js
    dateIndex: Number // is the index of the current date from dates array | sent from App.vue
  })

  const emit = defineEmits(['indexChanged'])
  const noImageMessage ='No image exists on this day'
  let imageExists = true
  let isImage = true
  let apiImage = Object
  let loaded = Boolean
  const currentIndex = computed( () => { return props.dateIndex; } ) // Index of the current date in the dates array
  
  // Sends to parent component the image's currentIndex +/- 1
  // Called by the buttons #toYesterday'sImage and #toTomorrow'sImage
  const changeIndex = increment => {
    emit ('indexChanged', (currentIndex.value + increment));
  }

  const getImage = async () => {
    let serverRes;
   // serverRes = await axios.get(`${import.meta.env.VITE_SERVER_URL}`)  // Get today's image
    if (typeof props.urlDate === 'undefined') {  // Checks if there is a date in the URL indicating a search for a past image
      serverRes = await axios.get(`${import.meta.env.VITE_SERVER_URL}`)  // Get today's image
    }
    else {  // Get past image)
      serverRes = await axios.post(`${import.meta.env.VITE_SERVER_URL}`, {date: toApiFormat(props.urlDate)});
    }
    if (typeof serverRes.data.media_type !== 'undefined') {
      apiImage = serverRes.data
    // Display either image or video
      switch (serverRes.data.media_type) {
        case 'image':
          isImage = true;
          break;
        case 'video':
          isImage = false
          break;
      }
    } else {
      apiImage.date = props.dates[props.dateIndex].string;
      imageExists = false;
    }
    console.log(apiImage)
  }

  await getImage()
</script>