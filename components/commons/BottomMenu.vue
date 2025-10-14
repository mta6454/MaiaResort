<template>
  <div class="bottom-menu w-40 text-size-normal">
    <div class="row">
      <div class="col-md-3 right-divide">
        <div class="bottom-menu-item flex items-center justify-center" @click="go('#textIntro')">
          TÌM HIỂU THÊM
        </div>
      </div>
      <div class="col-md-3 right-divide">
        <div class="bottom-menu-item flex items-center justify-center" @click="go('#map')">
          XEM BẢN ĐỒ
        </div>
      </div>
      <div class="col-md-3 right-divide">
        <div class="bottom-menu-item flex items-center justify-center" @click="go('#register')">
          TƯ VẤN NGAY
        </div>
      </div>
      <div class="col-md-3">
        <div class="bottom-menu-item flex items-center justify-center">
          <a target="_blank" href="https://vr360.maiaresorthotram.com/">360° DỰ ÁN</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bottom-menu {
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, #c9a979 0%, #ecd4af 50%, #b79b70 100%);
  border-radius: 0.75rem;
  padding: 0.5rem;
  margin: 0 auto;
  z-index: 100;
  font-weight: 700;
  opacity: 0.5;
  transition: opacity 0.4s ease-in-out;
}

.bottom-menu:hover {
  opacity: 1;
}

.right-divide {
  border-right: 1px solid #000;
}

.w-40 {
  width: 40%;
}

.bottom-menu-item, .bottom-menu-item a {
  font-size: 1rem;
  text-shadow: none;
  transition: color 0.5s ease-in-out, text-shadow 0.5s ease-in-out;
  cursor: pointer;
}

.bottom-menu-item:hover, .bottom-menu-item:hover a {
  color: #ffffff;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 255, 255, 0.6);
}

a {
  text-decoration: none;
  color: #000000;
}
</style>
<script setup lang="ts">
function go( hash : string ) {
  // close()
  if (hash && hash.startsWith('#')) {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }
}
</script>