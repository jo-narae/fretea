<template>
  <div>
    <layout :navActive="navActive"></layout>
  </div>
</template>

<script>
import Layout from '@/components/layout/Layout'

export default {
  name: 'index',
  components: {
    Layout,
  },
  watch: {
    '$route' (to) {
      this.navActive = to.meta.navActive;
    },
  },
  data () {
    return {
      navActive: 'main',
    };
  },
  created () {
    this.navActive = this.$route.meta.navActive;
  },
}
</script>