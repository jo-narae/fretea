<template>
  <div class="wrap-modal" @click="closeModal">
    <div class="modal-area">
      <div class="modal-content">
        {{modalMsg}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    modalMsg: {
      type: String,
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
    document.querySelector(".wrap-modal").style.display = "none";
  }
}
</script>

