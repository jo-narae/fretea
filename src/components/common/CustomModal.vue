<template>
  <div class="wrap-modal" @click="closeModal">
    <div class="modal-area">
      <div class="modal-content">
        <join-modal></join-modal>
        {{modalMsg}}
      </div>
    </div>
  </div>
</template>

<script>
import JoinModal from '@/components/common/modal/Join'

export default {
  name: 'custom-modal',
  components: {
    JoinModal,
  },
  props: {
    modalMsg: {
      type: String,
      default: '',
    },
  },
  methods: {
    openModal() {
      document.querySelector(".wrap-modal").style.display = "block";
    },
    closeModal() {
      document.querySelector(".wrap-modal").style.display = "none";
    }
  },
  mounted() {
    document.querySelector(".wrap-modal").style.display = "block";
  }
}
</script>

