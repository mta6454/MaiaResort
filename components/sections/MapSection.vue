<template>
  <section id="map">
    <div class="container">
      <div class="text-center font-rosellinda text-3xl third-cl mt-8">
        Và hơn thế
      </div>
      <div class="text-center text-white main-text mt-14 text-xl">
        Maia Resort Ho Tram còn tọa lạc ngay trung tâm thủ phủ nghỉ dưỡng Hồ Tràm,<br>kết nối trực tiếp đến TP. Hồ Chí
        Minh và sân bay quốc tế Long Thành.
      </div>
      <div class="map-wrapper flex flex-row align-items-center mt-16">
        <div class="schedule-wrapper col-md-2">
          <div class="schedule-item">
            <div class="schedule-item_dot"></div>
            <div class="schedule-item-content">
              <img src="/assets/images/logo-gold.png"
                alt="pin_logo">
            </div>
          </div>
          <div class="schedule-item">
            <div class="schedule-item_dot"></div>
            <div class="schedule-item-content">
              <div><span class="text-semibold text-3xl sub-cl">30 </span> <span class="font-rosellinda text-white text-xl">Phút</span></div>
              <div class="text-white text-size-normal">
                Là thời gian di chuyển từ đây tới sân bay quốc tế Long Thành
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="schedule-item_dot"></div>
            <div class="schedule-item-content">
              <div><span class="text-semibold text-3xl sub-cl">90 </span> <span class="font-rosellinda text-white text-xl">Phút</span></div>
              <div class="text-white text-size-normal">
                Là thời gian di chuyển giữa Maia Resort Ho Tram và Siêu Đô thị Hồ Chí Minh
              </div>
            </div>
          </div>
        </div>
        <div class="map col-md-8">
          <img src="/assets/images/map.png" alt="Map" />
        </div>
      </div>
    </div>
    <SectionDevide />
  </section>
</template>

<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
</script>
<style scoped>
.map-wrapper {
  position: relative;
}

.map {
  width: 50%;
  height: 100%;
  object-fit: contain;
}

.container {
  /* TODO: Update */
  margin-top: 0px;
  max-width: 1600px;
  padding: 0;
  @media (max-width: 1440px) {
    margin-top: 100px;
  }
  margin-bottom: 20px;
}

.main-text{
  margin-top: 2rem;
}

.schedule-item {
  align-items: center;
  display: flex;
  position: relative;
  max-width: 190px;
}

.schedule-item-content img {
  width: 3.5rem;
  height: 3.5rem;
}

.schedule-item_dot {
  min-width: 1rem;
  height: 1rem;
  background-color: #ECBD6A;
  border-radius: 99px;
  z-index: 1;
}
.schedule-item:not(:first-child):not(:last-child) {
  padding: 6.5rem 0;
}
.schedule-item-content {
  margin-left: 1rem;
}
.schedule-item:first-child::before {
  content: '';
  position: absolute;
  top: 1.5rem;
  left: calc(0.5rem - 1px);
  height: 50%;
  border-left: 2px dashed #fff;
}
.schedule-item:last-child::before {
  content: '';
  position: absolute;
  bottom: calc(50% - 2px);
  left: calc(0.5rem - 1px);
  height: 50%;
  border-left: 2px dashed #fff;
}
.schedule-item::before {
  content: '';
  position: absolute;
  left: calc(0.5rem - 1px);
  height: 100%;
  border-left: 2px dashed #fff;
}
</style>