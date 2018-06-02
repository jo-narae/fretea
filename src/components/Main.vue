<template>
  <div class="content main-content">
    <image-slider
      :imagePath="imagePath"
      :prevNext="false"
      :description="description">
    </image-slider>
    <main-about></main-about>
    <main-process></main-process>
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
      imagePath: [
        { path: "/static/img/tea.jpg" },
        { path: "/static/img/milktea.jpg" },
        { path: "/static/img/coffee.jpg" },
      ],
      description: [
        { subTitle: 'Subscription', mainTitle: '나만의 티타임 시간을 가지세요', buttonText: '정기배송' },
        { subTitle: 'Recommend', mainTitle: '나에게 어울리는 차를 찾아보세요', buttonText: '추천 테스트' },
        { subTitle: 'Shop', mainTitle: '원하는 차만 골라서 구매하세요', buttonText: 'SHOP' }
      ]
    }
  },
}
</script>
