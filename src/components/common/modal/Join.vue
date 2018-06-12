<template>
  <div>
    <div class="modal-title">JOIN</div>
    <div class="modal-input"><input type="text" name="email" placeholder="아이디" /></div>
    <div class="modal-input"><input type="password" name="password" placeholder="비밀번호" /></div>
    <div class="modal-input"><input type="password" name="rePassword" placeholder="비밀번호 확인" /></div>
    <button class="btn-modal">가입</button>
  </div>
</template>

<script>

export default {
  name: 'join-modal',
  methods: {
  },
}
</script>