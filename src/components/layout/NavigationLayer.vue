<template>
  <div class="nav" :class="[ scrolled ? 'nav-color' : '']">
    <div class="logo">
      <div @click="movePath('/')">FRETEA</div>
    </div>
    <ul class="web-menu">
      <li @click="movePath('/shop')">SHOP</li>
      <li>정기구독</li>
      <li @click="movePath('/login')">로그인</li>
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
import SubNavigation from '@/components/layout/SubNavigation'
import Common from '@/components/common/Common'

export default {
  name: 'navigation-layer',
  mixins: [ Common ],
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
  },
}
</script>
