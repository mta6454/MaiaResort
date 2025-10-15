<template>
    <section id="product" class="section-product">
        <div class="container text-white text-normal">
            <div class="row">
                <div class="col-5">
                    <div class="font-rosellinda text-2xl main-text">
                        Chủ đầu tư
                    </div>
                    <div class="text-2xl">
                        CÔNG TY TNHH DỰ ÁN <br>HỒ TRÀM
                    </div>
                </div>
                <div class="col-7 d-flex justify-content-between">
                    <div class="">
                        <div class="font-rosellinda text-2xl main-text">
                            Vị trí
                        </div>
                        <div class="column-margin mb-4 text-lg">
                            Xã Hồ Tràm, Thành phố Hồ Chí Minh
                        </div>
                        <div class="font-rosellinda text-2xl main-text">
                            Khởi công
                        </div>
                        <div class="column-margin mb-4 text-lg">
                            Dự kiến quý 4/2025
                        </div>
                        <div class="font-rosellinda text-2xl main-text">
                            Thương hiệu vận hành
                        </div>
                        <div class="text-size-normal">
                            <img alt="fusion logo" class="img-partner" src="/assets/images/Fusion-logo.png" />
                        </div>
                    </div>
                    <div class="">
                        <div class="font-rosellinda text-2xl main-text">
                            Diện tích
                        </div>
                        <div class="column-margin mb-4 text-lg">
                            7ha
                        </div>
                        <div class="font-rosellinda text-2xl main-text">
                            Bàn Giao
                        </div>
                        <div class="column-margin mb-4 text-lg">
                            Dự kiến quý 3/2027
                        </div>
                        <div class="font-rosellinda text-2xl main-text">
                            Đơn vị thiết kế
                        </div>
                        <div class="text-size-normal">
                            <img alt="dewan logo" class="img-partner" src="/assets/images/dewan-logo.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="devide-line my-16"></div>
            <div class="row">
                <div class="col-5 font-rosellinda text-2xl main-text">
                    Quy mô
                </div>
                <div class="col-7 d-flex justify-content-between">
                    <div class="">
                        <div class="font-rosellinda text-2xl main-text text-center">Peace Tower</div>
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="text-4xl product-number">634</div>
                            <div>CĂN<br>HỘ</div>
                        </div>
                    </div>
                    <div class="">
                        <div class="font-rosellinda text-2xl main-text text-center">Happy Tower</div>
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="text-4xl product-number">610</div>
                            <div>CĂN<br>HỘ</div>
                        </div>
                    </div>
                    <div class="">
                        <div class="font-rosellinda text-2xl main-text text-center">Biệt Thự</div>
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="text-4xl product-number">63</div>
                            <div><br>CĂN</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-wrapper">
                <div class="d-flex justify-content-between gap-4" style="height: 100%;">
                    <div class="project-item">
                        <img alt="test-image" src="/assets/images/project/project-1.jpg" width="100%" height="100%" style="object-fit: cover;"/>
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
                        <img alt="test-image" src="/assets/images/project/project-2.jpg" width="100%" height="100%" style="object-fit: cover;"/>
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
            <div class="text-center section-product-after-quote-wrapper">
                <div class="font-rosellinda main-text" style="font-size: 2.3rem;">
                    Maia Ho Tram trở lại cùng tuyệt tác
                </div>
                <div class="mt-2 text-2xl section-product-after-quote-first">
                    Happy Tower và bộ sưu tập 36 căn Villa.
                </div>
                <SectionDevide />
                <div class="text-light text-2xl section-product-after-quote-second">
                    Tiếp nối sức hút thành công từ Peace Tower
                </div>
                <div class="text-2xl">
                    97% căn hộ được mua chốt chỉ sau 1 tháng ra mắt
                </div>
            </div>
            <div class="py-8 row mt-16">
                <div class="col-md-5 d-col-prod-form"></div>
                <div class="col-md-7 col-prod-form">
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
.section-product{
    margin-top: 630px;
    @media (max-width: 1440px) {
        margin-top: 475px;
    }
}

.devide-line {
    width: 100%;
    height: 2px;
    background-color: #ffffff60;
    opacity: 50%;
    @media (max-width: 1440px) {
        margin: 20px 0 !important;
    }
}

.product-number {
    line-height: 1.1;
    margin-right: 0.5rem;
    @media (max-width: 1440px) {
        font-size: 3rem !important;
    }
}

.img-partner {
    width: 200px;
    height: 80px;
    object-fit: contain;
}

.project-wrapper {
    margin: 3.5rem 0;
    @media (max-width: 1440px) {
        margin: 1.5rem 0;
        height: 350px;
    }
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
}

.column-margin{
    @media (max-width: 1440px) {
        margin-bottom: 15px !important;
    }
}

.section-product-after-quote-first {
    margin-bottom: 4.75rem;
    @media (max-width: 1440px) {
        margin-bottom: 2rem;
    }
}

.section-product-after-quote-second {
    margin-top: 4.75rem;
    @media (max-width: 1440px) {
        margin-top: 2rem;
    }
}


@media (max-width: 768px) {
  .d-col-prod-form {
    display: none;
  }
  .col-prod-form {
    width: calc(100% - 24px);
  }
}
</style>