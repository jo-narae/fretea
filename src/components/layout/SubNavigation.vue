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
        <li @click="movePath('/shop')">SHOP</li>
        <li>정기구독</li>
        <li @click="movePath('/login')">로그인</li>
        <li>고객센터</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Common from '@/components/common/Common'

export default {
  name: 'sub-navigation',
  mixins: [ Common ],
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
  }
}
</script>
