<template>
  <div class="container flex flex-col items-center justify-center py-16">
    <div class="section-devide-line">
    </div>
    <div class="section-devide-dot"></div>
  </div>
</template>
<style scoped>
.section-devide-line {
  width: 1px;
  height: 3rem;
  background-color: #fff;
}
.section-devide-dot {
  margin-top: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #fff;
  border-radius: 50%;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .container {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  .section-devide-line {
    height: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .section-devide-line {
    height: 1.5rem;
  }
}
</style>