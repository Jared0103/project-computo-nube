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
  auth: false,
  layout: 'dashboard'
}
</script>

<style scoped>

</style>
