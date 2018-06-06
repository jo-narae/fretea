<template>
  <div class="content main-content mt50">
    <div class="login-content content-top">
      <span class="login-title">LOGIN</span>
      <input type="text" placeholder="아이디" />
      <input type="text" placeholder="비밀번호" />
      <button class="btn-login">LOGIN</button>
      <ul>
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
        <li>회원가입</li>
      </ul>
      <button style="padding-left:0px; text-align: left; width:100%; background-color:#405896; border: 0px; color: #fff; font-family: 'notokr-medium'">
        <img class="sns-logo" src="/static/img/logo_facebook.png" />페이스북으로 로그인
      </button>
      <button style="padding-left:0px; text-align: left; width:100%; background-color:#dd4c40; border: 0px; color: #fff; font-family: 'notokr-medium'">
        <img class="sns-logo" src="/static/img/logo_google.png" />구글로 로그인
      </button>
      <button style="padding-left:0px; text-align: left; width:100%; background-color:#1dc800; border: 0px; color: #fff; font-family: 'notokr-medium'">
        <img class="sns-logo" src="/static/img/logo_naver.png" />네이버로 로그인
      </button>
      <button style="padding-left:0px; text-align: left; width:100%; background-color:#f8d100; border: 0px; color: #000; font-family: 'notokr-bold'">
        <img class="sns-logo" src="/static/img/logo_kakao.png" />카카오로 로그인
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scrolled: true,
  },
  methods: {
  },
}
</script>

