<template>
  <div>
    <navigation-layer :scrolled="scrolled"></navigation-layer>
    <router-view></router-view>
    <footer-layer></footer-layer>
  </div>
</template>

<script>
import NavigationLayer from '@/components/layout/NavigationLayer.vue'
import FooterLayer from '@/components/layout/FooterLayer.vue'

export default {
  name: 'layout',
  components: {
    NavigationLayer,
    FooterLayer,
  },
  data () {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 100;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>