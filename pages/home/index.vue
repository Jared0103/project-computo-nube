<template>
  <div>
    <home-page />
  </div>
</template>

<script>
import homePage from '~/components/ui/homePage.vue'
export default {
  components: {
    homePage
  },
  layout: 'dashboard',
  middleware: 'auth'
}
</script>

<style scoped>

</style>
