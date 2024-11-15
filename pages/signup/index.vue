<template>
  <signup-form />
</template>

<script>
import signupForm from '~/components/ui/signupForm.vue'

export default {
  components: {
    signupForm
  },
  auth: false,
  layout: 'login'
}
</script>

<style scoped>
</style>
