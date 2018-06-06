<template>
  <div>
    <layout
    :pageName="pageName"
    ></layout>
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
      this.pageName = to.meta.pageName;
    },
  },
  data () {
    return {
      pageName: 'main',
    };
  },
  created () {
    this.pageName = this.$route.meta.pageName;
  },
}
</script>