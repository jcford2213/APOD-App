<template>
  <div id=searchWrapper>
    <div id="searchBar" class="flex flex-row items-center justify-between gap-[2px] h-fit w-fit px-1.5 border-2 rounded-md border-nasaBlue">
        <input id="userInput" v-model.trim.lazy="userInput" autocomplete="off" type="text" @keyup.enter="searchEntered(userInput)" :placeholder="placeHolder" class="min-w-[4rem] max-w-[7rem] focus:outline-none focus:value-none bg-clip-text placeholder:text-nasaBlue "/>
        <button @click="searchEntered(userInput)"><i class="fas fa-search text-nasaBlue"></i></button>
    </div>
  </div>
</template>

<script>
  import validateSearch from '../controllers/validateSearch.js';

  export default {
    name: 'searchComp',
    data() {
      return {
        placeHolder: 'YYYY-MM-DD',
        userInput: this.userInput,
        error: false
      }
    },
    methods: {
      searchEntered(input) {
        if (validateSearch(input)) { // validateSearch returns true if input matches regExp \d\d\d\d/-\d\d/-\d\d
          this.error = false;
          console.log(`userInput == ${input} | from searchComp searchEntered()`);
          this.$router.push({ name: 'searchView', params: { urlDate: input } }); 
          this.userInput = '';
          return;
        } else {
          this.error = true;
          this.userInput = '';
          return;
        }
      }
    }
  }
</script>