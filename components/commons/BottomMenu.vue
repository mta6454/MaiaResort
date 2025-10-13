<template>
  <div class="bottom-menu w-40 text-size-normal">
    <div class="row">
      <div class="col-md-3 right-divide">
        <div class="bottom-menu-item flex items-center justify-center">
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
  bottom: 8rem;
  left: 0;
  right: 0;
  background-color: #ECBD6A;
  border-radius: 0.75rem;
  padding: 1rem;
  margin: 0 auto;
  z-index: 100;
  font-weight: 700;
}

.right-divide {
  border-right: 1px solid #000;
}

.w-40 {
  width: 40%;
}

.bottom-menu-item {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #000000;
}
</style>
<script setup lang="ts">
function go(hash) {
  close()
  if (hash && hash.startsWith('#')) {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }
}
</script>