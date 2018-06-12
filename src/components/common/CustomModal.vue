<template>
  <div class="wrap-modal" @click="closeModal">
    <div class="modal-area">
      <div v-if="modalMsg !== ''" class="modal-content">
        {{modalMsg}}
      </div>
      <div v-if="joinView !== ''" class="modal-scroll" v-html="joinView"></div>
    </div>
  </div>
</template>

<script>
import agreeTOS from '@/library/agreeTOS';
import agreePrivate from '@/library/agreeTOS';

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
      joinView: '',
    };
  },
  methods: {
    openModal(type) {
      if (type === 'TOS') {
        this.joinView = agreeTOS;
      } else if (type === 'private') {
        this.joinView = agreePrivate;
      }
      document.querySelector(".wrap-modal").style.display = "block";
    },
    closeModal(e) {
      document.querySelector(".wrap-modal").style.display = "none";
    }
  },
  mounted() {
    document.querySelector(".wrap-modal").style.display = "none";
  }
}
</script>

