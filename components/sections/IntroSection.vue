<template>
  <section id="about" class="py-16">
    <div class="container mt-16">
      <div class="intro_content mb-160">
        <div>
          <span class="font-rosellinda main-text-cl">
            Giữa
          </span>
          <span class="font-sans sub-cl sub-text font-light">
            Rừng Vàng, Biển Bạc
          </span>
        </div>
        <div class="intro-subtitle">
          <span class="font-rosellinda main-text-cl main-text">
            chọn
          </span>
          <span class="font-sans sub-cl font-semibold">
            an vui,
          </span>
          <span class="font-rosellinda main-text-cl main-text">
            chọn
          </span>
          <span class="font-sans sub-cl font-extrabold">
            giá trị bền vững.
          </span>
        </div>
      </div>
      <div class="intro_description intro_description_first text-center mt-8">
        Đây không chỉ là nơi để bạn tìm lại an vui, mà còn là giá trị bền vững được kiến tạo cho
      </div>
      <div class="text-second text-2xl text-center mt-8  font-semibold text-intro">
        Happy Tower & Villa tại Maia Resort Ho Tram, <br>
        chốn an trú độc tôn cho những chủ nhân tinh hoa.
      </div>
      <div class="cta-schedule mt-8 text-center">
        <div class="cta-title">ĐẶT LỊCH ĐỂ TRẢI NGHIỆM</div>

        <!-- Icon power–down custom (theo thiết kế) -->
        <span class="cta-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" class="icon" xmlns="http://www.w3.org/2000/svg">

  <circle cx="12" cy="12" r="9"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-dasharray="50 8"
          stroke-dashoffset="12"/>

      <!-- Thân mũi tên -->
  <path d="M12 2v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>

      <!-- Đầu mũi tên -->
  <path d="M9.75 11.5L12 14l2.25-2.5"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </span>
      </div>


      <img src="/assets/images/arrow-down.svg" alt=""/>
      <div class="text-second text-2xl text-center mt-8  font-semibold text-intro">
        Có những nơi thiên nhiên chỉ dừng lại ở phong cảnh,
      </div>
      <div class="intro_description text-center">
        Nhưng ở Maia Resort Ho Tram,
      </div>
      <div class="text-second text-center font-semibold">
        Rừng vàng và biển bạc trở thành đặc quyền hiếm có, ôm trọn từng khoảnh khắc sống.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
  padding-top: 35vh;
}

.cta-schedule {
  text-align: center;
  padding: 16px 0 10px; /* giống khoảng cách trong mockup */
}

.cta-title {
  font-family: "SVN-Zona Pro", system-ui, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: .16em; /* tracking lớn như thiết kế */
  font-size: 14px; /* bạn có thể tăng lên 15–16 tùy mockup */
  color: #0A0A0A; /* đen nhẹ */
}

.cta-icon {
  display: inline-flex;
  margin-top: 8px; /* khoảng hở giữa chữ và icon */
  color: #111; /* màu icon */
  cursor: pointer;
}

.cta-icon .icon {
  width: 38px; /* đường kính icon ~38–40px */
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
</style>