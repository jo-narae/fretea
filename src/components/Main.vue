<template>
  <div class="content main-content">
    <main-about 
      :imagePath="mainImagePath">
    </main-about>
    <main-process></main-process>
    <image-slider
      :imagePath="sliderImagePath"
      :prevNext="false"
      :description="description">
    </image-slider>
  </div>
</template>

<script>
import ImageSlider from '@/components/common/ImageSlider.vue'
import MainAbout from '@/components/main/About.vue'
import MainProcess from '@/components/main/Process.vue'

export default {
  components: {
    ImageSlider,
    MainAbout,
    MainProcess,
  },
  data() {
    return {
      mainImagePath: [
        { path: "/static/img/main_one.jpg", description: '여유를 채우는 한잔의 차를 만나보세요' },
        { path: "/static/img/main_two.jpg", description: '너무 다양한 종류의 차 때문에 고민하지 않으셨나요?', right: true },
        { path: "/static/img/main_three.jpg", description: '전문가가 골라주는 나만의 차를 즐겨보세요', right: true },
        { path: "/static/img/main_four.jpg", description: '가볍게 시작해보세요!' },
      ],
      sliderImagePath: [
        { path: "/static/img/tea.jpg" },
        { path: "/static/img/milktea.jpg" },
        { path: "/static/img/coffee.jpg" },
      ],
      description: [
        { subTitle: 'Subscription', mainTitle: '나만의 티타임 시간을 가지세요', buttonText: '정기배송' },
        { subTitle: 'Recommend', mainTitle: '나에게 어울리는 차를 찾아보세요', buttonText: '추천 테스트' },
        { subTitle: 'Shop', mainTitle: '원하는 차만 골라서 구매하세요', buttonText: '골라담기' }
      ]
    }
  },
  methods: {
    heightResize() {
      const aboutImage = document.querySelectorAll('.about-image');
      for (let i = 0; i < aboutImage.length; i += 1) {
        aboutImage[i].style.height = (window.outerHeight-110) + 'px';
      }
    },
  },
  mounted () {
    window.addEventListener('load', this.heightResize);
    window.addEventListener('resize', this.heightResize);
  }
}
</script>
