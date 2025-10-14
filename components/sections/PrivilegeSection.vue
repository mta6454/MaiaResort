<template>
  <section id="privilege" class="mt-16">
    <div class="container text-center text-white">
      <div class="second-slide-title font-rosellinda text-2xl">
        Wellness từ thiên nhiên
      </div>
      <div class="second-slide-subtitle text-xl font-sans font-light">
        Không khí rừng giàu anion & gió biển ion hóa <br> tái tạo sức khỏe, cải thiện tinh thần.
      </div>
      <div class="mt-8 text-light font-sans font-normal">
        Ở đây, việc dung dưỡng thân - tâm - trí không còn là xa xỉ. Đó là hơi thở của rừng vàng giàu anion, là làn gió
        biển <br>mang ion tinh khiết, là những trải nghiệm đã được khoa học chứng minh giúp tái tạo thể chất lẫn tinh thần.
      </div>
      <div class="second-slide-wrapper mt-16 mb-16">
        <CarouselsPrivilegeCarousel class="py-8"/>
      </div>
      <SectionDevide/>
      <div class="second-slide-subtitle text-xl font-sans text-semibold mt-16">
        Maia Resort Ho Tram hội tụ uy tín quốc tế, <br/> sự am hiểu bản địa và chuẩn mực vận hành tinh hoa.
      </div>
      <div class="privilege-wrapper px-16 py-8 mt-16 mb-16">
        <div class="font-rosellinda text-3xl text-white font-light">Thuộc hệ sinh thái tài sản đầu tư</div>
        <div class="text-xl font-sans font-normal text-2xl">Quỹ đầu tư uy tín nước Mỹ</div>
        <div class="py-8 privilege-name text-4xl font-sans text-bold text-uppercase">
          Warburg Pincus
        </div>
        <div class="flex flex-row flex-wrap">
          <div class="privilege-item">
            <div class="privilege-item-title font-sans font-extrabold">55+</div>
            <div class="font-sans font-normal">Năm kinh nghiệm <br/> đầu tư quốc tế</div>
          </div>
          <div class="privilege-item">
            <div class="privilege-item-title font-sans font-extrabold">$120+</div>
            <div class="font-sans font-normal">Tỷ tổng vốn đầu tư</div>
          </div>
          <div class="privilege-item">
            <div class="privilege-item-title font-sans font-extrabold">1.000+</div>
            <div class="font-sans font-normal">Doanh nghiệp trong doanh mục đầu tư</div>
          </div>
          <div class="privilege-item">
            <div class="privilege-item-title font-sans font-extrabold">40+</div>
            <div class="font-sans font-normal">Quốc gia hiện diện</div>
          </div>
        </div>

        <div class="my-8">
          <div class="devide-line"></div>
        </div>
        <div class="flex flex-row">
          <div class="banner-left">
            <div>
              <h5 class="font-rosellinda text-xl">Chủ đầu tư và đơn vị phát triển</h5>
            </div>
            <div class="flex-row flex justify-content-center">
              <div>
                <img class="img-partner" src="/assets/images/Logo_The Grand_White.png"></img>
              </div>
              <div>
                <img class="img-partner" src="/assets/images/Lodgis-logo.png"></img>
              </div>
              <div>
                <img class="img-partner" src="/assets/images/VinaLiving-Logo-White.png"></img>
              </div>
            </div>
          </div>
          <div class="flex flex-column align-items-center banner-right">
            <div>
              <h5 class="font-rosellinda font-normal text-xl">Vận hành dưới thương hiệu</h5>
            </div>
            <div class="flex-row flex">
              <div>
                <img class="img-partner" src="/assets/images/Fusion-logo.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionDevide/>
      <p class="text-2xl font-sans text-semibold mt-16">
                <span class="font-rosellinda text-3xl font-light">
                    Được ví như
                </span> <b>"Las Vegas thu nhỏ"</b>
      </p>
      <p class="font-sans text-xl">
        ngay tại trung tâm thủ phủ du lịch lớn nhất Việt Nam,<br>
        Maia Resort Ho Tram chính là sự đầu tư thích đáng và mang về giá trị bền vững cho tương lai
      </p>

      <!-- wrapper phá max-width của container cha -->
      <div style="padding-top: 50px" class="mini-vegas w-screen relative left-1/2 -translate-x-1/2 mt-8 text-white">
        <img src="/assets/images/privilegeSlide/privileges-main.png" alt="Mini Vegas" width="100%" height="100%"/>
      </div>

    </div>
    <div class="cta-schedule mt-16 text-center">
      <div class="cta-title">ĐẶT LỊCH ĐỂ TRẢI NGHIỆM</div>

      <span @click="go('#register')" class="cta-icon" aria-hidden="true">
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
  </section>
