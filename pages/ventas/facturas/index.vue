<template>
  <div>
    <factura-page />
  </div>
</template>

<script>
import facturaPage from '~/components/ui/facturaPage.vue'
export default {
  name: 'FacturasRecurrentes',
  components: {
    facturaPage
  },
  auth: false,
  layout: 'dashboard'
}
</script>

<style scoped>

</style>
