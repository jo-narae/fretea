<template>
  <div class="content">
    <image-slider
      imagePath="/static/img/tea.jpg"
    ></image-slider>
  </div>
</template>

<script>
import ImageSlider from '@/components/common/ImageSlider.vue'

export default {
  name: 'main',
  components: {
    ImageSlider,
  },
}
</script>

<style>
</style>
