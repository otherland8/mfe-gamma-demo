<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="gamma-flex gamma-flex-col gamma-gap-4 gamma-p-4 gamma-text-lg">
    <div>This is gamma module</div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
