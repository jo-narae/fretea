<template>
  <div>
    <navigation-layer></navigation-layer>
    <router-view></router-view>
    <footer-layer></footer-layer>
  </div>
</template>

<script>
import NavigationLayer from '@/components/layout/NavigationLayer.vue'
import FooterLayer from '@/components/layout/FooterLayer.vue'

export default {
  name: 'layout',
  components: {
    NavigationLayer,
    FooterLayer,
  },
}
</script>