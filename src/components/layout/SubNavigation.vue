<template>
  <div class="menu-area" @click="slide">
    <div class="sub-menu">
      <div class="close">
        <svg xmlns='http://www.w3.org/2000/svg' width='37' height='37' viewBox='0 0 37 37'>
        <path fill='#ffffff' d='M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7
        0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z'/>
        </svg>
      </div>
      <ul>
        <li><a @click="movePage('shop')">SHOP</a></li>
        <li><a>정기구독</a></li>
        <li><a>로그인</a></li>
        <li><a>고객센터</a></li>
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
        document.querySelector('.sub-menu').style.width = "100%";
        document.querySelector('.menu-area').classList.add('menu-area-active');
      } else {
        document.querySelector('.sub-menu').style.width = "0px";
        document.querySelector('.menu-area').classList.remove('menu-area-active');
      }
    },
    movePage(page) {
      if (page === 'home') {
        this.$router.push({path: '/'});
      } else if (page === 'shop') {
        this.$router.push({path: '/shop'});
      }
    },
  }
}
</script>
