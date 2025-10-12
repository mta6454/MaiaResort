<template>
    <div class="bottom-menu w-40">
        <div class="row">
            <div class="col-md-3 right-divide">
                <div class="bottom-menu-item flex items-center justify-center">
                    TÌM HIỂU THÊM
                </div>
            </div>
            <div class="col-md-3 right-divide">
                <div class="bottom-menu-item flex items-center justify-center ">
                    XEM BẢN ĐỒ
                </div>
            </div>
            <div class="col-md-3 right-divide">
                <div class="bottom-menu-item flex items-center justify-center ">
                    TƯ VẤN NGAY
                </div>
            </div>
            <div class="col-md-3">
                <div class="bottom-menu-item flex items-center justify-center">
                    360° DỰ ÁN
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bottom-menu {
    position: fixed;
    bottom: 8rem;
    left: 0;
    right: 0;
    background-color: #ECBD6A;
    border-radius: 0.75rem;
    padding: 1rem;
    margin: 0 auto;
    z-index: 100;
}

.right-divide {
    border-right: 1px solid #000;
}

.w-40 {
    width: 40%;
}
.bottom-menu-item {
    cursor: pointer;
}
</style>