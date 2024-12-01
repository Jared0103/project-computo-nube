<template>
  <div>
    <cotizacion-previu />
  </div>
</template>

<script>
import CotizacionPreviu from '~/components/ui/cotizacionPreviu.vue'
export default {
  components: {
    CotizacionPreviu
  },
  layout: 'dashboard',
  middleware: 'auth'
}
</script>

<style scoped>

</style>
