<template>
    <section id="product" style="margin-top: 70vh;">
        <div class="container text-white text-normal">
            <div class="d-flex justify-content-between">
                <div class="">
                    <div class="font-rosellinda text-2xl main-text">
                        Chủ đầu tư
                    </div>
                    <div class="text-xl">
                        CÔNG TY TNHH DỰ ÁN <br>HỒ TRÀM
                    </div>
                </div>
                <div class="">
                    <div class="font-rosellinda text-2xl main-text">
                        Vị trí
                    </div>
                    <div class="mb-4 text-lg">
                        Xã Hồ Tràm, Thành phố Hồ Chí Minh
                    </div>
                    <div class="font-rosellinda text-2xl main-text">
                        Khởi công
                    </div>
                    <div class="mb-4 text-lg">
                        Dự kiến quý 4/2025
                    </div>
                    <div class="font-rosellinda text-2xl main-text">
                        Thương hiệu vận hành
                    </div>
                    <div class="text-size-normal">
                        <img alt="" class="img-partner" src="/assets/images/Fusion-logo.png" />
                    </div>
                </div>
                <div class="">
                    <div class="font-rosellinda text-2xl main-text">
                        Diện tích
                    </div>
                    <div class="mb-4 text-lg">
                        7ha
                    </div>
                    <div class="font-rosellinda text-2xl main-text">
                        Bàn Giao
                    </div>
                    <div class="mb-4 text-lg">
                        Dự kiến quý 3/2027
                    </div>
                    <div class="font-rosellinda text-2xl main-text">
                        Đơn vị thiết kế
                    </div>
                    <div class="text-size-normal">
                        <img alt="" class="img-partner" src="/assets/images/dewan-logo.png" />
                    </div>
                </div>
            </div>
            <div class="devide-line my-16"></div>
            tách riêng 2 component, cho component bên phải dính vào lề phải
            <div class="row">
                <div class="col-md-4 font-rosellinda text-2xl main-text">
                    Quy mô
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="font-rosellinda text-2xl main-text text-center">Peace Tower</div>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="text-4xl product-number">634</div>
                                <div>CĂN<br>HỘ</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="font-rosellinda text-2xl main-text text-center">Happy Tower</div>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="text-4xl product-number">610</div>
                                <div>CĂN<br>HỘ</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="font-rosellinda text-2xl main-text text-center">Biệt Thự</div>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="text-4xl product-number">63</div>
                                <div><br>CĂN</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="project-wrapper">
                <div class="d-flex justify-content-between gap-4">
                    <div class="project-item">
                        <img alt="test-image" src="/assets/images/project/project-1.jpg" width="100%" height="100%" />
                        <div class="project-item-content p-4 d-flex justify-content-between"
                            @click="handleShowProductPopup(happyTowerData)">
                            <div class="text-uppercase d-flex align-items-end text-2xl md:text-3xl">Happy Tower</div>
                            <div class="project-item-content-button">
                                <div class="d-flex justify-content-end mb-2">
                                    <img alt="icon" src="/assets/images/arrow-right.svg" width="45" height="45"
                                        class="me-2" />
                                </div>
                                <div class="md:text-xl">Xem thêm ảnh</div>
                            </div>
                        </div>
                    </div>
                    <div class="project-item">
                        <img alt="test-image" src="/assets/images/project/project-2.jpg" width="100%" height="100%" />
                        <div class="project-item-content p-4 d-flex justify-content-between"
                            @click="handleShowProductPopup(villaData)">
                            <div class="text-uppercase d-flex align-items-end text-2xl md:text-3xl">Villa</div>
                            <div class="project-item-content-button">
                                <div class="d-flex justify-content-end mb-2">
                                    <img alt="icon" src="/assets/images/arrow-right.svg" width="45" height="45"
                                        class="me-2" />
                                </div>
                                <div class="md:text-xl">Xem thêm ảnh</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <div class="font-rosellinda main-text" style="font-size: 2.3rem;">
                    Maia Ho Tram trở lại cùng tuyệt tác
                </div>
                <div class="mt-2 text-2xl">
                    Happy Tower và bộ sưu tập 36 căn Villa.
                </div>
                <SectionDevide />
                <div class="text-light text-2xl">
                    Tiếp nối sức hút thành công từ Peace Tower
                </div>
                <div class="text-2xl">
                    97% căn hộ được mua chốt chỉ sau 1 tháng ra mắt
                </div>
            </div>
            <div class="py-8 row mt-16">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                    <ProductForm />
                </div>
            </div>
        </div>
        <ProductPopup v-model:open="showProductPopup" :data="currentProductData" />
    </section>
</template>
<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
import ProductForm from '~/components/commons/ProductForm.vue'
import ProductPopup, { type ProductPopupProps } from '~/components/commons/ProductPopup.vue'
import project1 from '~/assets/images/project/project-1.jpg'
const showProductPopup = ref(false)
const happyTowerData = ref({
    title: 'Căn hộ',
    subtitle: '2 phòng ngủ chuẩn',
    description: 'Diện tích căn: <strong>65m2</strong>',
    images: [
        project1,
        project1,
        project1,
    ]
})
const villaData = ref({
    title: 'Villa',
    subtitle: '3 phòng ngủ chuẩn',
    description: 'Diện tích căn: <strong>100m2</strong>',
    images: [
        project1,
        project1,
        project1,
    ]
})
const currentProductData = ref(happyTowerData.value)
const handleShowProductPopup = (data: ProductPopupProps) => {
    currentProductData.value = data
    showProductPopup.value = true
}
</script>
<style>
.devide-line {
    width: 100%;
    height: 2px;
    background-color: #ffffff60;
    opacity: 50%;
}

.product-number {
    line-height: 1.1;
    margin-right: 0.5rem;
}

#product {
  /* margin-top: 70vh; */
}

.img-partner {
    width: 200px;
    height: 80px;
    object-fit: contain;
}

.project-wrapper {
    margin: 3.5rem 0;
}

.project-item {
    height: 100%;
    width: 100%;
    position: relative;

}

.project-item-content{
	position: absolute;
	bottom: 0;
	width: 100%;
	background: linear-gradient(to bottom, rgba(0, 85, 102, 0.1), rgba(0, 150, 136, 0.1));
}

.project-item-content-button:hover {
    cursor: pointer;
    /* TODO: Add animation */
}
</style>