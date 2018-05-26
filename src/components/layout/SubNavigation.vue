<template>
  <div class="menu-area" @click="slide">
    <div class="sub-menu">
      <ul>
        <li><icon name="shopping-cart"></icon> SHOP</li>
        <li><icon name="gift"></icon> 정기구독</li>
        <li><icon name="user"></icon> 로그인</li>
        <li><icon name="envelope"></icon> 고객센터</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sub-navigation',
  methods: {
    slide() {
      if(document.querySelector('.sub-menu').offsetWidth === 0) {
        document.querySelector('.sub-menu').style.width = "55%";
        document.querySelector('.menu-area').classList.add('menu-area-active');
      } else {
        document.querySelector('.sub-menu').style.width = "0px";
        document.querySelector('.menu-area').classList.remove('menu-area-active');
      }
    },
  }
}
</script>

<style>
  .sub-menu {
    font-size: 14px;
  }

  .sub-menu svg {
    color: #5e4a8a;
    width: 13px;
    height: 13px;
    padding-right: 10px;
  }

  .sub-menu-active {
    background-color: #5e4a8a;
    color: #ffffff;
    padding: 0 10px 0 10px;
    margin: 0 -10px 0 -10px;
    border-radius: 10px;
  }

  .sub-menu-active svg {
    color: #ffffff;
  }

  .menu-area-active {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.7);
  }

  .sub-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 0px;
    height: 100%;
    background: #ffffff;
    transition: 0.3s;
  }

  .sub-menu ul {
    list-style-type: none;
    text-align: left;
    line-height: 2.3;
    padding-left: 0px;
    margin: 10px 20px 10px 20px;
  }

</style>