<template>
    <section id="product" class="section-product">
        <div class="container text-white text-normal">
            <div class="row">
                <div class="col-12 col-md-5">
                    <div class="font-rosellinda text-2xl main-text">
                        Chủ đầu tư
                    </div>
                    <div class="text-2xl mb-4 company-name">
                        CÔNG TY TNHH DỰ ÁN <br class="br-pc-only">HỒ TRÀM
                    </div>
                </div>
                <div class="col-12 col-md-7 d-flex gap-1 gap-md-0 justify-content-between">
                    <div class="">
                        <div class="font-rosellinda text-2xl main-text hand-draw-text section-product-name">
                            Vị trí
                        </div>
                        <div class="column-margin mb-4 text-lg text-des">
                            Xã Hồ Tràm, Thành phố Hồ Chí Minh
                        </div>
                        <div class="font-rosellinda text-2xl main-text section-product-name">
                            Khởi công
                        </div>
                        <div class="column-margin mb-4 text-lg text-des">
                            Dự kiến quý 4/2025
                        </div>
                        <div class="font-rosellinda text-2xl main-text section-product-name">
                            Thương hiệu vận hành
                        </div>
                        <div class="text-size-normal">
                            <img alt="fusion logo" class="img-partner" src="/assets/images/Fusion-logo.png" />
                        </div>
                    </div>
                    <div class="">
                        <div class="font-rosellinda text-2xl main-text section-product-name">
                            Diện tích
                        </div>
                        <div class="column-margin mb-4 text-lg text-des">
                            7ha
                        </div>
                        <div class="font-rosellinda text-2xl main-text section-product-name">
                            Bàn Giao
                        </div>
                        <div class="column-margin mb-4 text-lg text-des">
                            Dự kiến quý 3/2027
                        </div>
                        <div class="font-rosellinda text-2xl main-text section-product-name">
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
                <div class="col-12 col-md-5 font-rosellinda text-2xl main-text mb-4">
                    Quy mô
                </div>
                <div class="col-12 col-md-7 d-flex justify-content-between gap-1 gap-md-0">
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
                            <div class="text-4xl product-number">36</div>
                            <div><br>CĂN</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-wrapper">
                <div class="d-flex justify-content-between gap-4" style="height: 100%;">
                    <div class="project-item">
                        <img alt="test-image" src="/assets/images/project/project-1.jpg" loading="lazy"
                            class="project-item-img" />
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
                        <img alt="test-image" src="/assets/images/project/project-2.jpg" loading="lazy"
                            class="project-item-img" />
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
                <div class="col-lg-5 d-col-prod-form"></div>
                <div class="col-lg-7 col-12 col-prod-form">
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
import productImage1 from '~/assets/images/happyTower/1.jpg'
import productImage2 from '~/assets/images/happyTower/2.jpg'
import productImage3 from '~/assets/images/happyTower/3.jpg'
import productImage4 from '~/assets/images/happyTower/4.jpg'
import villaImage1 from '~/assets/images/villa/1.jpg'
import villaImage2 from '~/assets/images/villa/2.jpg'
const showProductPopup = ref(false)
const happyTowerData = ref([
    {
        title: 'Căn hộ',
        subtitle: 'Studio',
        description: 'Diện tích căn: <strong>35m2</strong>',
        image: productImage1
    },
    {
        title: 'Căn hộ',
        subtitle: '1 phòng ngủ',
        description: 'Diện tích căn: <strong>49m2</strong>',
        image: productImage2
    },
    {
        title: 'Căn hộ',
        subtitle: '2 phòng ngủ chuẩn',
        description: 'Diện tích căn: <strong>65m2</strong>',
        image: productImage3
    },
    {
        title: 'Căn hộ',
        subtitle: '2 phòng ngủ Luxury',
        description: 'Diện tích căn: <strong>80m2</strong>',
        image: productImage4
    },
])
const villaData = ref([
    {
        title: 'Villa',
        subtitle: '2 phòng ngủ',
        description: 'Diện tích căn: <strong>256m2</strong>',
        image: villaImage1,
    },
    {
        title: 'Villa',
        subtitle: '3 phòng ngủ',
        description: 'Diện tích căn: <strong>380m2</strong>',
        image: villaImage2,
    },
])
const currentProductData = ref(happyTowerData.value)
const handleShowProductPopup = (data: ProductPopupProps[]) => {
    currentProductData.value = data
    showProductPopup.value = true
}
</script>
<style>
.section-product {
    margin-top: 730px;

    @media (max-width: 1521px) {
        margin-top: 450px;
    }

    @media (max-width: 1440px) {
        margin-top: 475px;
    }
}

.devide-line {
    width: 100%;
    height: 2px;
    background-color: #ffffff60;
    opacity: 50%;

    @media (max-width: 1521px) {
        margin: 30px 0 !important;
    }

    @media (max-width: 1440px) {
        margin: 20px 0 !important;
    }
}

.product-number {
    line-height: 1.1;
    margin-right: 0.5rem;

    @media (max-width: 1521px) {
        font-size: 3rem !important;
    }

    @media (max-width: 1440px) {
        font-size: 3rem !important;
    }
    @media (max-width: 768px) {
        font-size: 2.25rem !important;
    }
}

.main-text{
    margin-bottom: 15px;
}

.img-partner {
    height: 80px;
    object-fit: contain;
}

.project-wrapper {
    margin: 3.5rem 0;

    @media (max-width: 1521px) {
        margin: 2rem 0;
        height: 400px;
    }

    @media (max-width: 1440px) {
        margin: 1.5rem 0;
        height: 350px;
    }
}

.project-item {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.project-item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.project-item-content {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 85, 102, 0.1), rgba(0, 150, 136, 0.1));
}

.project-item-content-button:hover {
    cursor: pointer;
}

.column-margin {
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
    .section-product {
        margin-top: 40px;
    }

    .col-prod-form {
        padding: 0;
    }

    .company-name {
        font-size: 1rem;
    }

    .d-col-prod-form {
        display: none;
    }

    .text-des {
        font-size: 14px !important;
        margin-right: 15px;
    }

    .project-wrapper {
        margin: 1rem 0;
        height: auto !important;
    }

    .br-pc-only {
        display: none;
    }

    .section-product-name {
        font-size: 1.25rem !important;
    }

    .project-wrapper .d-flex {
        flex-direction: column !important;
        gap: 1rem !important;
    }

    .project-item {
        min-height: 250px;
        height: auto;
    }

    .project-item-img {
        min-height: 250px;
        width: 100%;
        object-fit: cover;
    }

    .project-item-content {
        padding: 1rem !important;
    }

    .project-item-content-button img {
        width: 30px !important;
        height: 30px !important;
    }

    .text-uppercase {
        font-size: 1.25rem !important;
    }

    .section-product-after-quote-wrapper {
        padding: 0 1rem;
    }


    .section-product-after-quote-first,
    .section-product-after-quote-second {
        font-size: 1rem !important;
    }

    .row {
        margin-right: 0;
        margin-left: 0;
    }
}
</style>