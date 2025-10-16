<template>
  <div id="register" class="product-form">
    <div class="product-form-title text-center text-3xl">Happy Tower & Villa tại Maia Resort Ho Tram</div>
    <div class="product-form-subtitle text-center mt-4">
            <span class="font-rosellinda main-text-cl text-2xl" style="margin-right: -10px;">
                Giữa
            </span>
      <span class="sub-cl text-semibold text-2xl">
                Rừng Vàng, Biển Bạc
            </span>
    </div>
    <div class="product-form-subtitle text-center mb-4">
            <span class="font-rosellinda main-text-cl text-2xl" style="margin-right: -10px;">
                chọn
            </span>
      <span class="sub-cl text-semibold text-2xl">
                An Vui,&nbsp;
            </span>
      <span class="font-rosellinda main-text-cl text-2xl" style="margin-right: -10px;">
                chọn
            </span>
      <span class="sub-cl text-semibold text-2xl">
                Giá Trị Bền Vững
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
          <label for="tenKhach" class="px-0">Xin được biết tên quý khách:</label>
        </div>

        <!-- Số điện thoại -->
        <div class="row mb-3">
          <div class="col-md-6 form-floating mb-3">
            <input type="tel" class="form-control  px-0" id="soDienThoai" placeholder="Số điện thoại">
            <label for="soDienThoai">Số điện thoại:</label>
          </div>

          <!-- Email -->
          <div class="col-md-6 form-floating mb-3">
            <input type="email" class="form-control  px-0" id="email" placeholder="Email">
            <label for="email">Email (nếu muốn):</label>
          </div>
        </div>

        <!-- Liên hệ qua -->
        <div class="mb-3 row form-check-wrapper">
          <label class="form-label col-md-4">Liên hệ cho tôi bằng:</label>
          <div class="form-check col-md-4 col-6 form-check-phone">
            <input class="form-check-input" checked type="radio" name="contactMethod" id="contactPhone"
                   value="phone">
            <label class="form-check-label" for="contactPhone">Điện thoại</label>
          </div>
          <div class="form-check form-check-email col-md-4 col-6">
            <input class="form-check-input" type="radio" name="contactMethod" id="contactEmail"
                   value="email">
            <label class="form-check-label" for="contactEmail">Email</label>
          </div>
        </div>

        <!-- Sản phẩm cần tư vấn -->
        <div class="form-floating mb-5">
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
  background: linear-gradient(to bottom, rgba(1, 66, 97, 0.9), rgba(16, 153, 135, 0.9));
  padding: 2rem;
  border-radius: 1rem;
}

.product-form-title {
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
  background: linear-gradient(to bottom, #c9a979 0%, #ecd4af 50%, #b79b70 100%);
  font-size: 1.5rem;
  font-weight: 600;
}

/* Container mỗi lựa chọn */
.form-check {
  width: 200px;
  align-items: center;
  justify-content: space-between; /* label trái – radio phải */
  gap: 12px;
  padding: 14px 18px;
  border-radius: 16px; /* nếu muốn pill */
  background: rgba(255, 255, 255, .08);
  border: 1px solid rgba(255, 255, 255, .22);
}

/* Label nằm bên trái, chiếm phần còn lại */
.form-check-label {
  order: 1;
  margin: 0; /* bỏ margin mặc định của bootstrap */
  color: #EAF7F9; /* tuỳ màu của bạn */
  flex: 1;
  float: left;
}

/* Radio nằm bên phải */
.form-check-input {
  order: 2;
  float: right;
  margin: 0;
  width: 24px;
  height: 24px;
  accent-color: #10B0A8; /* màu chấm khi checked (modern browsers) */
}

.form-input-email {
  margin-left: 25px;
}

.form-check-input:checked {
  background: radial-gradient(circle at 50% 50%, #10B0A8 50%, transparent 50%),
  radial-gradient(circle at 50% 50%, transparent 40%, #ffffff 45% 80%, rgba(255, 255, 255, .25) 81% 100%);
  box-shadow: 0 0 10px rgba(16, 230, 215, .55), 0 2px 8px rgba(0, 0, 0, .35);
  border-color: transparent;
}

.form-check-input:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(16, 230, 215, .55), 0 2px 8px rgba(0, 0, 0, .35);
}

.form-check-email {
  margin-left: 60px;
}

@supports not (appearance: none) {
  .form-check-input {
    accent-color: #10B0A8;
  }
}

#sanPham {
  margin-left: -10px;
}

@media (max-width: 768px) {
  .form-check {
    width: 150px;
  }

  .form-check-wrapper {
    gap: 10px;
  }

  .form-check-email {
    margin-left: 10px;
  }

  .form-check-phone {
    margin-left: 10px;
  }
}
</style>
<script setup lang="ts">
</script>