<template>
  <section id="map" class="section-map">
    <div class="container section-map-title">
      <div class="section-map-title-main text-center font-rosellinda text-3xl third-cl mt-8">
        Và hơn thế
      </div>
      <div class="text-center text-white main-text text-xl text-des">
        Maia Resort Ho Tram còn tọa lạc ngay trung tâm <br class="br-mobile-only"> thủ phủ nghỉ dưỡng Hồ Tràm,<br>kết
        nối trực tiếp đến TP. Hồ Chí Minh và sân bay quốc tế Long Thành.
      </div>
    </div>
    <div class="map-wrapper flex flex-row align-items-center mt-16">
      <div class="schedule-wrapper col-md-2">
        <div class="schedule-item">
          <div class="schedule-item_dot"></div>
          <div class="schedule-item-content">
            <img src="/assets/images/logo-gold.png" alt="pin_logo">
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-item_dot"></div>
          <div class="schedule-item-content">
            <div><span class="text-semibold text-3xl sub-cl">30 </span> <span
                class="font-rosellinda text-white text-xl">Phút</span></div>
            <div class="text-white text-size-normal">
              Là thời gian di chuyển từ đây tới sân bay quốc tế Long Thành
            </div>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-item_dot"></div>
          <div class="schedule-item-content">
            <div><span class="text-semibold text-3xl sub-cl">90 </span> <span
                class="font-rosellinda text-white text-xl">Phút</span></div>
            <div class="text-white text-size-normal">
              Là thời gian di chuyển giữa Maia Resort Ho Tram và Siêu Đô thị Hồ Chí Minh
            </div>
          </div>
        </div>
      </div>
      <div class="map col-md-8">
        <img src="/assets/images/map.png" alt="Map" loading="lazy" class="map-img" />
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
  margin-top: 4rem;

  @media (max-width: 1521px) {
    margin-top: 50px;
    height: 600px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 1440px) {
    margin-top: 50px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1400px) {
    padding-left: calc((100% - 1320px) / 2);
  }
  @media(min-width: 1200px) and (max-width: 1399px) {
    padding-left: calc((100% - 1140px) / 2);
  }
}

.map {
  width: 1350px;
  height: 100%;

  @media (max-width: 1521px) {
    width: auto;
    margin-left: 60px;
  }

  @media (max-width: 1440px) {
    width: auto;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
}

.map-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;

  @media (max-width: 1521px) {
    width: auto;
    max-height: 100%;
  }

  @media (max-width: 1440px) {
    width: auto;
    max-height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
}

.section-map-title {
  margin-top: 0px;
  padding: 0;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.section-map {
  display: flex;
  flex-direction: column;
  @media (max-width: 1440px) {
    margin-top: 80px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 10px;
  }
}

.section-map-title-main {
  @media (max-width: 1521px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1440px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
  }
}

@media screen and (min-width: 769px) {
  .br-mobile-only {
    display: none;
  }
}

.main-text {
  margin-top: 2rem;

  @media (max-width: 1521px) {
    margin-top: 15px;
  }

  @media (max-width: 1440px) {
    margin-top: 10px;
  }
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

@media (max-width: 768px) {
  .schedule-wrapper {
    padding: 0 1rem;
  }

  .schedule-item-content img {
    width: 2.5rem;
    height: 2.5rem;
  }

  .schedule-item:not(:first-child):not(:last-child) {
    padding: 3rem 0;
  }

  .schedule-item-content {
    font-size: 0.875rem;
  }

  .section-map-title-main {
    font-size: 1.25rem;
  }

  .text-des {
    font-size: 0.875rem;
    padding: 0 1rem;
    word-break: break-word;
  }

  .map-wrapper {
    margin-top: 2rem;
    height: auto !important;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 1280px) {
  .map-wrapper {
    flex-direction: column !important;
    justify-content: center;
    height: auto !important;
    flex-wrap: wrap;
  }

  .schedule-wrapper {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .schedule-item-content {
    width: 10rem;
  }

  .map {
    width: 100%;
  }

  .map img {
    width: 100%;
    object-fit: contain;
  }
}
</style>