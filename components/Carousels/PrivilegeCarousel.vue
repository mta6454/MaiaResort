<template>
    <div class="privilege-carousel row align-items-center position-relative">
        <div class="col-md-1 btn-prev-wrapper">
            <div class="privilege-carousel-prev" :class="{ 'disabled': currentPanelIndex === 0 }" @click="handlePrev">
                <img :src="arrowLeft" alt="Arrow Left" />
            </div>
        </div>
        <div class="col-md-10">
            <Flicking :hideBeforeInit="true" :firstPanelSize="'200px'" :options="flickingOptions"
                ref="flickingPrivilegeCompRef" @ready="onReady" :plugins="[autoplay]">
                <div v-for="(item, idx) in list" class="flicking-panel" :key="idx">
                    <img :src="item?.img" alt="privilege" loading="lazy" class="flicking-panel-img" />
                </div>
            </Flicking>
        </div>
        <div class="col-md-1 btn-next-wrapper">
            <div class="privilege-carousel-next" :class="{ 'disabled': currentPanelIndex === totalPanelCount - 1 }" @click="handleNext">
                <img :src="arrowRight" alt="Arrow Right" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import type { Ref } from 'vue'
import sectionImg from '~/assets/images/privilegeSlide/section-6.jpg'
import sectionImg1 from '~/assets/images/privilegeSlide/1.png'
import sectionImg2 from '~/assets/images/privilegeSlide/2.png'
import sectionImg3 from '~/assets/images/privilegeSlide/3.png'
import sectionImg4 from '~/assets/images/privilegeSlide/4.png'
import arrowLeft from '~/assets/images/arrow-left.svg'
import arrowRight from '~/assets/images/arrow-right.svg'
const list = ref([{
    img: sectionImg
}, {
    img: sectionImg1
}, {
    img: sectionImg2
}, {
    img: sectionImg3
}, {
    img: sectionImg4
}]);
const flickingPrivilegeCompRef = ref<InstanceType<typeof Flicking> | null>(null)
// Flicking options
const flickingOptions = reactive({
    circular: true,
    // bound: true,
    duration: 500,
    defaultIndex: 0,
    align: "prev",
    inputType: ["touch", "mouse"],
    preventClickOnDrag: true,
    preventDefaultOnDrag: false
})

// Use Reactive API hook
const {
    currentPanelIndex,
    totalPanelCount,
    isReachStart,
    isReachEnd,
    progress,
    moveTo
} = useFlickingReactiveAPI(flickingPrivilegeCompRef as unknown as Ref<any>)
const autoplay = new AutoPlay({
    duration: 3000,
    direction: "NEXT",
    stopOnHover: true,

})

// Methods
const onReady = (_e: any) => { }
const handlePrev = () => {
    if (currentPanelIndex.value === 0) {
        // moveTo(totalPanelCount.value - 1)
    }
     else {
        moveTo(currentPanelIndex.value - 1)
    }
}

const handleNext = () => {
    if (currentPanelIndex.value === totalPanelCount.value - 1) {
        // moveTo(0)
    } else {
        moveTo(currentPanelIndex.value + 1)
    }
}
onMounted(() => {
    if (flickingPrivilegeCompRef.value) {
        console.log('Flicking instance mounted')
    }
})
</script>
<style scoped>
.flicking-panel {
    /* 1 slide per viewport */
    width: 100%;
    aspect-ratio: 16/9;
    touch-action: pan-x;
    user-select: none;

    @media (max-width: 768px) {
        aspect-ratio: 5/4;
    }
}

.privilege-carousel-prev,
.privilege-carousel-next {
    width: 3rem;
    cursor: pointer;
    transition: all .18s ease;
}

.btn-prev-wrapper,
.btn-next-wrapper {
    width: fit-content;
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

.flicking-panel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

@media (max-width: 768px) {

    .btn-prev-wrapper,
    .btn-next-wrapper {
        position: absolute;
        top: calc(50% - 0.5rem);

        z-index: 2;
    }

    .btn-prev-wrapper {
        left: 1rem;
        height: 1rem;
    }

    .btn-next-wrapper {
        right: 1rem;
        height: 1rem;
    }

    .privilege-carousel-prev,
    .privilege-carousel-next {
        /* display: none; */
        width: 2rem;
    }

    .flicking-panel {
        width: 100%;
        aspect-ratio: 5/4;
    }

    .flicking-panel-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .col-md-10 {
        width: 100%;
        padding: 0;
        touch-action: pan-x;
    }

    .col-md-1 {
        width: auto;
        padding: 0 0.5rem;
    }
}
</style>
