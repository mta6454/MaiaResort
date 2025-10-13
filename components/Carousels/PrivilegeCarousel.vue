<template>
    <div class="privilege-carousel row align-items-center">
        <div class="col-md-1">
            <div class="privilege-carousel-prev" @click="handlePrev">
                <img :src="arrowLeft" alt="Arrow Left" />
            </div>
        </div>
       <div class="col-md-10">
            <FlickingVue :options="flickingOptions" ref="flickingPrivilegeCompRef" @ready="onReady">
                <div v-for="(item, idx) in list" class="flicking-panel" :key="idx">
                    <img :src="item?.img" alt="privilege" class="flicking-panel-img"/>
                </div>
            </FlickingVue>
       </div>
       <div class="col-md-1">
            <div class="privilege-carousel-prev" @click="handleNext">
                <img :src="arrowRight" alt="Arrow Left" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import FlickingVue, { useFlickingReactiveAPI } from "@egjs/vue3-flicking";
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
const flickingPrivilegeCompRef = ref<InstanceType<typeof FlickingVue> | null>(null)
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
    /* 1.5 slides per viewport: 1 current + 0.5 next */
    width: calc(100%);
    aspect-ratio: 16/9;
    object-fit: cover;
}
.privilege-carousel-prev, .privilege-carousel-next {
    width: 3rem;
    cursor: pointer;
}
.privilege-carousel-prev:hover, .privilege-carousel-next:hover {
    transform: translateY(1px);
    transition: transform .18s ease;
}
</style>