<template>
    <div class="privilege-carousel row align-items-center">
        <div class="col-md-1">
            <div class="privilege-carousel-prev" :class="{ 'disabled': isReachStart }" @click="handlePrev">
                <img :src="arrowLeft" alt="Arrow Left" />
            </div>
        </div>
       <div class="col-md-10">
                <Flicking :hideBeforeInit="true" :firstPanelSize="'200px'" :options="flickingOptions" ref="flickingPrivilegeCompRef" @ready="onReady">
                    <div v-for="(item, idx) in list" class="flicking-panel" :key="idx">
                        <img :src="item?.img" alt="privilege" loading="lazy" class="flicking-panel-img"/>
                    </div>
                </Flicking>
       </div>
       <div class="col-md-1">
            <div class="privilege-carousel-next" :class="{ 'disabled': isReachEnd }" @click="handleNext">
                <img :src="arrowRight" alt="Arrow Right" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
import type { Ref } from 'vue'
import sectionImg from '~/assets/images/privilegeSlide/section-6.jpg'
import arrowLeft from '~/assets/images/arrow-left.svg'
import arrowRight from '~/assets/images/arrow-right.svg'
const list = ref([{
    img: sectionImg
}, {
    img: sectionImg
}, {
    img: sectionImg
}, {
    img: sectionImg
}]);
const flickingPrivilegeCompRef = ref<InstanceType<typeof Flicking> | null>(null)
// Flicking options
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
} = useFlickingReactiveAPI(flickingPrivilegeCompRef as unknown as Ref<any>)

// Methods
const onReady = (_e: any) => {}
const handlePrev = () => {
  if (!isReachStart.value) {
    moveTo(currentPanelIndex.value - 1)
  }
}

const handleNext = () => {
  if (!isReachEnd.value) {
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
}
.privilege-carousel-prev, .privilege-carousel-next {
    width: 3rem;
    cursor: pointer;
    transition: all .18s ease;
}

.privilege-carousel-prev:hover, .privilege-carousel-next:hover {
    transform: translateY(1px);
}

/* Disabled state styles */
.privilege-carousel-prev.disabled, .privilege-carousel-next.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
}

.privilege-carousel-prev.disabled:hover, .privilege-carousel-next.disabled:hover {
    transform: none;
}

.privilege-carousel-prev.disabled img, .privilege-carousel-next.disabled img {
    filter: grayscale(100%);
}

.flicking-panel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

@media (max-width: 768px) {
    .privilege-carousel {
        display: none;
    }

    .privilege-carousel-prev,
    .privilege-carousel-next {
        width: 2rem;
    }

    .flicking-panel {
        width: 100%;
        aspect-ratio: 16/9;
    }

    .flicking-panel-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .col-md-10 {
        width: 100%;
        padding: 0;
    }

    .col-md-1 {
        width: auto;
        padding: 0 0.5rem;
    }
}
</style>