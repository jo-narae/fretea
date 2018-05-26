<template>
  <div class="image-area">
    <!-- <div class="image-description">오늘의 하루</div> -->
    <div class="prev-next-area">
      <button class="arrow arrow-prev" :class="[imageIndex === 1 ? 'arrow-disable' : '']" @click="prev">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
          <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
        </svg>  
      </button>
      <button class="arrow arrow-next" :class="[imageIndex === imagePath.length ? 'arrow-disable' : '']" @click="next">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
          <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
        </svg>
      </button>
    </div>
    <div class="black-cover">
      <div class="image-wrapper">
        <div class="image-listbox">
          <div v-for="(images, k) in imagePath" :key="k" class="image-slide">
            <div class="main-image" :style="{backgroundImage: `url(${images.path})`}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'image-slider',
  props: {
    imagePath: Array,
  },
  data() {
    return {
      percent: 0,
      imageIndex: 1,
    }
  },
  methods: {
    prev() {
      if (this.imageIndex > 1) {
        this.imageIndex -= 1;
        this.percent += 100;
      } else {
        this.imageIndex = 1;
      }
      this.animation();
    },
    next() {
      if (this.imageIndex < this.imagePath.length) {
        this.imageIndex += 1;
        this.percent -= 100;
      } else {
        this.imageIndex = this.imagePath.length;
      }
      this.animation();
    },
    animation() {
      document.querySelector('.image-listbox').style.transform = `translate3d(${this.percent}%, 0, 0`;
    }
  },
}
</script>

<style scoped>
  .image-area {
    position: relative;
    overflow: hidden;
  }

  .image-description {
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

  .prev-next-area {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .image-area button {
    -webkit-appearance: none;
    background: transparent;
    border: 0;
    outline:0;
  }

  .arrow {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .arrow svg {
    width: 30px;
    height: 60px;
    opacity: 0.8;
  }

  .arrow-disable svg {
    width: 30px;
    height: 60px;
    opacity: 0.2;
  }

  .arrow-prev {
    left: 20px;
  }

  .arrow-next {
    right: 20px;
  }

  .black-cover {
    background-color: #000000;
    position: relative;
    width: 100%;
    height: auto;
    z-index: -3;
  }

  .main-image {
    visibility: visible;
    width: 100%;
    height: 600px;
    opacity: 0.4;
    background-size: cover;
    background-position: 50% 50%;
    transition: 0.3s ease;
  }

  .image-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .image-listbox {
    display: flex;
    -ms-flex-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    backface-visibility: hidden;
    transition: transform 0.5s ease, -webkit-transform 0.5s ease;
    -ms-flex-preferred-size: 147.5px;
    flex-basis: 147.5px;
  }

  .image-slide {
    -ms-flex-preferred-size: inherit;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-touch-callout: none;
    outline: none;
    width: 100%;
  }

  @media (max-width: 486px) {
    .main-image {
      height: 250px;
    }

    .arrow svg {
      width: 20px;
      height: 40px;
      opacity: 0.6;
    }

    .arrow-disable svg {
      opacity: 0.2;
    }

    .arrow svg polyline {
      stroke-width: 2;
    }

    .arrow-prev {
      left: 10px;
    }

    .arrow-next {
      right: 10px;
    }
  }
</style>
