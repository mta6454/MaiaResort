<template>
  <section id="utilities" class="">
    <div class="container text-white text-center">
      <div class="slide-title">
        <div class="slide-title-text">
          Hãy tưởng tượng một buổi sáng thức dậy, mở cửa ban công, hít căng lồng ngực làn gió mặn của <br> biển và hương
          rừng
          mát lành. Không còi xe, không khối bụi - chỉ còn sự tĩnh tại và<br> năng lượng mói mẻ cho một ngày trọn vẹn.
        </div>
        <div class="text-2xl mt-16 text-semibold">
          Ở Maia Resort Ho Tram,<br> bình yên trở thành thói quen hàng ngày.

        </div>
      </div>
      <div class="slide-wrapper w-100 py-8">
        <UtilitiesCarousel />
      </div>
      <div class="mt-16 font-rosellinda text-3xl text-light text-navy">
        Và không chỉ dừng lại ở sự tĩnh tại.
      </div>
      <div class="text-black">
        Maia Resort Ho Tram còn nằm trong lòng tổ hợp tỷ đô The Grand Ho Tram - trung tâm nghỉ dưỡng & giải trí hàng đầu
        Việt Nam.<br>
        Tại đây, quý khách được tận hưởng những đặc quyền hiếm có
      </div>
      <div class="text-black text-bold">
        sân golf đằng cấp thế giới, sân bay chuyên dụng cho khách cao cấp, cùng tổ hợp mua sắm và giải trí hiện đại.
      </div>
    </div>
    <SectionDevide />
    <div class="container text-center">
      <div class="text-navy text-2xl text-semibold">
        Một điểm đến, triệu trải nghiệm
      </div>
      <p>
        Không gian nghỉ dưỡng nơi thiên nhiên nguyên sơ giao hòa cùng tiện ích thượng lưu,<br>
        kiến tạo trải nghiệm trọn vẹn chưa từng có.
      </p>
    </div>
    <div class="mt-16 hightlight-wrapper">
      <!-- 3 cái highlight ở đây -->
    </div>
    <SectionDevide />
  </section>
</template>

<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
import UtilitiesCarousel from '~/components/Carousels/UtilitiesCarousel.vue'
</script>
