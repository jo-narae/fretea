<template>
  <div role="about">
    <div v-for="(images, k) in imagePath" :key="k">
      <div class="about-image" :class="[images.right === true ? 'about-image-right' : '']" :style="{backgroundImage: `url(${images.path})`}">
        <div class="about-content">
          <div class="about-title">{{images.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'main-about',
  props: {
    imagePath: {
      type: Array,
    },
  }
}
</script>


