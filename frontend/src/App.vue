<template id="app">
  <div id="windowWrapper" class="sticky min-w-[350px] bg-darkGrey">
    <!--Navigation shown on Mobile Devices-->
    <div id="mobileNav" v-if="mobileView" class="flex flex-col items-end pt-3 absolute right-3">
      <button id="mobileNavButton" @click="toggleNavVisibility">
        <i id="fa-x" class="fas fa-sharp fa-solid fa-x text-nasaWhite"></i>
      </button>
      <ul id="nav" class="h-fit w-fit text-end space-y-[10px]">
        <li><router-link :to="{ name: 'homeView' }" @click="this.$emit('newPageLoading')" class="font-bold text:base text-nasaWhite">Home</router-link></li>
        <li><router-link :to="{ name: 'aboutView' }" @click="this.$emit('newPageLoading')" class="font-bold text:base text-nasaWhite">About</router-link></li>
      </ul>
    </div>

    <div id="contentWrapper" class="flex flex-col h-screen w-full overflow-scroll bg-[#6b6b6b]">
      <!--HEADER-->
      <header id="header" class="flex flex-row px-2 bg-nasaWhite">
        <router-link id="appLogo" :to="{ name: 'homeView' }" class="min-w-[143px] font-bold text:base text-nasaBlue">NASA's Astronomy<br>Picture of the Day</router-link>
        <nav id="nav" class="flex-grow flex flex-row place-items-center justify-end">
          <searchComp class="mx-[10px] caret-nasaBlue text-nasaBlue" />
          <!--Button. Shown on Mobile Devices-->
          <button id="mobileNavButton" v-if="mobileView" @click="toggleNavVisibility">
            <i id="fa-bars" v-if="!mobileNavVisibility" class="fas fa-bars text-nasaBlue"></i>
          </button>
          <!--DESKTOP NAVIGATION-->
          <ul v-if="!mobileView" class="flex flex-row gap-5 justify-end items-center">
            <router-link :to="{ name: 'aboutView' }" class="font-bold text:base text-nasaBlue">About</router-link>
          </ul>
        </nav>
      </header>
      <div id="routerWrapper" class="flex-grow w-full">
        <router-view :key="$route.fullPath" :dates="dates" :dateIndex="dateIndex" @indexChanged="setUrlPath"/>
      </div>
      <footer id="footer" class="flex-none w-full mt-[10px] px-[1px] border-t-[2px] border-nasaBlue bg-nasaWhite">
        <p class="text-center text-xs px-2 py-[1px] md:text-base text-nasaBlue">All images and information provided by NASA's Astonomy Picture of the Day API</p>
      </footer>
    </div>

  </div>

</template>

<script> // 'script setup' is recommended syntax for SFC's. Provides several advantages over 'script'
// COMPONENTS
  import podView from './views/podView.vue';
  import aboutView from './views/aboutView.vue';
  import searchComp from './components/searchComp.vue';

// IMPORTS & DEPENDENCIES
  import getAllDates from './controllers/getAllDates';
  import router from './router';


  export default {
    el: "#app",
    name: 'App',
    components: {
      podView,
      aboutView,
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
// WATCH
    watch: {
      // Shifts all of the webpage content to the left
      // Reveals nobile navigation list
      mobileNavVisibility(value) {
        switch(value) {
          case true: 
            this.$el.querySelector('#contentWrapper').style = 'transform: translateX(-150px); transition: 1s transform cubic-bezier(0,.12,.14,1)';
            //this.$el.querySelector('#navSearchComp').style = 'transform: translateX(-150px); transition: 1s transform cubic-bezier(0,.12,.14,1)';
            break;
          case false: 
            this.$el.querySelector('#contentWrapper').style = 'transform: translateX(0px); transition: 1s transform cubic-bezier(0,.12,.14,1)';
            //this.$el.querySelector('#navSearchComp').style = 'transform: translateX(0px); transition: 1s transform cubic-bezier(0,.12,.14,1)';
            break;
        }
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
      this.$el.querySelector('#contentWrapper').style = 'transform: translateX(0px)';
    }
  }
</script>