<script setup>  // <script setup> is recommended syntax for SFC's. Provides several advantages over <script>
import HomeImage from './components/homeImage.vue';
</script>

<template>
  <div class="grid grid-cols-5 h-screen w-screen" id="wrapper">
    <HomeImage class="col-start-2 col-span-3" />
  </div>
</template>

<style>
</style>
