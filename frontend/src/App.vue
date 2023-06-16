<template id="app">
  
  <div id="wrapper" class="flex flex-col min-h-screen h-fit w-full">
    <!--HEADER-->
    <header id="header" class="flex flex-row px-2 bg-nasaWhite desktop:mx-[13.5%]">
      <router-link id="appLogo" :to="{ name: 'homeView' }" class="min-w-[143px] font-bold text:base text-nasaBlue">NASA's Astronomy<br>Picture of the Day</router-link>
      <nav id="nav" class="flex-grow flex flex-row place-items-center justify-end">
        <searchBarComp class="mx-[10px] caret-nasaBlue text-nasaBlue" />
      </nav>
    </header>
    
    <main class="flex-grow w-full bg-lightGrey desktop:px-[13.5%]">
      <Suspense>
        <router-view :key="$route.fullPath" :dates="dates" :dateIndex="dateIndex" @indexChanged="setUrlPath"/>
      </Suspense>
    </main>
    <footer id="footer" class="flex-none w-full pt-[10px] pb-[10px] px-[1px] border-t-[2px] border-nasaBlue bg-lightGrey desktop:bg-nasaWhite">
      <p class="text-center text-xs text-nasaWhite desktop:text-nasaBlue">All images and information provided by NASA's Astonomy Picture of the Day open API</p>
    </footer>
  </div>

</template>

<script> // 'script setup' is recommended syntax for SFC's. Provides several advantages over 'script'
// COMPONENTS
  import podView from './views/podView.vue';
  import searchBarComp from './components/searchBarComp.vue';

// IMPORTS & DEPENDENCIES
  import getAllDates from './controllers/getAllDates';
  import router from './router';


  export default {
    el: "#app",
    name: 'App',
    components: {
      podView,
      searchBarComp
  },
// DATA
    data() {
      return {
        dates: getAllDates(),   // Returns an array of objects
        mobileView: false,
        mobileNavVisibility: false  // Used by tag i id='fa-bars'
      }
    },
// COMPUTED
    computed: {
      // Checks current image date 
      // Compare that date to dates in date array
      // Returns the matching index from dates array 
      // Sends the index to podView as a prop
      dateIndex () {
        let path = decodeURIComponent(this.$route.fullPath);
        path = path.replace('/', '');
        if(path !== '') {
          console.log(`Path is ${path} | from App.vue dateIndex() computed:`);
          console.log(`Index is ${this.dates.findIndex((date) => date.string == path)} | from App.vue dateIndex() computed:`)
          return this.dates.findIndex((date) => date.string === path);
        } else {
          return 0;
        }
      }
    },
// METHODS
    methods: {
      // Sets display to Mobile if inner width is less than/equal to X pixles
      handleView() { 
        this.mobileView = window.innerWidth <= 750; 
      },
      // Sets the url path for based on the image date
      setUrlPath(index) {
        console.log(this.dates[index].string)
        router.push({ name: 'podView', params: { urlDate: this.dates[index].string } });
      }
    },

// CREATED
    created() {
      // Checks screen width and sets this.mobileView
      this.handleView();
      window.addEventListener('resize', this.handleView);
    }
  }
</script>