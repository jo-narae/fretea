<template>
  <div class="nav" :class="[ scrolled ? 'nav-color' : '']">
    <div class="logo">
      <div @click="movePage('home')">FRETEA</div>
    </div>
    <ul class="web-menu">
      <li><a @click="movePage('shop')">SHOP</a></li>
      <li>정기구독</li>
      <li><a @click="movePage('login')">로그인</a></li>
      <li>고객센터</li>
    </ul>
    <div class="more">
      <ul class="mobile-menu">
        <li @click="subMenuOpen">
          <icon name="align-justify"></icon><br />
        </li>
      </ul>
    </div>
    <sub-navigation ref="subNav"></sub-navigation>
  </div>
</template>

<script>
import SubNavigation from '@/components/layout/SubNavigation.vue'

export default {
  name: 'navigation-layer',
  components: {
    SubNavigation,
  },
  props: {
    scrolled: false,
  },
  methods: {
    subMenuOpen() {
      this.$refs.subNav.slide();
    },
    movePage(page) {
      if (page === 'home') {
        this.$router.push({path: '/'});
      } else if (page === 'login') {
        this.$router.push({path: '/login'});
      } else if (page === 'shop') {
        this.$router.push({path: '/shop'});
      }
      
    }
  },
}
</script>
