<template>
    <div class="utilities-carousel row">
        <div class="col-md-1 row align-items-end justify-content-end">
            <div class="utilities-carousel-prev" :class="{ 'disabled': isReachStart }" @click="handlePrev">
                <img :src="arrowLeft" alt="Arrow Left" />
            </div>
            <div class="utilities-carousel-next" :class="{ 'disabled': isReachEnd }" @click="handleNext">
                <img :src="arrowRight" alt="Arrow Right" />
            </div>
        </div>
       <div class="col-md-10">
                <Flicking :hideBeforeInit="true" :firstPanelSize="'200px'" :options="flickingOptions" ref="flickingCompRef" @ready="onReady">
                    <div v-for="(item, idx) in list" class="flicking-panel" :key="idx">
                        <img :src="item?.img" alt="Utilities" class="flicking-panel-img"/>
                    </div>
                </Flicking>
       </div>
    </div>
</template>
<script setup lang="ts">
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";

import type { Ref } from 'vue'
import sectionImg from '~/assets/images/utilitiesSlide/section-4.jpg'
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
const flickingCompRef = ref<InstanceType<typeof Flicking> | null>(null)
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
} = useFlickingReactiveAPI(flickingCompRef as unknown as Ref<any>)

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
  if (flickingCompRef.value) {
    console.log('Flicking instance mounted')
  }
})
</script>
<style scoped>

.flicking-panel {
    /* 1.5 slides per viewport: 1 current + 0.5 next */
    width: calc(100% / 1.5);
}

.utilities-carousel-prev, .utilities-carousel-next {
    width: 4rem;
    cursor: pointer;
    transition: all .18s ease;
}

.utilities-carousel-prev:hover, .utilities-carousel-next:hover {
    transform: translateY(1px);
}

/* Disabled state styles */
.utilities-carousel-prev.disabled, .utilities-carousel-next.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
}

.utilities-carousel-prev.disabled:hover, .utilities-carousel-next.disabled:hover {
    transform: none;
}

.utilities-carousel-prev.disabled img, .utilities-carousel-next.disabled img {
    filter: grayscale(100%);
}
.flicking-panel-img {
    width: calc(100% - 2rem);
    aspect-ratio: 16/9;
    object-fit: cover;
    margin: 0 1rem;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .flicking-panel {
    width: 100% !important;
  }

  .utilities-carousel-prev,
  .utilities-carousel-next {
    width: 2.5rem;
  }

  .flicking-panel-img {
    width: calc(100% - 1rem);
    margin: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .utilities-carousel-prev,
  .utilities-carousel-next {
    width: 2rem;
  }

  .flicking-panel-img {
    margin: 0 0.25rem;
  }
}
</style>