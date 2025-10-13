<template>
  <div class="footer-wrapper">
    <div class="container footer">
      <div class="row">
        <div class="col-md-4">
          <div class="footer-item">
            <div class="footer-item-title text-size-normal text-semibold mb-1">
              Maia Sales Gallery
            </div>
            <div class="footer-item-content">
              <div class="text-light">
                23 Trần Bạch Đằng, P.An Khánh, TP.HCM
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="footer-item">
            <div class="footer-item-title text-size-normal text-semibold mb-1">
              Địa chỉ dự án
            </div>
            <div class="footer-item-content">
              <div class="text-light">
                Xã Hồ Tràm, TP.HCM
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2" style="margin-left: 30px">
          <div class="footer-item">
            <div class="footer-item-title text-size-normal text-semibold mb-1">
              Hotline
            </div>
            <div class="footer-item-content">
              <div class="text-light">
                091 180 49 88
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="footer-item">
            <div class="footer-item-title text-size-normal text-semibold mb-1">
              Email
            </div>
            <div class="footer-item-content">
              <div class="text-light">
                hotrammaia@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1" style="margin-left: 70px">
          <div class="footer-item socials">
            <a target="_blank" href="https://www.facebook.com/MaiaResortHoTram.vn" aria-label="Facebook">
              <img :src="facebookIcon" alt="Facebook" class="facebook"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import facebookIcon from "assets/images/facebook.svg";
</script>

<style scoped>
.footer-wrapper {
  background-color: rgba(0, 85, 102);
  z-index: 9999;
  position: relative;
}

.footer {
  padding: 2rem 0;
  color: #fff;
}

.socials a {
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 1.5px solid rgba(255, 255, 255, .6);
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.socials a img {
  cursor: pointer;
  width: 60%;
  height: 60%;
  object-fit: contain;
  margin: auto;
}
</style>