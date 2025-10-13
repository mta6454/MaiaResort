<template>
  <section id="intro" class="py-16">
    <div class="container mt-16">
      <div class="intro_content mb-160">
        <div>
          <span class="font-rosellinda main-text-cl text-2xl">
            Giữa
          </span>
          <span class="font-sans sub-cl sub-text font-light">
            Rừng Vàng, Biển Bạc
          </span>
        </div>
        <div class="intro-subtitle">
          <span class="font-rosellinda main-text-cl main-text text-2xl">
            chọn
          </span>
          <span class="font-sans sub-cl font-semibold">
            An vui,
          </span>
          <span class="font-rosellinda main-text-cl main-text text-2xl">
            chọn
          </span>
          <span class="font-sans sub-cl font-extrabold">
            Giá trị bền vững.
          </span>
        </div>
      </div>
      <div class="intro_description intro_description_first text-center mt-10">
        Đây không chỉ là nơi để bạn tìm lại an vui, mà còn là giá trị bền vững được kiến tạo cho
      </div>
      <div class="text-second text-2xl text-center font-semibold text-intro mt-8">
        Happy Tower & Villa tại Maia Resort Ho Tram, <br>
        chốn an trú độc tôn cho những chủ nhân tinh hoa.
      </div>
      <div class="cta-schedule mt-16 text-center">
        <div class="cta-title">ĐẶT LỊCH ĐỂ TRẢI NGHIỆM</div>

        <!-- Icon power–down custom (theo thiết kế) -->
        <span class="cta-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="icon" xmlns="http://www.w3.org/2000/svg">

            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-dasharray="50 8" stroke-dashoffset="12" />

            <!-- Thân mũi tên -->
            <path d="M12 2v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />

            <!-- Đầu mũi tên -->
            <path d="M9.75 11.5L12 14l2.25-2.5" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </span>
      </div>


      <img src="/assets/images/arrow-down.svg" alt="" />
      <div class="text-second text-2xl text-center mt-8  font-semibold text-intro">
        Có những nơi thiên nhiên chỉ dừng lại ở phong cảnh,
      </div>
      <div class="intro_description text-center" style="margin-top: 20px">
        Nhưng ở Maia Resort Ho Tram,
      </div>
      <div class="text-second text-center font-semibold">
        Rừng vàng và biển bạc trở thành đặc quyền hiếm có, ôm trọn từng khoảnh khắc sống.
      </div>
      <div class="section-utilities w-100 py-16 row">
        <div class="w-70 utilities-image">
          <img :src="utilities" alt="Utilities" />
        </div>
        <div class="w-30 utilities-des">
          <img :src="utilitiesSecond" alt="Utilities" />
          <div class="utilities-des-content_overlay">
            <div class="utilities-des-content_overlay_title text-3xl">TOP 65</div>
            <div class="utilities-des-content_overlay_des text-xl">Hệ sinh thái rừng<br> bền vững thế giới</div>
          </div>
          <div class="utilities-des-content_overlay_button">
            <!-- Xử lý click ở đây -->
            <img :src="arrowRight" alt="Arrow Right" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import utilities from '~/assets/images/utilitiesImage.jpg'
import utilitiesSecond from '~/assets/images/section-2_2.jpg'
import arrowRight from '~/assets/images/arrow-right.svg'
</script>
<style scoped>
.intro_content {
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 1.4;
}

#about {
  margin-top: -80px;
}

.intro_description_first {
  padding-top: 40vh;
}

.cta-schedule {
  text-align: center;
  padding: 16px 0 10px;
}

.cta-title {
  font-family: "SVN-Zona Pro", system-ui, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: .16em;
  font-size: 14px;
  color: #0A0A0A;
}

.cta-icon {
  display: inline-flex;
  margin-top: 8px;
  /* khoảng hở giữa chữ và icon */
  color: #111;
  /* màu icon */
  cursor: pointer;
}

.cta-icon .icon {
  width: 38px;
  /* đường kính icon ~38–40px */
  height: 38px;
}

/* nhẹ nhàng: rung xuống một chút khi hover */
.cta-icon:hover .icon {
  transform: translateY(1px);
  transition: transform .18s ease;
}

.text-intro {
  font-weight: 700;
}

.utilities-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.row .utilities-image, .row .utilities-des{
  padding-right: 0;
  padding-left: 0;
}
.utilities-des {
  position: relative;
}
.utilities-des img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.utilities-des-content_overlay {
  background: linear-gradient(to bottom, rgba(0, 85, 102, 0.8), rgba(0, 150, 136, 0.8));
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 3rem;
  color: #fff;
}
.utilities-des-content_overlay_button {
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}
.utilities-des-content_overlay_button:hover {
  transform: translateY(1px);
  transition: transform .18s ease;
}
.w-70 {
  width: 70%;
}
.w-30 {
  width: 30%;
}
</style>