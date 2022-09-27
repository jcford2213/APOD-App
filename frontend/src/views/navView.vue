<template>
  <ul class="flex flex-row gap-5 w-full justify-end items-center">
    <router-link :to="{ name: 'galleryView' }" class="font-bold text:base text-nasaBlue">Gallery</router-link>
    <router-link :to="{ name: 'aboutView' }" class="font-bold text:base text-nasaBlue">About</router-link>
  </ul>
</template>
<script>
export default {
  name: 'navView'
}
</script>