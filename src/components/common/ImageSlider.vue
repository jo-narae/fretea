<template>
  <div class="content">
    <div class="main-image-area">
      <!-- <div class="main-image-description">오늘의 하루</div> -->
      <div class="black-cover">
        <div class="main-image"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'image-slider',
  props: {
    imagePath: String(),
  },
  mounted() {
    document.querySelector('.main-image').style.backgroundImage = `url(${this.imagePath})`;
  }
}
</script>

<style>
  .main-image-area {
    position: relative;
  }

  .main-image-description {
    position: absolute;
    z-index: 10;
    color: #ffffff;
    opacity: 0.6;
    font-size: 30px;
    vertical-align: middle;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .black-cover {
    background-color: #000000;
  }

  .main-image {
    position: relative;
    width: 100%;
    height: 600px;
    opacity: 0.4;
    background-size: cover;
    background-position: 50% 50%;
    transition: 0.3s;
  }

  @media (max-width: 486px) {
    .main-image {
      height: 250px;
    }
  }
</style>
