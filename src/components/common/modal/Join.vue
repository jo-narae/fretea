<template>
  <div>
    <div class="modal-title">JOIN</div>
    <input type="text" name="email" placeholder="아이디" />
    <input type="password" name="password" placeholder="비밀번호" />
    <input type="password" name="rePassword" placeholder="비밀번호 확인" />
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

<style scoped>
  input {
    position: fixed;
  }
</style>
