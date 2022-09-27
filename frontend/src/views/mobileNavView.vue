<template>
  <div id="wrapper">
    <ul id="nav" class="h-fit w-fit text-end space-y-[10px]">
      <li><router-link :to="{ name: 'homeView' }" @click="this.$emit('newPageLoading')" class="font-bold text:base text-nasaWhite">Home</router-link></li>
      <li><router-link :to="{ name: 'galleryView' }" @click="this.$emit('newPageLoading')" class="font-bold text:base text-nasaWhite">Gallery</router-link></li>
      <li><router-link :to="{ name: 'aboutView' }" @click="this.$emit('newPageLoading')" class="font-bold text:base text-nasaWhite">About</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'mobileNavView'
}
</script>