<template>
  <div class="content main-content">
    <div class="sub-content content-top">
      <div class="login-title">회원가입</div>
      <input type="text" name="email" placeholder="아이디" />
      <input type="password" name="password" placeholder="비밀번호" />
      <input type="password" name="rePassword" placeholder="비밀번호 확인" />
      <div style="padding: 10px 0 10px 0;">
        <input type="checkbox" name="check" style="width: 0px; padding: 0; position: absolute;">
        <div style="border: 1px solid; width: 24px; height: 24px; vertical-align: middle; position: absolute;"></div>
        <div style="text-align: left; margin-left: 35px;">이용약관 (필수)</div>
      </div>
      <div style="padding: 10px 0 10px 0;">
        <input type="checkbox" name="check" style="width: 0px; padding: 0; position: absolute;">
        <div style="border: 1px solid; width: 24px; height: 24px; vertical-align: middle; position: absolute;"></div>
        <div style="text-align: left; margin-left: 35px;">개인정보 수집 및 이용 (필수)</div>
      </div>
      <button class="btn-modal">JOIN</button>
      <custom-modal
        ref="login">
      </custom-modal>
    </div>
  </div>
</template>

<script>
import CustomModal from '@/components/common/CustomModal'

export default {
  name: 'join-modal',
  components: {
    CustomModal,
  },
  methods: {
    openModal() {
      this.$refs.login.openModal();
    }
  },
}
</script>