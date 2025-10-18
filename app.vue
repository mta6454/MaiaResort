<template>
  <div>

    <Head>
      <Meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
    </Head>
    <div class="app" ref="appEl" :style="appStyle">
      <div class="overlay">
        <Header />
        <main class="pt-32"  ref="overlayEl">
          <IntroSection @openModalForm="openModalForm" />
          <MapSection />
          <BenefitSection />
          <PrivilegeSection @openModalForm="openModalForm"/>
          <ProductSection  />
        </main>
        <Footer class="footer-mobile" />
        <BottomMenu />
        <BottomRightMenu class="mobile-only" />
      </div>
      <Footer class="footer-desktop" />
    </div>
    <ModalForm v-model:open="showModalForm" />
  </div>
</template>

<script setup lang="ts">
import bg from '~/assets/images/bg_old.jpg'
import IntroSection from '~/components/sections/IntroSection.vue'
import MapSection from '~/components/sections/MapSection.vue'
import BenefitSection from '~/components/sections/BenefitSection.vue'
import PrivilegeSection from '~/components/sections/PrivilegeSection.vue'
import ProductSection from '~/components/sections/ProductSection.vue'
import BottomMenu from '~/components/commons/BottomMenu.vue'
import BottomRightMenu from '~/components/commons/BottomRightMenu.vue'
import ModalForm from '~/components/commons/ModalForm.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
const showModalForm = ref(false)

const openModalForm = () => {
  showModalForm.value = true
}

const appStyle = {
  backgroundImage: `url(${bg})`
}

const appEl = ref<HTMLElement | null>(null)
const overlayEl = ref<HTMLElement | null>(null)
const bgSizerEl = ref<HTMLImageElement | null>(null)


</script>
<style>
.app {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100vw;
  position: relative;
  overflow-y: visible;
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
  position: relative;
  pointer-events: none;
  z-index: 1;
  object-fit: cover;
}

.overlay {
  position: relative;
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

html:has(.menu-overlay.active, .modal-form.active) {
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
  .bg-sizer {
    max-width: 100%;
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
