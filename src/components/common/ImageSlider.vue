<template>
  <div class="image-area">
    <div v-if="description" class="image-description">
      <div class="sub-image-title">{{description[dotActive].subTitle}}</div>
      <div class="main-image-title">{{description[dotActive].mainTitle}}</div>
      <button class="button-router">{{description[dotActive].buttonText}}</button>
    </div>
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
    <div class="image-dot-navigation">
      <ul>
        <li v-for="(images, k) in imagePath" :key="k">
          <button class="button-dot" :class="[dotActive === k ? 'button-dot-active' : '']" @click="imageView(k)"></button>
        </li>
      </ul>
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
    imagePath: {
      type: Array,
    },
    description: {
      type: Array,
    },
  },
  data() {
    return {
      percent: 0,
      imageIndex: 1,
      dotActive: 0,
      imageSlide: null,
    }
  },
  methods: {
    prev() {
      if (this.imageIndex > 1) {
        this.imageIndex -= 1;
      } else {
        this.imageIndex = 1;
      }
      this.imageView(this.imageIndex - 1);
    },
    next() {
      if (this.imageIndex < this.imagePath.length) {
        this.imageIndex += 1;
      } else {
        this.imageIndex = this.imagePath.length;
      }
      this.imageView(this.imageIndex - 1);
    },
    imageView(idx) {
      if (idx === 0) {
        this.imageIndex = 1;
        this.percent = 0;
      } else if (idx === this.imagePath.length - 1) {
        this.imageIndex = this.imagePath.length;
        this.percent = -(idx * 100);
      } else {
        this.imageIndex = idx + 1;
        this.percent = -(idx * 100);
      }
      this.dotActive = idx;
      this.animation();
    },
    animation() {
      document.querySelector('.image-listbox').style.transform = `translate3d(${this.percent}%, 0, 0`;
    },
  },
  mounted() {
    this.imageSlide = setInterval(() => {
      if (this.imageIndex >= 1) {
        if (this.imageIndex === this.imagePath.length) {
          this.imageIndex = 1;
          this.percent = 0;
        } else {
          this.percent = -(this.imageIndex * 100);
          this.imageIndex++;
        }
      }
      this.dotActive = this.imageIndex - 1;
      this.animation();
    }, 5000);
  },
  destroyed() {
    clearInterval(this.imageSlide);
  },
}
</script>
