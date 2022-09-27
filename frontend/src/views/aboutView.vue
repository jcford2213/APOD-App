<template>
  <div id="wrapper" class="flex flex-col gap-3 pt-3 px-2">
    <h1 class="text-center text-nasaWhite">About This Site</h1>
    <p class="text-nasaWhite indent-8">{{ apodDescription }} <a href="https://apod.nasa.gov/apod/astropix.html" class="text-nasaBlue underline">click here</a> </p>
    <p class="text-center text-nasaWhite">Dates range from {{ today }} to {{ firstDay }}</p>
  </div>
</template>
<script>
export default {
  el: '#wrapper',
  name: 'aboutView',
  props: {
    dates: Array
  },
  data() {
    return{
      today: this.dates[0].string,
      firstDay: this.dates[(this.dates.length -1)].string,
      apodDescription: 'This site has been created using data from NASA\'s Astronomy Picture of the Day API. NASA\'s Astronomy Picture of the Day began in June of 1995. Each day a different image or video is featured along with an explination written by a professional astronomer. To view NASA\'s APOD site ',

    }
  }
}
</script>