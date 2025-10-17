<template>
    <div class="bottom-right-menu">
        <div class="bottom-right-menu-item">
            <a href="https://www.facebook.com/maiaresorthotram" target="_blank">
                <img src="/assets/images/facebook.svg" alt="Facebook" />
            </a>
        </div>
        <div class="bottom-right-menu-item">
            <a target="_blank" href="https://vr360.maiaresorthotram.com/">
                <img :src="View360" alt="View360" class="view360" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import View360 from '~/assets/images/View360.gif'
</script>

<style scoped>
.mobile-only {
    display: none;

    @media (max-width: 768px) {
        display: flex;
    }
}

.bottom-right-menu {
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    padding: 0.5rem;
    margin: 0 auto;
    z-index: 100;
    flex-direction: column;
    gap: 16px;
    align-items: center;
}

.bottom-right-menu-item {
    width: 54px;
    height: 54px;
    border: 1px solid #fff;
    border-radius: 99px;
    padding: 0.5rem;
    width: 54px;
    height: 54px;
}

.bottom-right-menu-item:last-child {
    padding: 0;
    border: none;
    width: 60px;
    height: 60px;
    margin-right: -2px;
}
.bottom-right-menu-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>