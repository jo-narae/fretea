<template>
  <div>
    <div class="modal-title">JOIN</div>
    <input type="text" name="email" placeholder="아이디" @click="deviceClickFocus('email')"/>
    <input type="password" name="password" placeholder="비밀번호" @click="deviceClickFocus('password')"/>
    <input type="password" name="rePassword" placeholder="비밀번호 확인" @click="deviceClickFocus('rePassword')"/>
    <button class="btn-modal">가입</button>
  </div>
</template>

<script>

export default {
  name: 'join-modal',
  methods: {
    deviceClickFocus(name) {
      document.querySelector(`input[name='${name}']`).focus();
    }
  },
}
</script>