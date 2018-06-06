<template>
  <div class="content main-content">
    <main-about 
      :imagePath="mainImagePath">
    </main-about>
  </div>
</template>

<script>
import MainAbout from '@/components/main/About.vue'

export default {
  components: {
    MainAbout,
  },
  data() {
    return {
      mainImagePath: [
        { path: "/static/img/main_one.jpg", description: '여유를 채우는 한잔의 차를 만나보세요' },
        { path: "/static/img/main_two.jpg", description: '어떤 차를 마실지 고민하지 않으셨나요?', right: true },
        { path: "/static/img/main_three.jpg", description: '전문가가 골라주는 나만의 차를 즐겨보세요', right: true },
        { path: "/static/img/main_four.jpg", description: '가볍게 시작해보세요!' },
      ],
    }
  },
  methods: {
  },
}
</script>
