<template>
  <div id="mediaWrapper">
      <img id="podImage" v-if="isImage" :src="podHDURL" alt="Picture of the Day" class="w-full h-auto indent-[100%] whitespace-nowrap overflow-hidden desktop:w-auto desktop:max-h-[820px]"/>
      <iframe id="podVideo" v-if="!isImage" :src="podURL" class="w-full aspect-video indent-[100%] whitespace-nowrap overflow-hidden" ></iframe>
  </div>
</template>
<script>
export default {
  el: '#mediaWrapper',
  name: 'mediaCoomp',
  props: {
    isImage: Boolean,
    podURL: String,
    podHDURL: String
  },
  data() {
    return {
      imageLoading: true
    }
  },
  watch: {
    podURL() {
      this.imageLoading = false;
    }
  }
}
</script>