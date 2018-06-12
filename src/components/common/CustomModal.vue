<template>
  <div class="wrap-modal" @click="closeModal">
    <div class="modal-area">
      <div class="modal-close" @click="closeButton">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="20" height="20" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
          <g>
            <path d="M24.9,975.1L24.9,975.1c19.8,19.8,52.1,19.8,71.9,0L975.1,96.7c19.8-19.8,19.8-52.1,0-71.9l0,0C955.3,5,923.1,5,903.3,24.9L24.9,903.3C5,923,5,955.3,24.9,975.1z"/>
            <path d="M24.9,24.9L24.9,24.9C5,44.7,5,76.9,24.9,96.7l878.4,878.4c19.8,19.8,52.1,19.8,71.9,0l0,0c19.8-19.8,19.8-52.1,0-71.9L96.7,24.9C76.9,5,44.6,5,24.9,24.9z"/>
          </g>
        </svg>
      </div>
      <div v-if="modalMsg !== ''" class="modal-content">
        {{modalMsg}}
      </div>
      <div v-if="joinView !== ''" class="modal-scroll">
        <div class="modal-title">{{modalTitle}}</div>
        <span v-html="joinView"></span>
      </div>
    </div>
  </div>
</template>

<script>
import agreeTOS from '@/library/agreeTOS';

export default {
  name: 'custom-modal',
  props: {
    modalMsg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      modalTitle: '',
      joinView: '',
    };
  },
  methods: {
    openModal(type) {
      if (type === 'TOS') {
        this.modalTitle = '이용약관';
        this.joinView = agreeTOS;
      } else if (type === 'private') {
        this.modalTitle = '개인정보 수집 및 이용';
        this.joinView = agreeTOS;
      }
      document.querySelector(".wrap-modal").style.display = "block";
    },
    closeModal(e) {
      if (e.target.className === "wrap-modal") {
        document.querySelector(".wrap-modal").style.display = "none";
      }
    },
    closeButton() {
      document.querySelector(".wrap-modal").style.display = "none";
    }
  },
  mounted() {
    document.querySelector(".wrap-modal").style.display = "none";
  }
}
</script>

