<template>
  <div class="content main-content">
    <div class="sub-content content-top">
      <div class="login-title">회원가입</div>
      <input type="text" name="email" placeholder="아이디" />
      <input type="password" name="password" placeholder="비밀번호" />
      <input type="password" name="rePassword" placeholder="비밀번호 확인" />
      <div class="checkbox-group">
        <span class="checkbox"
        :class="[ TOSCheck ? 'active' : '']"
        @click="agreeCheck('TOS')">
          <icon name="check"></icon>
        </span>
        <span @click="agreeCheck('TOS')">이용약관 (필수)</span>
        <span class="detail-view">내용보기</span>
      </div>
      <div class="checkbox-group">
        <span class="checkbox"
        :class="[ priviteCheck ? 'active' : '']"
        @click="agreeCheck('privite')">
          <icon name="check"></icon>
        </span>
        <span @click="agreeCheck('privite')">개인정보 수집 및 이용 (필수)</span>
        <span class="detail-view">내용보기</span>
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
  data() {
    return {
      TOSCheck: false,
      priviteCheck: false,
    };
  },
  methods: {
    openModal() {
      this.$refs.login.openModal();
    },
    agreeCheck(type) {
      if (type === 'TOS') {
        this.TOSCheck = !this.TOSCheck;
      } else {
        this.priviteCheck = !this.priviteCheck;
      }
    }
  },
}
</script>