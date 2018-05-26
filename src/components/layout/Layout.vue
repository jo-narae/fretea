<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation.vue'

export default {
  name: 'layout',
  components: {
    Navigation,
  },
}
</script>