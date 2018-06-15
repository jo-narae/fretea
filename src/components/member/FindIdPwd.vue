<template>
  <div>
    <find-id></find-id>
    <find-pwd class="find-division"></find-pwd>
  </div>
</template>

<script>
import FindId from '@/components/member/FindId'
import FindPwd from '@/components/member/FindPwd'

export default {
  components: {
    FindId,
    FindPwd,
  },
}
</script>