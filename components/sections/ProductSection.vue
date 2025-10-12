<template>
    <section id="product" class="">
        <div class="container text-white text-normal">
            <div class="row">
                <div class="col-md-4">
                    <div class="font-rosellinda text-2xl main-text">
                        Chủ đầu tư
                    </div>
                    <div class="text-xl">
                        CÔNG TY TNHH DỰ ÁN <br>HỒ TRÀM
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-rosellinda text-2xl main-text">
                        Vị trí
                    </div>
                    <div class="mb-4 text-size-normal">
                        Xã Hồ Tràm, Thành phố Hồ Chí Minh
                    </div>
                    <div class="font-rosellinda text-2xl main-text">
                        Khởi công
                    </div>
                    <div class="mb-4 text-size-normal">
                        Dự kiến quý 4/2025
                    </div>
                    <div class="font-rosellinda text-2xl main-text">
                        Thương hiệu vận hành
                    </div>
                    <div class="text-size-normal">
                        fusion
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-rosellinda text-2xl main-text">
                        Diện tích
                    </div>
                    <div class="mb-4 text-size-normal">
                        7ha
                    </div>
                    <div class="font-rosellinda text-2xl main-text">
                        Bàn giao
                    </div>
                    <div class="mb-4 text-size-normal">
                        Dự kiến quý 3/2027
                    </div>
                    <div class="font-rosellinda text-2xl main-text">
                        Đơn vị thiết kế
                    </div>
                </div>
            </div>
            <div class="devide-line my-16"></div>
            <div class="row">
                <div class="col-md-4 font-rosellinda text-3xl main-text">
                    Quy mô
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="font-rosellinda text-3xl main-text">Peace Tower</div>
                            <div class="flex flex-row">
                                <div class="text-3xl product-number">634</div>
                                <div>CĂN<br>HỘ</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="font-rosellinda text-3xl main-text">Happy Tower</div>
                            <div class="flex flex-row">
                                <div class="text-3xl product-number">610</div>
                                <div>CĂN<br>HỘ</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="font-rosellinda text-3xl main-text">Peace Tower</div>
                            <div class="flex flex-row">
                                <div class="text-3xl product-number">63</div>
                                <div><br>CĂN</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="py-8">
                <div class="row">
                    <!-- 2 ảnh ở đây -->
                </div>
            </div>
            <div class="text-center">
                <div class="font-rosellinda text-3xl main-text">
                    Maia Ho Tram trở lại cùng tuyệt tác
                </div>
                <div>
                    Happy Tower và bộ sưu tập 36 căn Villa.
                </div>
                <SectionDevide />
                <div class="text-light">
                    Tiếp nối sức hút thành công từ Peace Tower
                </div>
                <div>
                    97% căn hộ được mua chốt chỉ sau 1 tháng ra mắt
                </div>
            </div>
            <div class="py-8 row">
                <div class="col-md-6"></div>
                <div class="col-md-6"><ProductForm /></div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import SectionDevide from '~/components/commons/SectionDevide.vue'
import ProductForm from '~/components/commons/ProductForm.vue'
</script>
<style>
.devide-line {
    width: 100%;
    height: 2px;
    background-color: #ffffff60;
}

.product-number {
    line-height: 1.1;
    margin-right: 0.5rem;
}
</style>