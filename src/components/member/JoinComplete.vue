<template>
  <div>
    <div class="login-title">WELCOME</div>
    <div class="msg-wellcome">
      FREATE 회원이 되신 것을 진심으로 환영합니다.
      FREATE와 함께 즐거운 티타임 시간을 보내세요.
      <button class="btn-login" @click="movePath('/')">메인으로</button>
    </div>
  </div>
</template>

<script>
import Common from '@/components/common/Common'
export default {
  mixins: [ Common ],
}
</script>