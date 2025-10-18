<template>
  <div class="utilities-carousel row position-relative">
    <div class="row align-items-md-end justify-content-md-end carousel-btn-wrapper">
      <div class="utilities-carousel-prev" :class="{ 'disabled': currentPanelIndex === 0 }" @click="handlePrev">
        <img :src="arrowLeft" alt="Arrow Left" />
      </div>
      <div class="utilities-carousel-next" @click="handleNext">
        <img :src="arrowRight" alt="Arrow Right" />
      </div>
    </div>
    <div class="col-md-10 utilities-carousel-content">
      <Flicking :hideBeforeInit="true" :firstPanelSize="'200px'" :options="flickingOptions" ref="flickingCompRef"
        @ready="onReady" :plugins="[autoplay]">
        <div v-for="(item, idx) in list" class="flicking-panel" :key="idx"
          :class="{ active: idx === currentPanelIndex }">
          <img :src="item?.img" alt="Utilities" loading="lazy" class="flicking-panel-img" />
        </div>
      </Flicking>
    </div>
  </div>
</template>
<script setup lang="ts">
import Flicking, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import type { Ref } from 'vue'
import sectionImg1 from '~/assets/images/utilitiesSlide/1.jpg'
import sectionImg2 from '~/assets/images/utilitiesSlide/2.jpg'
import sectionImg3 from '~/assets/images/utilitiesSlide/3.jpg'
import sectionImg from '~/assets/images/utilitiesSlide/section-4.jpg'

import arrowLeft from '~/assets/images/arrow-left.svg'
import arrowRight from '~/assets/images/arrow-right.svg'

const list = ref([
  {
    img: sectionImg
  },
  {
    img: sectionImg1
  }, {
    img: sectionImg2
  }, {
    img: sectionImg3
  }]);
const flickingCompRef = ref<InstanceType<typeof Flicking> | null>(null)
// Flicking options
const flickingOptions = reactive({
  circular: true,
  bound: true,
  duration: 600,
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
} = useFlickingReactiveAPI(flickingCompRef as unknown as Ref<any>)

// AutoPlay plugin
const autoplay = new AutoPlay({
  duration: 4000,
  direction: "NEXT",
  stopOnHover: true,
})

// Methods
const onReady = (_e: any) => {

}
const handlePrev = () => {
  if (!isReachStart.value) {
    moveTo(currentPanelIndex.value - 1)
  }
}

const isLastPanel = computed(() => {
  return currentPanelIndex.value === totalPanelCount.value - 2
})
// Case ảnh cuối opacity 0

const handleNext = () => {
  if (currentPanelIndex.value === totalPanelCount.value - 1) {
    moveTo(0)
  } else {
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
  width: calc(100% / 1.5);
  aspect-ratio: 16/9;
  touch-action: pan-x;
  user-select: none;

  @media (max-width: 768px) {
    aspect-ratio: 5/4;
  }
}

/* .flicking-panel:last-child {
  @media (max-width: 768px) {
    display: none;
  }
} */

.utilities-carousel-prev,
.utilities-carousel-next {
  width: 4rem;
  cursor: pointer;
  transition: all .18s ease;

  @media (max-width: 768px) {
    width: 3rem;
  }
}

.utilities-carousel-prev:hover,
.utilities-carousel-next:hover {
  transform: translateY(1px);
}

/* Disabled state styles */
.utilities-carousel-prev.disabled,
.utilities-carousel-next.disabled {
  opacity: 0.3;
  cursor: not-allowed;
  pointer-events: none;
}

.utilities-carousel-prev.disabled:hover,
.utilities-carousel-next.disabled:hover {
  transform: none;
}

.utilities-carousel-prev.disabled img,
.utilities-carousel-next.disabled img {
  filter: grayscale(100%);
}

.flicking-panel-img {
  width: calc(100% - 2rem);
  height: 100%;
  object-fit: cover;
  margin: 0 1rem;
  display: block;
}

.utilities-carousel {
  flex-wrap: nowrap;
}

.flicking-panel:not(.active) .flicking-panel-img {
  filter: brightness(.55);
}

.flicking-panel.active .flicking-panel-img {
  filter: none;
}


:root {
  --ease-smooth: cubic-bezier(.22, .61, .36, 1);
  --dur-smooth: .5s;
}

.utilities-carousel {
  -webkit-tap-highlight-color: transparent;
  overscroll-behavior: contain;
}

.flicking-panel-img {
  width: calc(100% - 2rem);
  height: 100%;
  object-fit: cover;
  margin: 0 1rem;
  display: block;
  transition: filter .5s ease;
}

.flicking-panel:not(.active) .flicking-panel-img {
  filter: brightness(.55);
}

.flicking-panel.active .flicking-panel-img {
  filter: none;
}

/* .flicking-panel:last-child {
  opacity: 0;
  visibility: hidden;
} */

.carousel-btn-wrapper {
  width: 152px;
  min-width: max-content;
}

.utilities-carousel-content {
  width: 90%;
}

@media (max-width: 768px) {
  .carousel-btn-wrapper {
    width: 0;
    padding: 0;
  }

  .utilities-carousel-prev,
  .utilities-carousel-next {
    position: absolute;
    z-index: 2;
    top: calc(50% - 0.5rem);

  }

  .utilities-carousel-prev {
    left: 1rem;
  }

  .utilities-carousel-next {
    right: 1rem;
  }

  .flicking-panel {
    width: 100%;
    z-index: 1;
  }

  .flicking-panel-img {
    width: calc(100% - 1rem);
    margin: 0 0.5rem;
    height: 100%;
    display: block;
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

  .utilities-carousel-content {
    width: 100%;
  }
}
</style>