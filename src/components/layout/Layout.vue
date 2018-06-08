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
import NavigationLayer from '@/components/layout/NavigationLayer'
import FooterLayer from '@/components/layout/FooterLayer'

export default {
  name: 'layout',
  components: {
    NavigationLayer,
    FooterLayer,
  },
  watch: {
    '$route' (to) {
      this.navActive = to.meta.navActive;
      this.handleScroll();
    },
  },
  data () {
    return {
      scrolled: false,
      navActive: 'main',
    };
  },
  methods: {
    handleScroll () {
      if(!this.navActive) {
        this.scrolled = window.scrollY > 100;
      } else {
        this.scrolled = true;
      }
    },
    footerAdjust() {
      if (this.$route.meta.pageName !== 'main') {
        document.querySelector('.footer').classList.add('mt50');
      } else {
        document.querySelector('.footer').classList.remove('mt50');
      }
    }
  },
  created () {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    const meta = this.$route.meta.navActive;
    this.navActive = meta;
    this.scrolled = meta;
  },
  mounted() {
    this.footerAdjust();
  },
  updated() {
    this.footerAdjust();
  }
}
</script>