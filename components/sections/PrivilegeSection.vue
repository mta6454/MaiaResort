<template>
  <section id="privilege" class="section-privilege">
    <div class="container text-center text-white">
      <div class="second-slide-title font-rosellinda text-2xl">
        Wellness từ thiên nhiên
      </div>
      <div class="second-slide-subtitle second-slide-subtitle-first font-sans font-light ">
        Không khí rừng giàu anion & gió biển ion hóa <br class="pc-only-br"> tái tạo sức khỏe, cải thiện tinh thần.
      </div>
      <div class="section-privilege-content text-light font-sans font-normal text-xl">
        Ở đây, việc dung dưỡng thân - tâm - trí không còn là xa xỉ. Đó là hơi thở của rừng vàng giàu anion, là làn gió
        biển <br class="pc-only-br">mang ion tinh khiết,<br class="mb-only-br"> là những trải nghiệm đã được khoa học chứng minh giúp tái tạo thể chất lẫn tinh thần.
      </div>
      <div class="second-slide-wrapper">
        <CarouselsPrivilegeCarousel class="py-4"/>
      </div>
      <SectionDevide class="section-devide-privilege"/>
      <div class="second-slide-subtitle second-slide-subtitle-second font-sans text-semibold">
        Maia Resort Ho Tram hội tụ uy tín quốc tế, <br/> sự am hiểu bản địa và chuẩn mực <br class="mb-only-br"> vận hành tinh hoa.
      </div>
      <div class="privilege-wrapper">
      <div class="privilege-wrapper-title font-rosellinda text-white font-light">Thuộc hệ sinh thái tài sản đầu tư</div>
        <div class="privilege-wrapper-title-2 text-xl font-sans font-normal text-2xl">Quỹ đầu tư uy tín nước Mỹ</div>
        <div class="privilege-wrapper-title-3 py-8 privilege-name text-4xl font-sans text-bold text-uppercase">
          Warburg Pincus
        </div>
        <div class="flex flex-row flex-wrap">
          <div class="privilege-item">
            <div class="privilege-item-title text-4xl font-sans">55+</div>
            <div class="privilege-item-content font-sans font-normal">Năm kinh nghiệm <br/> đầu tư quốc tế</div>
          </div>
          <div class="privilege-item">
            <div class="privilege-item-title text-4xl font-sans">$120+</div>
            <div class="privilege-item-content font-sans font-normal">Tỷ tổng vốn <br/> đầu tư</div>
          </div>
          <div class="privilege-item">
            <div class="privilege-item-title text-4xl font-sans">1.000+</div>
            <div class="privilege-item-content font-sans font-normal">Doanh nghiệp trong <br/> danh mục đầu tư</div>
          </div>
          <div class="privilege-item">
            <div class="privilege-item-title text-4xl font-sans">40+</div>
            <div class="privilege-item-content font-sans font-normal">Quốc gia <br/> hiện diện</div>
          </div>
        </div>

        <div class="devide-line-wrapper my-8">
          <div class="devide-line"></div>
        </div>
        <div class="flex flex-row flex-wrap">
          <div class="banner-left">
            <div class="mb-4">
              <h5 class="font-rosellinda text-xl privilege-wrapper-title-mb">Chủ đầu tư và đơn vị phát triển</h5>
            </div>
            <div class="flex-row flex justify-content-center">
              <div class="partner-item">
                <img class="img-partner" src="/assets/images/Logo_The Grand_White.png"></img>
              </div>
              <div class="partner-item">
                <img class="img-partner" src="/assets/images/Lodgis-logo.png"></img>
              </div>
              <div class="partner-item">
                <img class="img-partner" src="/assets/images/VinaLiving-Logo-White.png"></img>
              </div>
            </div>
          </div>
          <div class="flex flex-column align-items-center banner-right">
            <div class="mb-2">
              <h5 class="font-rosellinda font-normal text-xl privilege-wrapper-title-mb">Vận hành dưới thương hiệu</h5>
            </div>
            <div class="flex-row flex">
              <div>
                <img class="img-partner" src="/assets/images/Fusion-logo.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionDevide class="section-devide-privilege-vegas"/>
      <p class="section-privilege-vegas text-2xl font-sans text-semibold">
        <span class="font-rosellinda text-3xl font-light">Được ví như</span> <b>"Las Vegas thu nhỏ"</b>
      </p>
      <p class="section-privilege-vegas-content font-sans text-xl">
        Ngay tại trung tâm thủ phủ du lịch<br class="mb-only-br"> lớn nhất Việt Nam,<br clear="pc-only-br">
        Maia Resort Ho Tram chính là sự đầu tư thích đáng và mang về giá trị bền vững cho tương lai
      </p>

      <!-- wrapper phá max-width của container cha -->
      <div class="mini-vegas w-screen relative left-1/2 -translate-x-1/2 mt-8 text-white">
        <div class="row">
          <div class="col-md-4 col-12">
            <img src="/assets/images/privilege/1.png" alt="Mini Vegas" loading="lazy" class="mini-vegas-img"/>
          </div>
          <div class="col-md-4 col-12">
            <img src="/assets/images/privilege/2.png" alt="Mini Vegas" loading="lazy" class="mini-vegas-img"/>
          </div>
          <div class="col-md-4 col-12">
            <img src="/assets/images/privilege/3.png" alt="Mini Vegas" loading="lazy" class="mini-vegas-img"/>
          </div>
        </div>
      </div>

    </div>
    <div class="cta-schedule text-center">
      <div class="cta-title">ĐẶT LỊCH ĐỂ TRẢI NGHIỆM</div>

      <!-- Lỗi không căn giữa nên đặt 13px margin -->
       <img src="/assets/images/arrow-left.svg" alt="arrow-down" style="width: 38px; height: 38px; rotate: -90deg; cursor: pointer;" @click="go('#register')"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
