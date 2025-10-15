<template>
  <section id="utilities" class="section-benefit mt-8">
    <div class="container section-benefit-first text-white text-center pb-8">
      <div class="slide-title">
        <div class="slide-title-text">
          Hãy tưởng tượng một buổi sáng thức dậy, mở cửa ban công, hít căng lồng ngực làn gió mặn của <br> biển và hương
          rừng
          mát lành. Không còi xe, không khối bụi - chỉ còn sự tĩnh tại và<br> năng lượng mói mẻ cho một ngày trọn vẹn.
        </div>
        <div class="slide-title-sub-title text-2xl text-semibold">
          Ở Maia Resort Ho Tram,<br> bình yên trở thành thói quen hàng ngày.
        </div>
      </div>
      <div class="slide-wrapper py-8">
        <UtilitiesCarousel/>
      </div>
      <div class="after-slider font-rosellinda text-navy">
        Và không chỉ dừng lại ở sự tĩnh tại.
      </div>
      <div class="text-black" style="color: #365967; margin-bottom: 10px;">
        Maia Resort Ho Tram còn nằm trong lòng tổ hợp tỷ đô The Grand Ho Tram - trung tâm nghỉ dưỡng & giải trí hàng đầu
        Việt Nam.<br>
        Tại đây, quý khách được tận hưởng những đặc quyền hiếm có
      </div>
      <div class="text-black text-bold">
        sân golf đằng cấp thế giới, sân bay chuyên dụng cho khách cao cấp, cùng tổ hợp mua sắm và giải trí hiện đại.
      </div>
    </div>
    <SectionDevide/>
    <div class="container section-benefit-second text-center pt-8">
      <div class="section-benefit-second-title text-navy text-2xl text-semibold">
        Một điểm đến, triệu trải nghiệm
      </div>
      <p>
        Không gian nghỉ dưỡng nơi thiên nhiên nguyên sơ giao hòa cùng tiện ích thượng lưu,<br>
        kiến tạo trải nghiệm trọn vẹn chưa từng có.
      </p>
    </div>
    <div class="hightlight-wrapper">
      <div class="benefit-wrapper container d-flex justify-content-between">
        <div class="benefit-item benefit-item-1 d-flex flex-column justify-center align-items-center">
          <img src="/assets/images/benefit/benefit-icon-1.png" alt="benefit-1" loading="lazy"/>
          <p class="text-4xl md:text-5xl text-light mt-2 mb-0 lh-1">164<span
              class="text-2xl md:text-3xl font-normal text-light">ha</span></p>
          <p class="text-center text-sm font-light text-light my-0">Tổng diện tích <br/> khu tổ hợp tỷ đô</p>
        </div>

        <div class="benefit-item benefit-item-2 d-flex flex-column justify-center align-items-center">
          <img src="/assets/images/benefit/benefit-icon-2.png" alt="benefit-2" loading="lazy"/>
          <p class="text-4xl md:text-5xl text-light mt-2 mb-0 lh-1">86<span
              class="text-2xl md:text-3xl font-normal text-light">ha</span></p>
          <p class="text-center text-sm font-light text-light my-0">Quy mô sân golf <br/> tiêu chuẩn quốc tế</p>
        </div>

        <div class="benefit-item benefit-item-3 d-flex flex-column justify-center align-items-center">
          <img src="/assets/images/benefit/benefit-icon-3.png" alt="benefit-3" loading="lazy"/>
          <p class="text-4xl md:text-5xl text-light mt-2 mb-0 lh-1">240<span
              class="text-2xl md:text-3xl font-normal text-light">ha</span></p>
          <p class="text-center text-sm font-light text-light my-0">Khoảng rộng của <br/> sân bay chuyên dụng</p>
        </div>
      </div>
    </div>
    <SectionDevide/>
  </section>
</template>

<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
import UtilitiesCarousel from '~/components/Carousels/UtilitiesCarousel.vue'
</script>
<style scoped>
.section-benefit {
  @media (max-width: 1440px) {
    margin-top: 20px;
  }
}

.section-benefit-first {
  @media (max-width: 1440px) {
    padding-bottom: 20px;
  }
}

.section-benefit-second {
  @media (max-width: 1440px) {
    padding-top: 20px;
  }
}

.section-benefit-second-title {
  @media (max-width: 1440px) {
    font-size: 28px;
  }
}

.hightlight-wrapper {
  margin-top: 4rem;
  margin-bottom: 150px;
  @media (max-width: 1440px) {
    margin-top: 4rem;
    margin-bottom: 70px;
  }
}

.benefit-item {
  max-width: 1400px;
  border-radius: 50%;
  width: 280px;
  height: 280px;
  background: linear-gradient(to bottom, rgba(6, 89, 108, 0.9), rgba(12, 130, 125, 0.9));
}

.benefit-item img {
  height: 80px;
  width: auto;
  object-fit: contain;
  max-width: 100%;
  @media (max-width: 768px) {
    height: 50px;
  }
}

.slide-title-text {
  font-size: 1.15rem;
  @media (max-width: 1440px) {
    font-size: 1rem;
  }
}

.slide-title-sub-title {
  margin-top: 4rem;
  @media (max-width: 1440px) {
    margin-top: 20px;
  }
}

.slide-wrapper {
  width: 100vw;
  @media (max-width: 1440px) {
    padding: 15px 0;
  }
}

.after-slider {
  color: #365967;
  font-size: 34px;
  margin-top: 35px;
  margin-bottom: 20px;
  @media (max-width: 1440px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

@media (max-width: 768px) {
  .slide-title-text, .after-slider, .text-black, .section-benefit-second {
    display: none;
  }

  .benefit-wrapper {
    width: 100%;
    gap: 10px;
    padding: 0 10px 0 10px;
  }

  .text-light {
    font-size: 18px;
  }

  .benefit-item {
    height: 180px;
    width: 180px;
    border-radius: 99px;
  }

  .benefit-item img {
    width: 40px;
    height: 40px;
  }

  .font-light {
    font-size: 12px;
  }
}
</style>