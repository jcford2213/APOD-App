<template>

  <div id="searchBar" class="flex fles-row items-center justify-between gap-[2px] w-fit px-1.5 border-2 rounded-md border-nasaBlue">
      <input id="userInput" v-model.trim.lazy="userInput" autocomplete="off" type="text" @keyup.enter="searchEntered(userInput)" :placeholder="placeHolder" class="w-[7rem] focus:outline-none focus:value-none bg-clip-text placeholder:text-nasaBlue "/>
      <button @click="searchEntered(userInput)"><i class="fas fa-search text-nasaBlue"></i></button>
  </div>

</template>

<script>
  
  export default {
    name: 'searchComp',
    data() {
      return {
        placeHolder: 'YYYY-MM-DD',
        userInput: this.userInput
      }
    },
    methods: {
      clearInput() {
          this.userInput = "";
        },
      searchEntered(input) {
        if (typeof input != 'undefined') { // improve this input validation
          console.log(`userInput == ${input} | from searchComp searchEntered()`);
          this.$router.push({ name: 'searchView', params: { urlDate: input } }); 
          this.clearInput();
          return;
        } else {
          console.log('Undefined input | from searchComp searchEntered()');
          this.clearInput();
          return;
        }
      }
    }
  }
</script>