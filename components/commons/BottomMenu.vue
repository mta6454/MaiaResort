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
  background-color: #ECBD6A;
  border-radius: 0.75rem;
  padding: 1rem;
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

/* Mobile Responsive Styles */
@media (max-width: 992px) {
  .w-40 {
    width: 60%;
  }
}

@media (max-width: 768px) {
  .bottom-menu {
    bottom: 1rem;
    padding: 0.75rem 0.5rem;
    opacity: 0.9;
  }

  .w-40 {
    width: 90%;
  }

  .bottom-menu-item {
    font-size: 0.75rem;
    padding: 0.25rem;
  }

  .right-divide {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }
}

@media (max-width: 480px) {
  .bottom-menu {
    bottom: 0.5rem;
    padding: 0.5rem 0.25rem;
  }

  .w-40 {
    width: 95%;
  }

  .bottom-menu-item {
    font-size: 0.65rem;
    padding: 0.2rem;
  }
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