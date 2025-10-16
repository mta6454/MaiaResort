<template>
  <div>

    <Head>
      <Meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
    </Head>
    <div class="app" :style="appStyle" ref="appEl">
      <img :src="bg" alt="" aria-hidden="true" class="bg-sizer" ref="bgSizerEl" />

      <div class="overlay" ref="overlayEl">
        <Header />
        <main class="pt-32">
          <IntroSection />
          <MapSection />
          <BenefitSection />
          <PrivilegeSection />
          <ProductSection />
        </main>
        <Footer class="footer-mobile" />
        <BottomMenu />
      </div>
      <Footer class="footer-desktop" />
    </div>
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
import { onMounted, onBeforeUnmount, ref } from 'vue'

const appStyle = {
  backgroundImage: `url(${bg})`
}

const appEl = ref<HTMLElement | null>(null)
const overlayEl = ref<HTMLElement | null>(null)
const bgSizerEl = ref<HTMLImageElement | null>(null)

function onResize() {
  if (!appEl.value || !overlayEl.value || !bgSizerEl.value) return
  const overlayHeight = overlayEl.value.scrollHeight
  appEl.value.style.minHeight = `${overlayHeight}px`
}

onMounted(() => {
  if (bgSizerEl.value) {
    if (!bgSizerEl.value.complete) {
      bgSizerEl.value.addEventListener('load', onResize, { once: true })
    }
  }
  onResize()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

</script>
<style>
.app {
  background-size: 100vw auto;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100vw;
  position: relative;
}

.footer-mobile {
  display: none;
}

.footer-desktop {
  display: block;
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
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

.pt-16 {
  padding-top: 4rem;
}

.pt-32 {
  padding-top: 8rem;
}

.overlay:has(.menu-overlay.active) .bottom-menu {
  display: none;
}

html:has(.menu-overlay.active) {
  overflow: hidden;
}

/* Mobile responsive improvements */
@media (max-width: 768px) {
  .footer-mobile {
    display: block;
  }

  .footer-desktop {
    display: none;
  }

  .app {
    overflow-x: hidden;
    background-size: cover;
    background-position: center top;
  }


  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 480px) {
  .app {
    background-size: auto 100%;
    min-height: 100vh;
  }
}
</style>
