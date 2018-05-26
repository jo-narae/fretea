<template>
  <div class="content">
    <image-slider :imagePath="imagePath"></image-slider>
  </div>
</template>

<script>
import ImageSlider from '@/components/common/ImageSlider.vue'

export default {
  components: {
    ImageSlider,
  },
  data() {
    return {
      imagePath: [
        { path: "/static/img/tea.jpg" },
        { path: "/static/img/milktea.jpg" },
        { path: "/static/img/tea.jpg" },
      ],
    }
  },
}
</script>

<style>
</style>
