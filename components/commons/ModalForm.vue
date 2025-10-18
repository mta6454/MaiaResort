<template>
    <transition name="fade">
        <div v-show="open" class="modal-form" :class="{'active': open}">
            <div class="modal-form-content position-relative">
                    <ProductForm />
                    <button class="btn-close" type="button" aria-label="Đóng form" @click="close">
                        <span></span><span></span>
                    </button>
            </div>
        </div>
    </transition>
</template>
<script setup lang="ts">
import ProductForm from '~/components/commons/ProductForm.vue'
const props = defineProps({
  open: {type: Boolean, default: false},   // v-model:open
  logo: {type: String, default: ''}
})
const emit = defineEmits(['update:open'])

const close = () => {
    emit('update:open', false)
}
</script>
<style scoped>
/* Fade transition animations */
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from {
    opacity: 0;
    backdrop-filter: blur(0px);
}

.fade-leave-to {
    opacity: 0;
    backdrop-filter: blur(0px);
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
    backdrop-filter: blur(4px);
}

.modal-form {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    @media (max-width: 768px) {
        padding: 1rem;
    }
}

.modal-form-content {
    animation: modalSlideIn 0.3s ease-out;
    transform-origin: center;
    @media screen and (max-width: 768px) {
        max-height: calc(100vh - 2rem);
        overflow-y: auto;
        
    }
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: scale(0.8) translateY(-20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
:deep(.product-form) {
    color: #fff;
    @media screen and (max-width: 768px) {
        padding-top: 4rem;
    }
}
.btn-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 9999;
    width: 24px;
    height: 24px;
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    animation: closeButtonSlideIn 0.4s ease-out 0.1s both;
    @media screen and (max-width: 768px) {
        width: 16px;
        height: 16px;
    }
}

.btn-close:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
}

.btn-close:active {
    transform: scale(0.95);
}

@keyframes closeButtonSlideIn {
    from {
        opacity: 0;
        transform: scale(0.5) translateY(-10px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
.btn-close span {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #fff;
    border-radius: 2px;
}
.btn-close span:first-child {
    transform: translateY(-50%) rotate(45deg);
}
.btn-close span:last-child {
    transform: translateY(-50%) rotate(-45deg);
}
</style>