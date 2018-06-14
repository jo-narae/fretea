<template>
  <div>
    <div class="find-title">비밀번호 찾기</div>
    <div class="find-description">가입 당시 입력한 이름과 아이디와 휴대폰 번호를 통해 비밀번호를 변경할 수 있습니다.</div>
    <input type="text" placeholder="이름" />
    <input type="text" placeholder="아이디" />
    <input type="text" placeholder="휴대폰 번호" />
    <button class="btn-login">FIND</button>
  </div>
</template>

<script>
export default {
  name: 'find-pwd',
}
</script>