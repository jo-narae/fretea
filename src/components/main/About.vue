<template>
  <div role="about">
    <!-- <div class="black-cover">
      <div class="about-content">
        <div class="about-title">Fretea</div>
        <div class="about-detail">
          Fretea는 고객님의 취향에 맞는 차를 추천하여
          정기 배송해드리는 서비스입니다
        </div>
      </div>
      <div class="about-image"></div>
    </div> -->
    <div v-for="(images, k) in imagePath" :key="k">
      <div class="about-image" :class="[images.right === true ? 'about-image-right' : '']" :style="{backgroundImage: `url(${images.path})`}"></div>
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


