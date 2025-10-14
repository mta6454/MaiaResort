<template>
  <div class="app" :style="appStyle">
    <img :src="bg" alt="" aria-hidden="true" class="bg-sizer" />

    <div class="overlay">
      <Header />
      <main class="pt-32">
        <IntroSection />
        <MapSection />
        <BenefitSection />
        <PrivilegeSection />
        <ProductSection />
      </main>
      <BottomMenu />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import bg from '~/assets/images/bg.jpg'
import IntroSection from '~/components/sections/IntroSection.vue'
import MapSection from '~/components/sections/MapSection.vue'
import BenefitSection from '~/components/sections/BenefitSection.vue'
import PrivilegeSection from '~/components/sections/PrivilegeSection.vue'
import ProductSection from '~/components/sections/ProductSection.vue'
import BottomMenu from '~/components/commons/BottomMenu.vue'
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

.pt-16 {
  padding-top: 4rem;
}
.pt-32  {
  padding-top: 8rem;
}
.mt-16 {
  margin-top: 4rem;
}
.overlay:has(.menu-overlay.active) .bottom-menu {
  display: none;
}
</style>
