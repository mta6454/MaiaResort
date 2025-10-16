<template>
    <transition name="fade">
        <aside v-show="open" class="menu-overlay" tabindex="0" @keydown.esc="close()" @click.self="close()"
            :class="{ 'active': open }">
            <!-- Nút đóng -->
            <button class="btn-close" type="button" @click="close" aria-label="Đóng menu">
                <span></span><span></span>
            </button>
            <div class="popup-container">
                <div class="popup-background-container">
                    <img :src="PopupBackground" alt="product" class="product-popup-img-background desktop" />
                    <img :src="PopupBackgroundMobile" alt="product" class="product-popup-img-background mobile" />
                </div>
                <div class="menu-wrap h-100 row p-4 align-items-center" @click.stop>
                    <!-- Cột trái -->
                    <div class="col-md-3">
                        <transition class="product-popup-left" name="fade-text" mode="out-in">

                            <div :key="currentPanelIndex">
                                <div class="product-popup-left-title font-rosellinda text-3xl sub-cl">{{
                                    data[currentPanelIndex]?.title }}
                                </div>
                                <div class="product-popup-left-subtitle text-2xl">{{ data[currentPanelIndex]?.subtitle
                                }}</div>
                                <div class="product-popup-left-description mt-16 text-xl"
                                    v-html="data[currentPanelIndex]?.description"></div>
                                <div class="more-button mt-16">
                                    Xem mặt bằng tầng
                                </div>
                            </div>

                        </transition>
                    </div>
                    <div class="col-md-9 row align-items-center">
                        <div class="col-md-1 ">
                            <div class="privilege-carousel-prev m-auto" :class="{ 'disabled': isReachStart }"
                                @click="handlePrev">
                                <img :src="arrowLeft" alt="Arrow Left" />
                            </div>
                        </div>
                        <div class="slider-container col-md-10">
                            <Flicking :hideBeforeInit="true" :firstPanelSize="'200px'" :options="flickingOptions"
                                ref="flickingProductCompRef" @ready="onReady">
                                <div v-for="(item, idx) in data" class="flicking-panel" :key="idx">
                                    <img :src="item.image" alt="product" class="flicking-panel-img" />
                                </div>
                            </Flicking>
                        </div>
                        <div class="col-md-1">
                            <div class="privilege-carousel-next m-auto" :class="{ 'disabled': isReachEnd }"
                                @click="handleNext">
                                <img :src="arrowRight" alt="Arrow Right" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </transition>
</template>

<script setup lang="ts">
import { watch, onBeforeUnmount, onMounted, nextTick } from 'vue'
import type { PropType, Ref } from 'vue'
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
import arrowLeft from '~/assets/images/arrow-left.svg'
import arrowRight from '~/assets/images/arrow-right.svg'
import PopupBackground from '~/assets/images/PopUp.png'
import PopupBackgroundMobile from '~/assets/images/PopupMobile.png'
export interface ProductPopupProps {
    title: string
    subtitle: string
    description: string
    image: string
}
const props = defineProps({
    open: { type: Boolean, default: false },   // v-model:open
    data: { type: Array as PropType<ProductPopupProps[]>, default: () => [] }
})
const flickingProductCompRef = ref<InstanceType<typeof Flicking> | null>(null)
const flickingOptions = reactive({
    circular: false,
    bound: true,
    duration: 500,
    defaultIndex: 0,
    align: "prev",
})

// Use Reactive API hook
const {
    currentPanelIndex,
    totalPanelCount,
    isReachStart,
    isReachEnd,
    progress,
    moveTo
} = useFlickingReactiveAPI(flickingProductCompRef as unknown as Ref<any>)


const emit = defineEmits(['update:open'])

function close() {
    emit('update:open', false)
    document.body.style.overflow = ''
}

const onReady = (_e: any) => { }

onMounted(() => {
    document.body.style.overflow = 'hidden'
    console.log('ProductPopup mounted')
    if (flickingProductCompRef.value) {
        console.log('Flicking Product instance mounted')
    }
})


watch(() => props.open, async (v) => {
    document.body.style.overflow = v ? 'hidden' : ''
    if (v) {
        await nextTick()
        if (flickingProductCompRef.value) {
            moveTo(0)
        }
    }
})

onBeforeUnmount(() => {
    document.body.style.overflow = ''
})

const handlePrev = () => {
    if (!isReachStart.value) {
        moveTo(currentPanelIndex.value - 1)
    }
}

const handleNext = () => {
    console.log(currentPanelIndex.value);

    if (!isReachEnd.value) {
        moveTo(currentPanelIndex.value + 1)
    }
}
</script>

<style scoped>
/* transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* text fade */
.fade-text-enter-active,
.fade-text-leave-active {
    transition: opacity .22s ease, transform .22s ease;
}

.fade-text-enter-from,
.fade-text-leave-to {
    opacity: 0;
    transform: translateY(6px);
}

/* overlay */
.menu-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    /* background: linear-gradient(170deg, #19a89a 0%, #0a3f54 70%, #08384a 100%); */
    color: #fff;
    outline: none;
}

/* đảm bảo nút X luôn bấm được */
.btn-close {
    position: absolute;
    top: 24px;
    right: 28px;
    z-index: 2;
    width: 36px;
    height: 36px;
    border: 0;
    background: transparent;
    cursor: pointer;
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

.popup-background-container {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
}

.popup-background-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.popup-container {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
}

.product-popup-img-background.mobile {
    display: none;
}

@media (max-width: 768px) {
    .product-popup-img-background.mobile {
        display: block;
    }

    .product-popup-img-background.desktop {
        display: none;
    }
}


.menu-wrap {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
}

.flicking-panel {
    width: calc(100%);
    aspect-ratio: 16/9;
    object-fit: cover;
}

.flicking-panel-img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
}

.privilege-carousel-prev,
.privilege-carousel-next {
    width: 3rem;
    cursor: pointer;
    transition: all .18s ease;
}

.privilege-carousel-prev:hover,
.privilege-carousel-next:hover {
    transform: translateY(1px);
}

/* Disabled state styles */
.privilege-carousel-prev.disabled,
.privilege-carousel-next.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
}

.privilege-carousel-prev.disabled:hover,
.privilege-carousel-next.disabled:hover {
    transform: none;
}

.privilege-carousel-prev.disabled img,
.privilege-carousel-next.disabled img {
    filter: grayscale(100%);
}

.product-popup-left-title {
    line-height: 1.1;
}

.more-button {
    background-color: #ECBD6A;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    width: fit-content;
}

@media (min-width: 769px) {
    .product-popup-left {
        margin-left: 64px;
    }
}
</style>