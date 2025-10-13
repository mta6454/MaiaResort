<template>
  <transition name="fade">
    <aside
        v-if="open"
        class="menu-overlay"
        tabindex="0"
        @keydown.esc="close()"
        @click.self="close()"
    >
      <!-- Nút đóng -->
      <button class="btn-close" type="button" @click="close" aria-label="Đóng menu">
        <span></span><span></span>
      </button>

      <div class="menu-wrap" @click.stop>
        <!-- Cột trái -->
        <section class="menu-left text-center">
          <img class="brand" :src="logo" alt="MAIA" v-if="logo"/>
          <div class="brand-text text-center">
            <h3>Maia Sales Gallery</h3>
            <p>23 Trần Bạch Đằng, P. An Khánh, TP.HCM</p>
            <a class="hotline" href="tel:0911804988">091 180 49 88</a>
            <a class="email" href="mailto:hotrammaia@gmail.com">hotrammaia@gmail.com</a>
            <p class="address">Xã Hồ Tràm, Thành phố Hồ Chí Minh</p>

            <div class="socials">
              <a href="#" aria-label="Call">
                <img :src="phoneIcon" alt="Phone" class="phone" />
              </a>
              <a href="#" aria-label="Facebook">
                <img :src="facebookIcon" alt="Facebook" class="facebook" />
              </a>
              <a href="https://vr360.maiaresorthotram.com/" aria-label="360"><img :src="View360" alt="View360" class="view360" width="24px" height="24px"/></a>
            </div>
          </div>
        </section>

        <!-- Cột phải: ITEMS FIX CỨNG -->
        <nav class="menu-right">
          <ol>
            <li>
              <button class="menu-item" @click="go('#gioi-thieu')">
                <span class="idx">01</span>
                <span class="label">Giới thiệu</span>
                <span class="rule"></span>
              </button>
            </li>
            <li>
              <button class="menu-item" @click="go('#vi-tri')">
                <span class="idx">02</span>
                <span class="label">Vị trí</span>
                <span class="rule"></span>
              </button>
            </li>
            <li>
              <button class="menu-item" @click="go('#tien-ich')">
                <span class="idx">03</span>
                <span class="label">Tiện ích</span>
                <span class="rule"></span>
              </button>
            </li>
            <li>
              <button class="menu-item" @click="go('#dac-quyen')">
                <span class="idx">04</span>
                <span class="label">Đặc Quyền Maia Resort Ho Tram</span>
                <span class="rule"></span>
              </button>
            </li>
            <li>
              <button class="menu-item" @click="go('#san-pham')">
                <span class="idx">05</span>
                <span class="label">Sản phẩm</span>
                <span class="rule"></span>
              </button>
            </li>
            <li>
              <button class="menu-item" @click="go('#dang-ky')">
                <span class="idx">06</span>
                <span class="label">Đăng ký tư vấn</span>
                <span class="rule"></span>
              </button>
            </li>
          </ol>
        </nav>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import {watch, onBeforeUnmount} from 'vue'
import View360 from "assets/images/View360.gif";
import logo from '~/assets/images/logo-white.png'
import phoneIcon from '~/assets/images/phone.svg'
import facebookIcon from '~/assets/images/facebook.svg'
const props = defineProps({
  open: {type: Boolean, default: false},   // v-model:open
  logo: {type: String, default: ''}
})
const emit = defineEmits(['update:open'])

function close() {
  emit('update:open', false)
  document.body.style.overflow = ''
}

function go(hash) {
  close()
  if (hash && hash.startsWith('#')) {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }
}

/* Khóa scroll khi mở */
watch(() => props.open, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* overlay */
.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: stretch;
  background: linear-gradient(170deg, #19a89a 0%, #0a3f54 70%, #08384a 100%);
  color: #fff;
  outline: none;
}

/* đảm bảo nút X luôn bấm được */
.btn-close {
  position: absolute;
  top: 24px;
  right: 28px;
  z-index: 2;
  width: 36px;
  height: 36px;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.btn-close span {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}

.btn-close span:first-child {
  transform: translateY(-50%) rotate(45deg);
}

.btn-close span:last-child {
  transform: translateY(-50%) rotate(-45deg);
}

.menu-wrap {
  position: relative;
  z-index: 1; /* tránh che nút X */
  display: grid;
  grid-template-columns:1.1fr 1.4fr;
  gap: 4rem;
  width: min(1200px, 92vw);
  margin: clamp(24px, 5vh, 56px) auto;
  align-items: start;
}

.menu-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.brand {
  width: 140px;
  height: auto;
}

.brand-text h3 {
  font-size: 26px;
  margin: 12px 0 4px;
  font-weight: 700;
}

.brand-text p {
  margin: 2px 0;
  opacity: .9;
}

.hotline {
  display: block;
  margin: 14px 0 4px;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}

.email {
  color: #fff;
  text-decoration: none;
  opacity: .95;
}

.address {
  opacity: .85;
  margin-top: 6px;
}

.socials {
  display: flex;
  gap: 10px;
  margin-top: 18px;
  justify-content: center;
}

.socials a {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 1.5px solid rgba(255, 255, 255, .6);
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  
}
.socials a img {
  width: 60%;
  height: 60%;
  object-fit: contain;
  margin: auto;

}
.menu-right ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  width: 100%;
  display: grid;
  grid-template-columns:64px 1fr;
  gap: 12px;
  padding: 14px 0;
  background: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  text-align: left;
}

.menu-item:hover .label {
  transform: translateX(2px);
  opacity: 1;
}

.idx {
  font-weight: 500;
  color: #6ce3d1;
  font-size: 30px;
  padding-bottom: 5px;
}

.label {
  font-size: clamp(16px, 2.2vw, 26px);
  font-weight: 500;
  opacity: .95;
  transition: .2s;
}

.rule {
  grid-column: 2/-1;
  justify-self: start;
  height: 1px;
  width: 72%;
  background: linear-gradient(to right, rgba(255, 255, 255, .6), rgba(255, 255, 255, .2));
  margin-top: 12px;
  opacity: .6;
}

@media (max-width: 960px) {
  .menu-wrap {
    grid-template-columns:1fr;
    gap: 32px;
  }

  .rule {
    width: 100%;
  }
}
</style>
