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
    }
  },
  data() {
    return {
      percent: 0,
      imageIndex: 1,
      dotActive: 0,
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
    font-weight: 400;
    vertical-align: middle;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
  }

  .sub-image-title {
    font-size: 20px;
    text-align: left;
    line-height: 1.2;
  }

  .main-image-title {
    font-size: 45px;
    text-align: left;
    line-height: 1;
  }

  .button-router {
    border: solid 3px #ffffff !important;
    margin-top: 50px;
    padding: 10px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
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
    height: 900px;
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

  .image-dot-navigation ul {
    position: absolute;
    top: 98%;
    left: 50%;
    padding: 0;
    margin: 0;
    transform: translate(-50%, -100%);
  }

  .image-dot-navigation ul li{
    display: inline-block;
    position: relative;
    padding-right: 10px;
  }

  .button-dot {
    display: inline-block;
    margin: 5px 4px;
    padding: 5px;
    border: 1px solid rgba(255, 255, 255, 0.6) !important;
    background: rgba(255, 255, 255, 0.3) !important;
    border-radius: 100%;
    overflow: hidden;
    text-indent: -9999em;
    cursor: pointer;
  }

  .button-dot-active {
    background: #ffffff !important;
  }

  @media (max-width: 486px) {
    .main-image {
      height: 300px;
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

    .button-dot {
      padding: 4px;
    }

    .sub-image-title {
      font-size: 12px;
      text-align: left;
      line-height: 1.2;
    }

    .main-image-title {
      font-size: 20px;
      text-align: left;
      line-height: 1;
    }

    .button-router[data-v-40bd17fb] {
        border: solid 2px #ffffff !important;
        margin-top: 20px;
        padding: 5px;
        font-size: 14px;
    }
  }
</style>
