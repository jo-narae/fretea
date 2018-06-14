<template>
  <div>
    <div class="find-title">아이디 찾기</div>
    <div class="find-description">가입 당시 입력한 이름과 휴대폰 번호를 통해 아이디를 찾을 수 있습니다.</div>
    <input type="text" placeholder="이름" />
    <input type="text" name="phoneNumber" placeholder="휴대폰 번호" />
    <button class="btn-login">FIND</button>
  </div>
</template>

<script>
export default {
  name: 'find-id',
}
</script>