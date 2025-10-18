<template>
  <section id="intro" class="section-intro">
    <div class="container mt-8 px-0">
      <div class="intro_content">
        <div>
          <span class="font-rosellinda main-text-cl text-2xl text-2sm" style="margin-right: -6px;">
            Giữa
          </span>
          <span class="font-sans sub-cl text-2xl font-light">
            Rừng Vàng, Biển Bạc
          </span>
        </div>
        <div class="intro-subtitle">
          <span class="font-rosellinda main-text-cl main-text text-2xl" style="margin-right: -6px;">
            chọn
          </span>
          <span class="font-sans sub-cl">
            An vui, 
          </span>
          <span class="font-rosellinda main-text-cl main-text text-2xl ms-2" style="margin-right: -6px;">
            chọn
          </span>
          <span class="font-sans sub-cl">
            Giá trị bền vững.
          </span>
        </div>
      </div>
      <div class="intro_description intro_description_first text-center mt-10 text-semibold">
        Không chỉ là nơi để tìm lại an vui, mà còn mang lại giá trị bền vững 
      </div>
      <div class="text-second text-2xl text-center text-semibold text-intro mt-8 intro-happy">
        Maia Resort Ho Tram, <br>
        chốn an trú độc tôn cho những chủ nhân tinh hoa.
      </div>
      <div class="cta-schedule text-center">
        <div class="cta-title">ĐẶT LỊCH ĐỂ TRẢI NGHIỆM</div>
        <!-- Lỗi không căn giữa nên đặt 13px margin -->
        <span @click="openModalForm" class="cta-icon" aria-hidden="true" style="margin-right: 13px">
          <svg viewBox="0 0 24 24" class="icon" xmlns="http://www.w3.org/2000/svg">

            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-dasharray="50 8" stroke-dashoffset="12"/>

            <!-- Thân mũi tên -->
            <path d="M12 2v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>

            <!-- Đầu mũi tên -->
            <path d="M9.75 11.5L12 14l2.25-2.5" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>

      <div class="text-second text-2xl text-center mt-8 text-semibold text-intro" id="textIntro">
        Có những nơi thiên nhiên chỉ dừng lại ở phong cảnh,
      </div>
      <div class="intro_description intro_description-second text-center">
        Nhưng ở Maia Resort Ho Tram,
      </div>
      <div class="text-second text-center text-semibold">
        rừng vàng và biển bạc trở thành đặc quyền hiếm có, ôm trọn từng khoảnh khắc sống.
      </div>
      <div class="section-utilities py-16 row" :class="{'is-reverse': isReverse}">
        <div class="utilities-image utilities-left">
          <img :src="utilities" alt="Utilities" loading="lazy" class="responsive-img"/>
          <div class="utilities-left-content_overlay">
            <div class="utilities-des-content_overlay_title text-3xl text-semibold">100 %</div>
            <div class="utilities-des-content_overlay_des text-xl">View biển trực diện</div>
            <div v-if="isReverse" class="utilities-des-content_overlay_button" @click="setReverse">
              <img :src="arrowRight" alt="Arrow Right"/>
            </div>
          </div>
        </div>
        <div class="utilities-des utilities-right">
          <img :src="utilitiesSecond" alt="Utilities" loading="lazy" class="responsive-img"/>
          <div class="utilities-des-content_overlay">
            <div class="utilities-des-content_overlay_title text-4xl text-semibold">TOP 65</div>
            <div class="utilities-des-content_overlay_des text-xl">Hệ sinh thái rừng<br> bền vững thế giới</div>

          </div>
          <div v-if="!isReverse" class="utilities-des-content_overlay_button" @click="setReverse">
            <!-- Xử lý click ở đây -->
            <img :src="arrowRight" alt="Arrow Right"/>
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
const emit = defineEmits(['openModalForm'])
function go(hash: string) {
  if (hash && hash.startsWith('#')) {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }
}

const isReverse = ref(false)

const setReverse = () => {
  isReverse.value = !isReverse.value
}

const openModalForm = () => {
  emit('openModalForm')
}
</script>
<style scoped>
.section-intro {
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (max-width: 1521px) {
    padding-bottom: 2rem;
  }
  @media (max-width: 1440px) {
    padding-top: 1rem;
    padding-bottom: 0rem;
  }
}

.intro_content {
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 1.4;
  margin-bottom: 30rem;
  @media (max-width: 1521px) {
    margin-bottom: 200px;
  }
  @media (max-width: 1440px) {
    font-size: 2.2rem;
    margin-bottom: 330px;
  }
}

.intro_description_first {
  font-size: 18px;
  padding-top: 350px;
  @media (max-width: 1521px) {
    /* padding-top: 200px; */
  }
  @media (max-width: 1440px) {
    padding-top: 340px;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    padding-top: 0;
  }
}

