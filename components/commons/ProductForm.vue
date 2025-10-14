<template>
    <div id="register" class="product-form">
        <div class="product-form-title text-center text-normal">Happy Tower & Villa tại Maia Resort Ho Tram</div>
        <div class="product-form-subtitle text-center mt-4">
            <span class="font-rosellinda main-text-cl text-2xl">
                Giữa
            </span>
            <span class="sub-cl text-semibold text-2xl">
                Rừng Vàng, Biển Bạc
            </span>
        </div>
        <div class="product-form-subtitle text-center">
            <span class="font-rosellinda main-text-cl text-2xl">
                chọn
            </span>
            <span class="sub-cl text-semibold text-2xl">
                An Vui,&nbsp;
            </span>
            <span class="font-rosellinda main-text-cl text-2xl">
                chọn
            </span>
            <span class="sub-cl font-extrabold text-2xl">
                Giá Trị Bền Vững.
            </span>
        </div>
        <div class="text-center">
            <div class="font-rosellinda text-xl main-text">
                Muốn được tư vấn ngay ?
            </div>
        </div>
        <div class="mt-5">
            <form>
                <!-- Tên khách hàng -->
                <div class="form-floating mb-3">
                    <input type="text" class="form-control px-0" id="tenKhach" placeholder="Tên quý khách">
                    <label for="tenKhach" class="px-0">Xin được biết tên quý khách</label>
                </div>

                <!-- Số điện thoại -->
                <div class="row mb-3">
                    <div class="col-md-6 form-floating mb-3">
                        <input type="tel" class="form-control  px-0" id="soDienThoai" placeholder="Số điện thoại">
                        <label for="soDienThoai">Số điện thoại</label>
                    </div>

                    <!-- Email -->
                    <div class="col-md-6 form-floating mb-3">
                        <input type="email" class="form-control  px-0" id="email" placeholder="Email">
                        <label for="email">Email (nếu muốn)</label>
                    </div>
                </div>

                <!-- Liên hệ qua -->
                <div class="mb-3 row">
                    <label class="form-label col-md-6">Liên hệ cho tôi bằng:</label>
                    <div class="form-check col-md-3">
                        <input class="form-check-input" type="radio" name="contactMethod" id="contactPhone"
                            value="phone">
                        <label class="form-check-label" for="contactPhone">Điện thoại</label>
                    </div>
                    <div class="form-check col-md-3">
                        <input class="form-check-input" type="radio" name="contactMethod" id="contactEmail"
                            value="email">
                        <label class="form-check-label" for="contactEmail">Email</label>
                    </div>
                </div>

                <!-- Sản phẩm cần tư vấn -->
                <div class="form-floating mb-3">
                    <select class="form-select" id="sanPham" aria-label="Chọn sản phẩm">
                        <option selected disabled>Chọn sản phẩm cần tư vấn:</option>
                        <option value="villa">Biệt thự</option>
                        <option value="condo">Căn hộ</option>
                    </select>
                </div>

                <!-- Nút gửi -->
                <button type="submit" class="btn form-submit px-4">GỬI NGAY</button>
            </form>
        </div>

    </div>
</template>
<style scoped>
.product-form {
    /* background: linear-gradient(to bottom, rgba(0, 85, 102, 0.6), rgba(0, 150, 136, 0.6)); */
    background: linear-gradient(to bottom, rgba(1, 66, 97, 1), rgba(16, 153, 135, 1));
    padding: 2rem;
    border-radius: 1rem;
}

.product-form-title{
    font-size: 1.4rem;
}

.form-control {
    background-color: transparent;
}

.form-control:focus, .form-select:focus {
    color: #fff;
    box-shadow: none;
}

label {
    color: #fff;
}

input {
    border: none;
    border-bottom: 1px solid #ffffff60;
    border-radius: 0;
    color: #fff;
}

input::placeholder {
    color: #ffffff80;
}

select {
    border: none;
    background-color: transparent;
    color: #fff;
    border-bottom: 1px solid #ffffff60;
    border-radius: 0;
}

select option {
    background-color: #005566;
    color: #fff;
}


.form-select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
}
.form-submit {
width: fit-content;
background-color: #ECBD6A;
}
</style>