<template>
  <section id="intro" class="py-16">
    <div class="container mt-16 px-0">
      <div class="intro_content">
        <div>
          <span class="font-rosellinda main-text-cl text-2xl">
            Giữa
          </span>
          <span class="font-sans sub-cl text-2xl font-light">
            Rừng Vàng, Biển Bạc
          </span>
        </div>
        <div class="intro-subtitle">
          <span class="font-rosellinda main-text-cl main-text text-2xl">
            chọn
          </span>
          <span class="font-sans sub-cl text-semibold">
            An vui, 
          </span>
          <span class="font-rosellinda main-text-cl main-text text-2xl ms-2">
            chọn
          </span>
          <span class="font-sans sub-cl font-extrabold">
            Giá trị bền vững.
          </span>
        </div>
      </div>
      <div class="intro_description intro_description_first text-center mt-10 text-lg">
        Đây không chỉ là nơi để bạn tìm lại an vui, mà còn là giá trị bền vững được kiến tạo cho
      </div>
      <div class="text-second text-2xl text-center text-semibold text-intro mt-8">
        Happy Tower & Villa tại Maia Resort Ho Tram, <br>
        chốn an trú độc tôn cho những chủ nhân tinh hoa.
      </div>
      <div class="cta-schedule mt-8 text-center">
        <div class="cta-title">ĐẶT LỊCH ĐỂ TRẢI NGHIỆM</div>

        <span @click="go('#register')" class="cta-icon" aria-hidden="true">
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


      <div class="text-second text-2xl text-center mt-8  text-semibold text-intro" id="textIntro">
        Có những nơi thiên nhiên chỉ dừng lại ở phong cảnh,
      </div>
      <div class="intro_description text-center" style="margin-top: 20px">
        Nhưng ở Maia Resort Ho Tram,
      </div>
      <div class="text-second text-center text-semibold">
        Rừng vàng và biển bạc trở thành đặc quyền hiếm có, ôm trọn từng khoảnh khắc sống.
      </div>
      <div class="section-utilities w-100 py-16 row" :class="{'is-reverse': isReverse}">
        <div class="utilities-image utilities-left">
          <img :src="utilities" alt="Utilities" />
          <div class="utilities-left-content_overlay">
            <div class="utilities-des-content_overlay_title text-3xl">100 %</div>
            <div class="utilities-des-content_overlay_des text-xl">View biển trực diện</div>
          </div>
        </div>
        <div class="utilities-des utilities-right">
          <img :src="utilitiesSecond" alt="Utilities" />
          <div class="utilities-des-content_overlay">
            <div class="utilities-des-content_overlay_title text-4xl text-semibold">TOP 65</div>
            <div class="utilities-des-content_overlay_des text-xl">Hệ sinh thái rừng<br> bền vững thế giới</div>
          </div>
          <div class="utilities-des-content_overlay_button" @click="setReverse">
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

function go(hash : string) {
  if (hash && hash.startsWith('#')) {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }
}
const isReverse = ref(false)

const setReverse = () => {
  isReverse.value = !isReverse.value
}
</script>
<style scoped>
.intro_content {
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 1.4;
  margin-bottom: 33rem;
  @media (max-width: 1440px) {
    font-size: 2.2rem;
    margin-bottom: 30rem;
  }
}

#about {
  margin-top: -80px;
}

.intro_description_first {
  font-size: 18px;
  /* TODO: Update */
  padding-top: 40vh;
  @media (max-width: 1440px) {
    padding-top: 35vh;
  }
}

.cta-schedule {
  text-align: center;
  /* padding: 16px 0 10px; */ /*Temp*/
}

.cta-title {
  font-family: "SVN-Zona Pro", system-ui, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  /* letter-spacing: .16em; */ /*Temp*/
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
  color: #014261;
}

.utilities-image{
  position: relative;
}

.utilities-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.utilities-image-content{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2rem;
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
  background: linear-gradient(to bottom, rgba(16, 153, 135, 0.8), rgba(1, 66, 97, 0.9), rgba(1, 66, 97, 0.9));
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
.utilities-left {
  width: 70%;
  transform: translateX(0);
  position: relative;
  /* transition: width .4s ease, transform .4s ease; */
}
.utilities-right {
  width: 30%;
  transform: translateX(0);
  /* transition: width .4s ease, transform .4s ease; */
}
.section-utilities.is-reverse  .utilities-left {
  width: 30%;
}
.section-utilities.is-reverse  .utilities-right {
  width: 70%;
}
.section-utilities.is-reverse  .utilities-des-content_overlay {
  background: transparent;
  align-items: flex-end;
  justify-content: flex-end;
}
.section-utilities.is-reverse  .utilities-des-content_overlay_button {
 transform: rotate(180deg);
}
.utilities-left-content_overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: flex-end;
  justify-content: flex-end;
  color: #fff;
  background: transparent;
}
.section-utilities.is-reverse .utilities-left-content_overlay {
  background: linear-gradient(to bottom, rgba(0, 85, 102, 0.8), rgba(0, 150, 136, 0.8));
  justify-content: center;
  align-items: center;
}
</style>