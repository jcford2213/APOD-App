<template id="app">
  <div id="windowWrapper" class="sticky min-w-[350px] bg-darkGrey">
    <div id="contentWrapper" class="flex flex-col h-screen w-full overflow-scroll bg-[#6b6b6b]">
      <!--HEADER-->
      <header id="header" class="flex flex-row px-2 bg-nasaWhite">
        <router-link id="appLogo" :to="{ name: 'homeView' }" class="min-w-[143px] font-bold text:base text-nasaBlue">NASA's Astronomy<br>Picture of the Day</router-link>
        <nav id="nav" class="flex-grow flex flex-row place-items-center justify-end">
          <searchComp class="mx-[10px] caret-nasaBlue text-nasaBlue" />
        </nav>
      </header>
      <div id="routerWrapper" class="flex-grow w-full">
        <Suspense>
          <router-view :key="$route.fullPath" :dates="dates" :dateIndex="dateIndex" @indexChanged="setUrlPath"/>
        </Suspense>
      </div>
      <footer id="footer" class="flex-none w-full mt-[10px] px-[1px] border-t-[2px] border-nasaBlue desktop:bg-nasaWhite">
        <p class="text-center text-xs px-2 py-[1px] text-nasaWhite desktop:text-nasaBlue">All images and information provided by NASA's Astonomy Picture of the Day API</p>
      </footer>
    </div>

  </div>

</template>

<script> // 'script setup' is recommended syntax for SFC's. Provides several advantages over 'script'
// COMPONENTS
  import podView from './views/podView.vue';
  import searchComp from './components/searchComp.vue';

// IMPORTS & DEPENDENCIES
  import getAllDates from './controllers/getAllDates';
  import router from './router';


  export default {
    el: "#app",
    name: 'App',
    components: {
      podView,
      searchComp
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
      // Tracks the 
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
      // Toggles whether mobile naviigtion is visible
      // Is triggered by fabars dropdown button
      toggleNavVisibility() {
        switch(this.mobileNavVisibility) {
          case false: // Nav isn't visible
            this.mobileNavVisibility = true;  // Shows nav on click
          break;
          case true:  // Nav is visible
            this.mobileNavVisibility = false; // Hides nav on click
          break;
        }
        console.log(`mobileNavVisibility = ${this.mobileNavVisibility}`)
      },
      // Sets the url path for based on the image date
      setUrlPath(index) {
        console.log(this.dates[index].string)
        router.push({ name: 'searchView', params: { urlDate: this.dates[index].string } });
      }
    },

// CREATED
    created() {
      console.log(`Number of images/videos = ${this.dates.length} | from App.vue created()`);
      // Checks screen width and sets this.mobileView
      this.handleView();
      window.addEventListener('resize', this.handleView);
    },
// MOUNTED
    mounted() {
      console.log(`$route == ${decodeURIComponent(this.$route.fullPath)} | from App.vue mounted()`);
      console.log(`DateIndex == ${this.dateIndex} | from App.vue mounted()`);
    }
  }
</script>