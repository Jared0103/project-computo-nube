<template>
  <div>
    <ventas-page />
  </div>
</template>

<script>
import ventasPage from '~/components/ui/ventasPage.vue'
export default {
  components: {
    ventasPage
  },
  auth: false,
  layout: 'dashboard'
}
</script>

<style scoped>

</style>
