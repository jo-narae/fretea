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
  props: {
    pageName: {
      type: String,
    },
  },
  watch: {
    pageName(to) {
      this.handleScroll(to);
    }
  },
  data () {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll () {
      if(this.pageName === 'main' || this.pageName === 'shop') {
        this.scrolled = window.scrollY > 100;
      } else {
        this.scrolled = true;
      }
    }
  },
  created () {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>