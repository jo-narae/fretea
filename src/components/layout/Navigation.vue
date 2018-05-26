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
.nav {
  position: relative;
  height: 44px;
  z-index: 999999;
}

.nav .logo {
  float: left;
}

.nav .logo img {
  height: 44px;
}

.nav ul.web-menu {
  position: relative;
  transform: translateY(40%);
  text-align: right;
}

.nav ul.web-menu li{
  display: inline-block;
  position: relative;
  font-weight: 700;
  padding-right: 14px;
}

.nav ul.web-menu li:after{
  content: "|";
  font-weight: 100 !important;
  font-size: 10px;
  position: fixed;
  color: #e0e0e0;
  transform: translate(7px, 15%);
}

.nav ul.web-menu li:last-child:after{
	content: "";
}

.nav ul.web-menu {
  display: block;
}
.nav ul.mobile-menu {
  display: none;
}

@media (max-width: 486px) {
  .nav {
    position: fixed;
    top: 10px;
    height: 34px;
  }

  .nav .logo {
    position: fixed;
    top: 10px;
    left: 10px;
  }

  .nav .logo img {
    height: 34px;
  }

  .more {
    position: fixed;
    top: 0;
    right: 20px;
  }

  .mobile-menu svg {
    color: #ffffff;
    width: 14px;
    height: 14px;
    opacity: 0.5;
  }

  .nav ul.mobile-menu li{
    display: inline-block;
    position: relative;
    text-align: center;
    background-color: #5e4a8a;
    padding: 3px 0 3px 0;
    width: 28px;
    border-radius: 100%;
    cursor: pointer;
  }

  .nav ul.web-menu {
    display: none;
  }
  .nav ul.mobile-menu {
    display: block;
  }
}
</style>
