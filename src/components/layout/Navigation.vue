<template>
  <div class="nav">
    <div class="logo">
      <img src="/static/img/logo.png">
    </div>
    <ul class="web-menu">
      <li>SHOP</li>
      <li>정기구독</li>
      <li>로그인</li>
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
  name: 'navigation',  
  components: {
    SubNavigation,
  },
  methods: {
    subMenuOpen() {
      this.$refs.subNav.slide();
    },
  },
}
</script>

<style>

</style>
