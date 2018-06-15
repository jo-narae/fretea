<template>
  <div>
    <div class="find-title">비밀번호 찾기</div>
    <div class="find-description">가입 당시 입력한 이름과 아이디와 휴대폰 번호를 통해 비밀번호를 변경할 수 있습니다.</div>
    <dl class="input-area">
      <dt>이름</dt>
      <dd>
        <input type="text" name="username" placeholder="이름" />
        <div class="msg-error mb10" v-if="nameCheckError !== ''">{{nameCheckError}}</div>
      </dd>
    </dl>
    <dl class="input-area">
      <dt>아이디</dt>
      <dd>
        <input type="text" name="email" placeholder="아이디" />
        <div class="msg-error mb10" v-if="idCheckError !== ''">{{idCheckError}}</div>
      </dd>
    </dl>
    <dl class="input-last-area">
      <dt>휴대폰 번호</dt>
      <dd>
        <input type="text" name="phoneNumber" placeholder="휴대폰 번호" />
        <div class="msg-error mb10" v-if="phoneCheckError !== ''">{{phoneCheckError}}</div>
      </dd>
    </dl>
    <button class="btn-login">확인</button>
  </div>
</template>

<script>
export default {
  name: 'find-pwd',
  data() {
    return {
      nameCheckError: '',
      idCheckError: '',
      phoneCheckError: '',
    };
  },
}
</script>