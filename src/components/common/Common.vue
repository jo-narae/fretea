<script>
export default {
  name: 'common',
  methods: {
    movePath(to) {
      this.$router.push({path: to});
    }
  },
}
</script>