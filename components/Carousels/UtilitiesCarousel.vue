<template>
    <div class="utilities-carousel">
        <Flicking :options="{ renderOnlyVisible: true }" ref="flippingRef">
            <div v-for="(item, idx) in list" class="flicking-panel" :key="idx">
                <img :src="item?.img" alt="Utilities" />
            </div>
        </Flicking>
    </div>
</template>
<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import sectionImg from '~/assets/images/utilitiesSlide/section-4.jpg'
const list = ref([{
    img: sectionImg
}, {
    img: sectionImg
}, {
    img: sectionImg
}, {
    img: sectionImg
}]);
const flippingRef = ref<InstanceType<typeof Flicking> | null>(null);

</script>
<style scoped>
@import url("node_modules/@egjs/vue3-flicking/dist/flicking.css");
@import url("node_modules/@egjs/vue3-flicking/dist/flicking-inline.css");
</style>