function go( hash : string ) {
  if (hash && hash.startsWith('#')) {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({behavior: 'smooth'})
  }
}
</script>
<style>
.section-privilege {
  margin-top: 4rem;
  @media (max-width: 1521px) {
    margin-top: 30px;
  }
  @media (max-width: 1440px) {
    margin-top: 60px;
  }
}


.second-slide-subtitle{
  font-size: 1.75rem;
  margin-top: 10px;
  @media (max-width: 1521px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1440px) {
    font-size: 1.5rem;
  }
}

.second-slide-subtitle-second{
  margin-top: 3rem;
  @media (max-width: 1521px) {
    margin-top: 25px;
  }
  @media (max-width: 1440px) {
    margin-top: 10px;
  }
}

.section-privilege-content{
  margin-top: 25px;
  @media (max-width: 1521px) {
    font-size: 1.5rem;
    margin-top: 20px;
  }
  @media (max-width: 1440px) {
    font-size: 1.25rem;
    margin-top: 15px;
  }
}

.privilege-wrapper {
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, rgba(1, 66, 97, 1), rgba(16, 153, 135, 1));
  opacity: 93%;
  @media (max-width: 1521px) {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 1.75rem 1.5rem;
  }
  @media (max-width: 1440px) {
    font-size: 1.25rem;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 1.5rem 1rem;
  }
}

.second-slide-wrapper{
  margin: 1rem 0;
  @media (max-width: 1521px) {
    margin: 10px 0;
  }
  @media (max-width: 1440px) {
    margin: 0;
  }
  @media (max-width: 768px) {
    margin-bottom: 80px;
    margin-top: 80px;
  }
}

.privilege-wrapper-title{
  font-size: 2.5rem;
  @media (max-width: 1521px) {
    font-size: 2rem;
  }
  @media (max-width: 1440px) {
    font-size: 2rem;
  }
}

