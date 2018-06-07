<template>
  <div>
    <navigation-layer :scrolled="scrolled"></navigation-layer>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
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
    navActive: {
      type: Boolean,
    },
  },
  watch: {
    navActive(to) {
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
      if(!this.navActive) {
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