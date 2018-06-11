<template>
  <div class="content">
    <div>
      <image-slider
        :imagePath="sliderImagePath"
        :prevNext="false"
        :description="description">
      </image-slider>
      준비중
    </div>
  </div>
</template>

<script>
import ImageSlider from '@/components/common/ImageSlider'

export default {
  components: {
    ImageSlider,
  },
  data() {
    return {
      sliderImagePath: [
        { path: "/static/img/top1.jpg" },
        { path: "/static/img/top2.jpg" },
        { path: "/static/img/top3.jpg" },
      ],
      description: [
        { subTitle: 'Subscription', mainTitle: '나만의 티타임 시간을 가지세요', buttonText: '정기배송' },
        { subTitle: 'Recommend', mainTitle: '나에게 어울리는 차를 찾아보세요', buttonText: '추천 테스트' },
        { subTitle: 'Shop', mainTitle: '원하는 차만 골라서 구매하세요', buttonText: '골라담기' }
      ]
    }
  },
}
</script>