.privilege-wrapper-title-2{
  @media (max-width: 1521px) {
    font-size: 1.75rem;
  }
  @media (max-width: 1440px) {
    font-size: 1.5rem;
  }
}

.privilege-wrapper-title-3{
  @media (max-width: 1521px) {
    font-size: 3rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media (max-width: 1440px) {
    font-size: 2.5rem;
    padding-top: 0px;
    padding-bottom: 0px;
  }
}

.privilege-name {
  font-family: 'Times New Roman', serif;
  font-weight: 400;
}

.privilege-item {
  width: 25%;
}

.privilege-item-title {
  @media (max-width: 1521px) {
    font-size: 3rem;
  }
  @media (max-width: 1440px) {
    font-size: 2.5rem;
  }
}

.privilege-item-content{
  @media (max-width: 1440px) {
    font-size: 1rem;
  }
}

.devide-line-wrapper{
  @media (max-width: 1440px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

.devide-line {
  width: 100%;
  height: 2px;
  background-color: #ffffff60;
}

.section-privilege-vegas{
  margin-top: 4rem;
  @media (max-width: 1521px) {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  @media (max-width: 1440px) {
    margin-top: 15px;
    margin-bottom: 0px;
  }
}

.section-privilege-vegas-content{
  @media (max-width: 1440px) {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
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

.mini-vegas {
  padding-top: 50px;
  margin-top: 2rem;
  @media (max-width: 1521px) {
    padding-top: 20px;
    margin-top: 20px;
    height: auto;
  }
  @media (max-width: 1440px) {
    padding-top: 10px;
    margin-top: 10px;
    height: auto;
  }
}

.mini-vegas-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  @media (max-width: 1521px) {
    max-height: 600px;
  }
  @media (max-width: 1440px) {
    max-height: 600px;
  }
  @media (max-width: 768px) {
    margin-bottom: 4rem;
    max-height: 480px;
  }
}

.partner-item {
  margin: 0 16px;
}
.img-partner {
  height: 80px;
  object-fit: contain;
  max-width: 100%;
  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
  }
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
  margin-top: 10rem;
  @media (max-width: 768px) {
    margin-top: 260px;
    color: #000;
  }
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
@media (max-width: 768px) {
  .section-privilege {
    text-shadow: 0 0 2px #22222270;

  }
  .second-slide-title {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .second-slide-subtitle {
    font-size: 1rem !important;
    padding: 2rem 2rem;
  }

  .section-privilege-content {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .privilege-wrapper {
    padding: 2rem 1rem;
  }

  .privilege-wrapper-title, .privilege-wrapper-title-mb {
    font-size: 18px !important;
  }

  .privilege-wrapper-title-2 {
    font-size: 1.125rem !important;
  }

  .privilege-wrapper-title-3 {
    font-size: 1.75rem !important;
  }

  .privilege-item {
    width: 50%;
    margin-bottom: 1rem;
  }

  .privilege-item-title {
    font-size: 1.5rem !important;
  }

  .privilege-item-content {
    font-size: 0.75rem !important;
  }

  .banner-left,
  .banner-right {
    width: 100% !important;
    border: none !important;
    margin-top: 1rem;
  }

  .banner-left {
    padding-bottom: 1rem;
    border-bottom: 2px solid #21a39a !important;
  }

  .section-privilege-vegas {
    font-size: 1.125rem !important;
    padding: 0 1rem;
    @media screen and (max-width: 768px) {
      padding: 40px 0 20px;
    }
  }

  .section-privilege-vegas-content {
    font-size: 1rem;
    padding: 0 1rem;
    @media screen and (max-width: 768px) {
      padding: 20px 0;
    }
  }

}
@media screen and (min-width: 769px) {
  .mb-only-br {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .pc-only-br {
    display: none;
  }
  .section-devide-privilege-vegas {
    margin-top: 45px;
  }
}
.font-light {
  font-weight: 400;
}
</style>