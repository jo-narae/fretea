<template>
  <div>
    <div class="login-title">SIGN UP</div>
    <input type="text" name="email" placeholder="아이디" />
    <div class="msg-error mb10" v-if="idCheckError !== ''">{{idCheckError}}</div>
    <input type="password" name="password" placeholder="비밀번호" />
    <div class="msg-error mb10" v-if="pwdCheckError !== ''">{{pwdCheckError}}</div>
    <input type="password" name="rePassword" placeholder="비밀번호 확인" />
    <div class="msg-error mb20" v-if="rePwdCheckError !== ''">{{rePwdCheckError}}</div>
    <div class="checkbox-group">
      <span class="checkbox"
      :class="[ TOSCheck ? 'active' : '']"
      @click="agreeCheck('TOS')">
        <icon name="check"></icon>
      </span>
      <span @click="agreeCheck('TOS')">이용약관 (필수)</span>
      <span class="detail-view" @click="openModal('TOS')">내용보기</span>
    </div>
    <div class="checkbox-group">
      <span class="checkbox"
      :class="[ privateCheck ? 'active' : '']"
      @click="agreeCheck('private')">
        <icon name="check"></icon>
      </span>
      <span @click="agreeCheck('private')">개인정보 수집 및 이용 (필수)</span>
      <span class="detail-view" @click="openModal('private')">내용보기</span>
    </div>
    <button class="btn-login mt20" @click="movePath('joinComplete')">확인</button>
    <custom-modal
      ref="join">
    </custom-modal>
  </div>
</template>

<script>
import Common from '@/components/common/Common'
import CustomModal from '@/components/common/CustomModal'

export default {
  mixins: [ Common ],
  components: {
    CustomModal,
  },
  data() {
    return {
      TOSCheck: false,
      privateCheck: false,
      idCheckError: '',
      pwdCheckError: '',
      rePwdCheckError: '',
    };
  },
  methods: {
    openModal(type) {
      if (type === 'TOS') {
        this.$refs.join.openModal('TOS');
      } else {
        this.$refs.join.openModal('private');
      }
    },
    agreeCheck(type) {
      if (type === 'TOS') {
        this.TOSCheck = !this.TOSCheck;
      } else {
        this.privateCheck = !this.privateCheck;
      }
    }
  },
}
</script>