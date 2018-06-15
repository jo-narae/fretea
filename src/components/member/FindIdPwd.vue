<template>
  <div>
    <find-id></find-id>
    <find-pwd class="mt50"></find-pwd>
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