<template>
  <div>
    <navigation></navigation>
    <div style="position:relative; top: 54px; z-index:-2;">
      <div style="position: absolute;
    z-index: 10;
    color: #ffffff;
    opacity: 0.6;
    font-size: 30px;
    vertical-align: middle;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);">오늘의 하루</div>
      <div style="background-color: #000000;">
        <div style="width: 100%; height: 600px; opacity: 0.4;
        background-image: url(/static/img/tea.jpg);
        background-size: cover;
        background-position: 50% 50%;"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'layout',
  components: {
      Navigation,
  },
}
</script>