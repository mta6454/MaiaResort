<template>
  <section id="privilege" class="mt-4">
    <div class="container text-center text-white">
      <div class="second-slide-title font-rosellinda text-2xl">
        Wellness từ thiên nhiên
      </div>
      <div class="second-slide-subtitle text-xl font-sans font-light">
        Không khí rừng giàu anion & gió biển ion hóa <br> tái tạo sức khỏe, cải thiện tinh thần.
      </div>
      <div class="mt-4 text-light font-sans font-normal">
        Ở đây, việc dung dưỡng thân - tâm - trí không còn là xa xỉ. Đó là hơi thở của rừng vàng giàu anion, là làn gió
        biển <br> ion hóa tái tạo sức khỏe, cải thiện tinh thần.
      </div>
      <div class="second-slide-wrapper">
        <CarouselsPrivilegeCarousel class="py-8"/>
      </div>
      <SectionDevide/>
      <p class="second-slide-subtitle text-xl font-sans font-semibold">
        Maia Resort Ho Tram hội tụ uy tín quốc tế, sự am hiểu bản địa và chuẩn mực vận hành tinh hoa.
      </p>
      <div class="privilege-wrapper px-16 py-8">
        <div class="font-rosellinda text-3xl text-white font-light">Thuộc hệ sinh thái tài sản đầu tư</div>
        <div class="text-xl font-sans font-normal">Quỹ đầu tư uy tín nước Mỹ</div>
        <div class="py-8 privilege-name text-3xl font-sans font-bold">
          Warburg Pincus
        </div>
        <div class="flex flex-row flex-wrap ">
          <div class="privilege-item">
            <div class="privilege-item-title font-sans font-extrabold">55+</div>
            <div class="font-sans font-normal">Kinh nghiệm quốc tế</div>
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
          <!-- Còn phần dưới của cái này -->
        </div>
      </div>
      <SectionDevide/>
      <p class="text-2xl font-sans font-semibold">
                <span class="font-rosellinda text-3xl font-light">
                    Được ví như
                </span> "Las Vegas thu nhỏ"
      </p>
      <p class="font-sans font-normal">
        ngay tại trung tâm thủ phủ du lịch lớn nhất Việt Nam,<br>
        Maia Resort Ho Tram chính là sự đầu tư thích đáng và mang về giá trị bền vững cho tương lai
      </p>

      <!-- wrapper phá max-width của container cha -->
      <div style="padding-top: 50px" class="mini-vegas w-screen relative left-1/2 -translate-x-1/2 mt-8 text-white">
        <div class="mini-vegas-row px-4 sm:px-0">
          <!-- Card 1 -->
          <div class="relative rounded-xl" style="position: relative">
            <div style="height: 80%;">
              <img src="/images/Section-8.2.1.png" alt="Casino" class="perk-img">
            </div>
            <div style="height: 20%;"></div>
            <div class="perk-gradient"></div>
            <div class="perk-content" style="z-index: 9999;">
              <div class="font-rosellinda text-xl sm:text-2xl leading-snug">
                Dòng tiền thu nhập<br>tốt nhất
              </div>
              <div class="mt-3 flex items-baseline justify-center gap-1">
                <span class="text-5xl sm:text-6xl font-extrabold leading-none">40</span>
                <span class="text-3xl sm:text-4xl font-extrabold leading-none">%</span>
              </div>
              <div class="text-sm sm:text-base font-sans opacity-90 mt-1">doanh thu &amp; ổn định</div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="perk-card relative overflow-hidden rounded-xl">
            <img src="/images/Section-8.2.2.png" alt="Cheers" class="perk-img">
            <div class="perk-gradient"></div>
            <div class="perk-content">
              <div class="font-rosellinda text-xl sm:text-2xl leading-snug">
                Giá bán phòng<br>tốt nhất
              </div>
              <div class="text-sm sm:text-base font-sans opacity-90 mt-2">
                vận hành dưới thương hiệu<br>quản lý nổi tiếng
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold mt-3 tracking-wide">
                FUSION HOTEL GROUP
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="perk-card relative overflow-hidden rounded-xl">
            <img src="/images/Section-8.2.3.png" alt="Waiter" class="perk-img">
            <div class="perk-gradient"></div>
            <div class="perk-content">
              <div class="font-rosellinda text-xl sm:text-2xl leading-snug">
                Lịch thanh toán giản nhất<br>trên thị trường
              </div>
              <div class="mt-3 flex items-baseline justify-center gap-1">
                <span class="text-5xl sm:text-6xl font-extrabold leading-none">50</span>
                <span class="text-3xl sm:text-4xl font-extrabold leading-none">%</span>
              </div>
              <div class="text-sm sm:text-base font-sans opacity-90 mt-1">là nhận nhà</div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
</script>
<style>
#second-slide {
  margin-bottom: 30vh;
}

.privilege-wrapper {
  background: linear-gradient(to bottom, rgba(0, 85, 102, 0.6), rgba(0, 150, 136, 0.6));

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
  height: 620px;
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

.perk-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 0; /* ảnh thấp nhất */
}

.perk-gradient {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55%;
  background: linear-gradient(0deg, rgba(0, 20, 10, .9), rgba(0, 20, 10, .45), rgba(0, 0, 0, 0));
  z-index: 1; /* dưới nội dung, trên ảnh */
}

.perk-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 22px 20px 26px;
  text-align: center;
  color: #fff; /* đảm bảo chữ trắng */
  z-index: 2; /* trên cùng */
}
</style>