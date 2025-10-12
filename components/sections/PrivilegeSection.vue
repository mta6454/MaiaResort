<template>
    <section id="second-slide" class="mt-4">
        <div class="container text-center text-white">
            <div class="second-slide-title font-rosellinda text-2xl">
                Wellness từ thiên nhiên
            </div>
            <div class="second-slide-subtitle text-xl font-sans font-light">
                Không khí rừng giàu anion & gió biển ion hóa <br> tái tạo sức khỏe, cải thiện tinh thần.
            </div>
            <div class="mt-4 text-light font-sans font-normal">
                Ở đây, việc dung dưỡng thân - tâm - trí không còn là xa xỉ. Đó là hơi thở của rừng vàng giàu anion, là làn gió biển <br> ion hóa tái tạo sức khỏe, cải thiện tinh thần.
            </div>
            <div class="second-slide-wrapper">
                <!--  cái slide thứ 2 ở đây -->
            </div>
            <SectionDevide />
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
                        <div class="font-sans font-normal">Quốc gia hiện diện </div>
                    </div>
                </div>
                        
                <div class="my-8">
                    <div class="devide-line"></div>
                </div>
                <div class="flex flex-row">
                    <!-- Còn phần dưới của cái này -->
                </div>
            </div>
            <SectionDevide />
            <p class="text-2xl font-sans font-semibold">
                <span class="font-rosellinda text-3xl font-light">
                    Được ví như
                </span> "Las Vegas thu nhỏ"
            </p>
            <p class="font-sans font-normal">
                ngay tại trung tâm thủ phủ du lịch lớn nhất Việt Nam,<br>
                Maia Resort Ho Tram chính là sự đầu tư thích đáng và mang về giá trị bền vững cho tương lai
            </p>
            <!-- 3 cái card -->
        </div>

    </section>
</template>

<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
</script>
<style>
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
</style>