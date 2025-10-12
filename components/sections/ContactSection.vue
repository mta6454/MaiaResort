<template>
  <section id="contact" class="py-16 bg-gradient-to-b from-sand/30 to-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl sm:text-3xl font-semibold text-center font-sans">Đăng ký tư vấn</h2>
      <form class="mt-8 grid grid-cols-1 gap-4 p-6 rounded-xl shadow">
        <input class="input input-bordered px-4 py-3 rounded border font-sans font-normal" placeholder="Họ và tên"/>
        <input type="tel" class="px-4 py-3 rounded border font-sans font-normal" placeholder="Số điện thoại"/>
        <input type="email" class="px-4 py-3 rounded border font-sans font-normal" placeholder="Email"/>
        <textarea class="px-4 py-3 rounded border font-sans font-normal" rows="4" placeholder="Nhu cầu của bạn"></textarea>
        <button type="submit" class="px-6 py-3 rounded bg-primary text-white font-sans font-semibold">Gửi thông tin</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
