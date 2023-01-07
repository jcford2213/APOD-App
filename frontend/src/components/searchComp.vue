<template>
  <div id=searchWrapper>
    <div id="searchBar" class="flex flex-row items-center justify-between gap-[2px] h-fit w-fit px-1.5 border-2 rounded-md border-nasaBlue">
        <input id="userInput" v-model.trim.lazy="userInput" autocomplete="off" type="text" @keyup.enter="searchEntered(userInput)" :placeholder="placeHolder" class="min-w-[4rem] max-w-[10rem] focus:outline-none focus:value-none bg-clip-text placeholder:text-nasaBlue "/>
        <button @click="searchEntered(userInput)"><i class="fas fa-search text-nasaBlue"></i></button>
    </div>
  </div>
</template>

<script setup>
  import getAllDates from '../controllers/getAllDates'; // returns an array of date objects ranging from 06/16/1996 - today
  import { useRouter } from 'vue-router'
  const router = useRouter();

  const placeHolder = 'MM-DD-YYYY';
  let userInput = '';
  let allDates = []
  getAllDates().forEach((date) => {
    allDates.push(date.string)
  })

  const searchEntered = input => {
    if (allDates.includes(input)){
      console.log(`userInput == ${input} | from searchComp searchEntered()`);
      router.push(input)
      return;
    } else {
      alert(`Search dates between ${allDates[allDates.length - 1]} and ${allDates[0]}\nFormat Search: MM-DD-YYYY`);
      return;
    }
  }

</script>