<template>
  <header class="app_header" ref="headerContainerRef">
    <div class="app_header_inner container">
      <div class="app_header_inner_left">
        <div class="btn_header">
          <a href="/" class="">
            <img :src="phoneIcon" alt="Phone" class="phone"/>
          </a>
        </div>
        <div class="btn_header">
          <a target="_blank" href="https://vr360.maiaresorthotram.com/">
            <img :src="View360" alt="View360" class="view360"/>
          </a>
        </div>
      </div>
      <div class="header_logo_wrapper">
        <a href="/" class="">
          <img :src="logo" alt="Logo" class="header_logo"/>
        </a>
      </div>

      <div class="header_right flex justify-content-end">
        <!-- icon menu -->
        <div class="icon_menu" @click.prevent="showMenu = true">
          <img :src="menuIcon" alt="Menu" class="menu"/>
        </div>
      </div>
    </div>
    <MenuOverlay
        v-model:open="showMenu"
    />
  </header>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import logo from '~/assets/images/Logo.svg'
import View360 from '~/assets/images/View360.gif'
import phoneIcon from '~/assets/images/phone.svg'
import menuIcon from '~/assets/images/menu.svg'
import MenuOverlay from "~/components/sections/MenuOverlay.vue";

const showMenu = ref(false);

const headerContainerRef = ref<HTMLElement | null>(null);

// Declare lastScrollY here, but initialize it inside onMounted.
let lastScrollY: number;

const handleScroll = () => {
  const header = headerContainerRef.value;
  if (!header) return;

  // It's safe to access window.scrollY here because the event listener is only added on the client.
  if (lastScrollY < window.scrollY && window.scrollY > 0) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }

  lastScrollY = window.scrollY;
};

// Use onMounted to ensure this code only runs on the client-side (in the browser).
onMounted(() => {
  // Initialize lastScrollY with the browser's current scroll position.
  lastScrollY = window.scrollY;
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // Clean up the event listener to prevent memory leaks.
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.app_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: auto !important;
  padding-top: 0.7rem !important;
  padding-bottom: 0.7rem !important;
  transition: transform 0.3s ease-in-out;
}

.header-hidden {
  transform: translateY(-100%); /* Moves the header completely out of the viewport */
}

.app_header_inner {
  display: flex;
  align-items: top;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
}

.app_header_inner_left {
  width: 20%;
  display: flex;
  align-items: center;
}

.header_right {
  width: 20%;
}

.btn_header {
  width: 2.34375rem;
  height: 2.34375rem;
  margin-right: 1.146rem !important;
}

.btn_header a {
  padding: 0 !important;
  width: 100%;
  height: 100%;
}

.btn_header a img {
  height: 100%;
  object-fit: contain;
}

.header_logo {
  width: 7rem;
  filter: brightness(0) invert(1);
  @media (max-width: 1440px) {
    width: 5.5rem;
  }
}

.icon_menu {
  cursor: pointer;
  width: 2.34375rem;
  height: 2.34375rem;
}

.icon_menu img {
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .app_header {
  }
  .header_logo {
    height: 60%;
  }
  .header_right {
    width: 15%;
  }
}
</style>