.intro_description-second {
  margin-top: 20px;
  @media (max-width: 1521px) {
    margin-top: 15px !important;
  }
  @media (max-width: 1440px) {
    font-size: 16px;
    margin-top: 10px;
  }
}
.intro-happy {
  margin-top: 1rem !important;
}
.cta-schedule {
  text-align: center;
  margin-top: 1rem;
  @media (max-width: 1521px) {
    margin-top: 15px;
    padding: 0;
  }
  @media (max-width: 1440px) {
    margin-top: 10px;
    padding: 0;
  }
}

.cta-title {
  font-family: "SVN-Zona Pro", system-ui, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
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
  @media (max-width: 1521px) {
    margin-top: 15px;
  }
  @media (max-width: 1440px) {
    margin-top: 10px;
    font-size: 28px;
  }
}

.utilities-image, .utilities-des {
  position: relative;
  @media (max-width: 1440px) {
    height: 475px;
  }
}

.utilities-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.responsive-img {
  max-width: 100%;
  height: auto;
}

.utilities-image-content {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2rem;
}

.row .utilities-image, .row .utilities-des {
  padding-right: 0;
  padding-left: 0;
}

.utilities-des img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.utilities-des-content_overlay, .utilities-left-content_overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  @media (max-width: 1440px) {
    padding: 1rem;
  }
}

.utilities-des-content_overlay {
  background: linear-gradient(to bottom, rgba(16, 153, 135, 0.8), rgba(1, 66, 97, 0.9), rgba(1, 66, 97, 0.9));
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #fff;
}

.utilities-left-content_overlay {
  bottom: 0;
  left: 0;
  align-items: flex-end;
  justify-content: flex-end;
  color: #fff;
  background: transparent;
}
.utilities-left-content_overlay .utilities-des-content_overlay_button {
  left: unset;
  right: 3rem;
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

.section-utilities {
  width: 100%;
  @media (max-width: 1521px) {
    padding-top: 25px;
    padding-bottom: 0;
  }
  @media (max-width: 1440px) {
    padding-top: 50px;
    padding-bottom: 0;
  }
}

.section-utilities.is-reverse .utilities-left {
  width: 30%;
}

.section-utilities.is-reverse .utilities-right {
  width: 70%;
}
.is-reverse .utilities-right .utilities-des-content_overlay_des br {
  display: none;
}
.section-utilities.is-reverse .utilities-des-content_overlay {
  background: transparent;
  align-items: flex-start;
  justify-content: flex-end;
}

.section-utilities.is-reverse .utilities-des-content_overlay_button {
  transform: rotate(180deg);
}

.section-utilities.is-reverse .utilities-left-content_overlay {
  background: linear-gradient(to bottom, rgba(0, 85, 102, 0.8), rgba(0, 150, 136, 0.8));
  justify-content: center;
  align-items: center;
}

.section-utilities.is-reverse .utilities-des-content_overlay_title {
  font-size: 3rem;
}

.section-utilities.is-reverse .utilities-left-content_overlay .utilities-des-content_overlay_title {
  font-size: 4rem;
}

@media (max-width: 768px) {
  .intro_content {
    font-size: 16px !important;
    margin-bottom: 1000px;
    margin-top: 100px;
  }


  .intro-happy {
    font-size: 16px !important;
  }

  .cta-title {
    font-size: 14px;
  }

  #textIntro {
    margin-top: 0 !important;
    font-size: 14px;
  }

  .section-utilities {
    padding: 20px 10px 40px 10px;
    border: none;
    margin: 0 auto;
    flex-direction: column !important;
  }

  .utilities-image {
    height: auto;
    min-height: 260px;
  }

  .utilities-right {
    font-size: 14px;
    height: auto;
    min-height: 260px;
  }

  .utilities-left, .utilities-right {
    width: 100% !important;
    height: auto;
    min-height: 260px;
    margin-bottom: 1rem;
  }

  .utilities-image img, .utilities-des img {
    width: 100%;
    height: 100%;
    min-height: 260px;
    object-fit: cover;
  }

  .utilities-des-content_overlay_title {
    font-size: 20px !important;
  }

  .utilities-des-content_overlay_des {
    font-size: 14px !important;
    word-break: break-word;
  }

  .utilities-des-content_overlay_button img {
    width: 40px;
    height: 40px;
    min-height: unset;
  }

  .main-text-cl, .sub-cl {
    z-index: 9999;
    font-size: 20px !important;
  }

  .container {
    margin-top: 4px;
    padding: 0 16px !important;
  }

  .section-utilities.is-reverse .utilities-left,
  .section-utilities.is-reverse .utilities-right {
    width: 100% !important;
  }

  .row.section-utilities {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {  
      margin: 150px 0 110px;
    }
  }
}
</style>