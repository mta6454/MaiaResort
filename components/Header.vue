<template>
  <header class="app_header" ref="headerContainerRef">
    <div class="app_header_inner container">
      <div class="app_header_inner_left">
        <div class="btn_header pc-only">
          <a href="/" class="">
            <img :src="phoneIcon" alt="Phone" class="phone"/>
          </a>
        </div>
        <div class="btn_header pc-only">
          <a target="_blank" href="https://vr360.maiaresorthotram.com/">
            <img :src="View360" alt="View360" class="view360"/>
          </a>  
        </div>
      </div>
      <div class="header_logo_wrapper" ref="logoWrapperRef">
        <a href="/" class="">
          <img :src="logo" alt="Logo" class="header_logo"/>
        </a>
      </div>

      <div class="header_right flex justify-content-end align-items-center">
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
const logoWrapperRef = ref<HTMLElement | null>(null);

// This function now targets the logo wrapper specifically.
const handleScroll = () => {
  const logoWrapper = logoWrapperRef.value;
  if (!logoWrapper) return;

  // If the user is NOT at the very top of the page, hide the logo.
  if (window.scrollY > 0) {
    logoWrapper.classList.add('logo-scrolled');
  } else {
    // Otherwise, if they are at the top (scrollY is 0), show it.
    logoWrapper.classList.remove('logo-scrolled');
  }
};

// Use onMounted to ensure this code only runs on the client-side.
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Clean up the event listener when the component is removed.
onUnmounted(() => {
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
  background: linear-gradient(to bottom, rgba(16, 153, 135, 0.4), rgba(1, 66, 97, 0.45), rgba(1, 66, 97, 0.4));
  /* The transition is no longer needed on the main header */
}

/* This class is no longer used */
/* .header-hidden {
  transform: translateY(-100%);
} */

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

.header_logo_wrapper {
  /* Add a transition for a smooth fade/scale effect */
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}


/* Animate the logo width when the wrapper gains/removes the scrolled class */
.header_logo_wrapper.logo-scrolled .header_logo,
.header_logo_wrapper.logo_scrolled .header_logo {
  width: 4.5rem;
  transition: width 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 3.5rem;
  }
}

.header_logo {
  width: 7rem;
  transition: width 0.3s ease-in-out;
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
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .app_header_inner_left {
    width: 25%;
  }

  .header_logo {
    width: 4.5rem;
    height: auto;
  }

  .header_logo_wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .header_right {
    width: 25%;
  }

  .btn_header {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem !important;
  }

  .icon_menu {
    width: 2rem;
    height: 2rem;
  }

  .pc-only {
    display: none;
  }
}

@media (max-width: 480px) {
  .header_logo {
    width: 4rem;
  }

  .btn_header {
    width: 1.75rem;
    height: 1.75rem;
  }

  .icon_menu {
    width: 1.75rem;
    height: 1.75rem;
  }
}
</style>

