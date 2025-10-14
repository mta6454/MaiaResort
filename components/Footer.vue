<template>
  <div class="footer-wrapper">
    <div class="container footer">
      <div class="row">
        <div class="col-md-4 col-12 mb-3 mb-md-0">
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
        <div class="col-md-2 col-6 mb-3 mb-md-0">
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
        <div class="col-md-2 col-6 mb-3 mb-md-0 footer-hotline">
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
        <div class="col-md-2 col-6 mb-3 mb-md-0">
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
        <div class="col-md-1 col-6 mb-3 mb-md-0 footer-social">
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

/* Desktop only - add margins */
@media (min-width: 768px) {
  .footer-hotline {
    margin-left: 30px;
  }

  .footer-social {
    margin-left: 70px;
  }
}

/* Mobile Responsive Styles */
@media (max-width: 767px) {
  .footer {
    padding: 1.5rem 0;
  }

  .footer-item-title {
    font-size: 12px !important;
  }

  .footer-item-content {
    font-size: 11px;
  }

  .socials {
    display: flex;
    justify-content: flex-start;
  }

  .socials a {
    width: 32px;
    height: 32px;
  }
}
</style>