</template>

<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
function go(hash) {
  if (hash && hash.startsWith('#')) {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }
}
</script>
<style>
#second-slide {
  margin-bottom: 30vh;
}

.privilege-wrapper {
  background: linear-gradient(to bottom, rgba(1, 66, 97, 1), rgba(16, 153, 135, 1));
  opacity: 93%;
}

.privilege-name {
  font-family: 'Times New Roman', serif;
  font-weight: 400;
}

.privilege-item {
  width: 25%;
}

.privilege-item-title {
  font-size: 3rem;
}

.devide-line {
  width: 100%;
  height: 2px;
  background-color: #ffffff60;
}

.perk-card {
  height: 520px;
  min-height: unset;
}

/* cao đều trên desktop */
@media (max-width: 767.98px) {
  .perk-card {
    height: 420px;
  }

  /* mobile */
}

.perk-card > img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* ảnh phủ kín */
  display: block;
}

@media (min-width: 640px) {
  .perk-card {
    min-height: 520px;
  }
}


.perk-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 50px 20px 26px;
  text-align: center;
}

.benefit-cta {
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .28);
  color: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .25);
}

.benefit-cta:hover {
  background: rgba(255, 255, 255, .22);
}

.mini-vegas-row {
  max-width: 1200px;
  margin: 0 auto;
  display: grid !important;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .mini-vegas-row {
    grid-template-columns: repeat(3, 1fr);
  }
}

.perk-card {
  height: 800px;
}

@media (max-width: 767.98px) {
  .perk-card {
    height: 420px;
  }
}

.perk-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 0;
}

.perk-card {
  position: relative;
  height: 520px;
  overflow: hidden;
}

@media (max-width: 767.98px) {
  .perk-card {
    height: 420px;
  }
}

.perk-gradient {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55%;
  background: linear-gradient(0deg, rgba(0, 20, 10, .0), rgba(0, 20, 10, .45), rgba(0, 0, 0, 0));
  z-index: 1;
}

.perk-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 22px 20px 26px;
  text-align: center;
  color: #fff;
  z-index: 2;
}

.img-partner {
  width: 200px;
  height: 80px;
  object-fit: contain;
}

.banner-left {
  border-right: 2px solid #21a39a;
  width: 60%
}

.banner-right {
  width: 40%;
}

.text-item-center {
  font-size: 28px;
}

.text-label {
  font-size: 50px;
}

.text-item-color {
  background: radial-gradient(130% 70% at 50% 0%,
  rgba(255, 255, 255, .95) 0%,
  rgba(255, 255, 255, 0) 50%),
  linear-gradient(180deg,
      #FFF9DC 0%, /* sáng hơn */ #FFEFAF 24%, /* vàng nhạt */ #FFD84A 50%, /* vàng tươi rực */ #FFE7A8 72%, /* ánh sáng lại */ #D9A231 100% /* chút chiều sâu, ít nâu */
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  /* nổi rõ trên nền tối nhưng không bẩn màu */
  text-shadow: 0 1px 1px rgba(0, 0, 0, .18),
  0 6px 16px rgba(0, 0, 0, .22);
  -webkit-text-stroke: .25px rgba(0, 0, 0, .12);
}

.text-percent {
  padding-top: 30px;
  font-size: 24px;
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
  color: #fff;
}

.cta-icon {
  display: inline-flex;
  margin-top: 8px;
  /* khoảng hở giữa chữ và icon */
  color: #fff;
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
</style>