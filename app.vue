<template>
  <div class="app" :style="appStyle">
    <img :src="bg" alt="" aria-hidden="true" class="bg-sizer" />

    <div class="overlay">
      <Header />
      <main class="pt-32">
        <IntroSection />
      </main>
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import bg from '~/assets/images/bg.jpg'
import IntroSection from '~/components/sections/IntroSection.vue'
import '~/assets/css/base.css'
const appStyle = {
  backgroundImage: `url(${bg})`
}
</script>
<style>
.app {
  background-size: 100vw auto;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100vw;
  position: relative;
}

.bg-sizer {
  display: block;
  width: 100vw;
  height: auto;
  visibility: hidden;
  pointer-events: none;
  z-index: 1;
}


.overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
}

body {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  margin: 0;
  overflow-x: hidden; 
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.pt-16 {
  padding-top: 4rem;
}
.pt-32  {
  padding-top: 8rem;
}
.mt-16 {
  margin-top: 4rem;
}
</style>
