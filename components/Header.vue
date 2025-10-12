<template>
  <header class="app_header">
    <div class="app_header_inner container">
      <div class="app_header_inner_left">
        <div class="btn_header">
          <a href="/" class="">
            <img :src="phoneIcon" alt="Phone" class="phone" />
          </a>
        </div>
        <div class="btn_header">
          <a href="https://vr360.maiaresorthotram.com/">
            <img :src="View360" alt="View360" class="view360" />
          </a>
        </div>
      </div>
      <div class="header_logo_wrapper">
        <a href="/" class="">
          <img :src="logo" alt="Logo" class="header_logo" />
        </a>
      </div>

      <div class="header_right">
        <!-- icon menu -->
        <div class="icon_menu" @click="showMenu = true">
          <img :src="menuIcon" alt="Menu" class="menu" />
          <MenuOverlay
              v-model:open="showMenu"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '~/assets/images/Logo.svg'
import View360 from '~/assets/images/View360.gif'
import phoneIcon from '~/assets/images/phone.svg'
import menuIcon from '~/assets/images/menu.svg'
import MenuOverlay from "~/components/sections/MenuOverlay.vue";

const showMenu = ref(false)
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
  transition: .4s all;
}

.app_header_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
}

.app_header_inner_left {
  display: flex;
  align-items: center;
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
  width: 5rem !important;
  filter: brightness(0) invert(1);
}
.icon_menu {
  width: 2.34375rem;
  height: 2.34375rem;
}
.icon_menu img {
  height: 100%;
  object-fit: contain;
}
</style>
