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

<style>
.wrap-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-area {
  position: relative;
  top: 50%;
  left: 50%;
  max-width: 50%;
  box-sizing: border-box;
}
.modal-content {
  width: inherit;
  height: inherit;
  padding: 30px 10px 30px 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.5) 20px 20px 80px 0px;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

@media (max-width: 486px) {
  .modal-area {
    max-width: 80%;
  }
}
</style>

