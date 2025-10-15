<template>
  <img
    :src="src"
    :alt="alt"
    :class="className"
    :style="computedStyle"
    :loading="loading"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  },
  objectFit: {
    type: String,
    default: 'cover'
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  aspectRatio: {
    type: String,
    default: undefined
  }
})

const computedStyle = computed(() => {
  const style = {
    objectFit: props.objectFit,
    width: '100%',
    height: 'auto',
    maxWidth: '100%'
  }

  if (props.aspectRatio) {
    style.aspectRatio = props.aspectRatio
  }

  return style
})
</script>

