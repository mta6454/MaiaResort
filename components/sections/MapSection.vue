<template>
  <section>
    <div class="container">
      <div class="text-center font-rosellinda text-3xl third-cl">
        Và hơn thế.
      </div>
      <div class="text-center text-white main-text">
        Maia Resort Ho Tram còn tọa lạc ngay trung tâm thủ phủ nghỉ dưỡng Hồ Tràm,<br>kết nối trực tiếp đến TP. Hồ Chí
        Minh và sân bay quốc tế Long Thành.
      </div>
      <div class="map-wrapper flex flex-row">

        <div class="map">
          <img src="/assets/images/map.svg" alt="Map" />
        </div>
        <!-- Sửa lại pin ở đây -->
        <div class="pin_effect">
          <div class="box_img">
            <img src="https://maiaresorthotram.com/wp-content/themes/thuythu-child/assets/images/home/pin_logo.svg"
              alt="pin_logo">
          </div>
        </div>
      </div>
    </div>
    <SectionDevide />
    
  </section>
</template>

<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
</script>
<style>
.map-wrapper {
  position: relative;
}
.map {
  width: 100%;
  height: 100%;
}
.pin_effect {
  position: absolute;
  top: 42.4%;
  right: 28.8%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
}
</style>