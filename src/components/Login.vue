<template>
  <div class="content main-content mt50">
    <div class="login-content content-top">
      <div class="login-title">LOGIN</div>
      <input type="text" placeholder="아이디" />
      <input type="text" placeholder="비밀번호" />
      <button class="btn-login">LOGIN</button>
      <ul>
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
        <li>회원가입</li>
      </ul>
      <button class="btn-sns-login btn-facebook">
        <img class="sns-logo" src="/static/img/logo_facebook.png" />페이스북으로 로그인
      </button>
      <button class="btn-sns-login btn-google">
        <img class="sns-logo" src="/static/img/logo_google.png" />구글로 로그인
      </button>
      <button class="btn-sns-login btn-naver">
        <img class="sns-logo" src="/static/img/logo_naver.png" />네이버로 로그인
      </button>
      <button class="btn-sns-login btn-kakao">
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

