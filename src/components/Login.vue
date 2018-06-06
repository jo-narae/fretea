<template>
  <div class="content main-content mt50">
    <div class="login-content mt50">Login
      <input style="width:100%;" type="text" placeholder="아이디" />
      <input style="width:100%;" type="text" placeholder="비밀번호" />
      <button style="width:100%; background-color:#000; border:0px; color:#fff;">LOGIN</button>
      <ul>
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
        <li>회원가입</li>
      </ul>
      <div>또는</div>
      <button style="padding-left:0px; text-align: left; width:100%; background-color:#405896; border: 0px; color: #fff;">
        <img src="/static/img/logo_facebook.png" class="snslogin" />페이스북으로 로그인
      </button>
      <button style="padding-left:0px; text-align: left; width:100%; background-color:#d54437; border: 0px; color: #fff;">
        <img src="/static/img/logo_google.png" class="snslogin" />구글로 로그인
      </button>
      <button style="padding-left:0px; text-align: left; width:100%; background-color:#1dc800; border: 0px; color: #fff;">
        <img src="/static/img/logo_naver.png" class="snslogin" />네이버로 로그인
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
<style>
.snslogin {
  width: 50px;
  border-right: 1px solid #d9d9d9;
  margin-right: 10px;
  text-align: center;
  vertical-align: middle;
}
</style>

