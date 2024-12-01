<template>
  <div>
    <cotizacionForm />
  </div>
</template>

<script>
import cotizacionForm from '~/components/ui/cotizacionForm.vue'
export default {
  components: {
    cotizacionForm
  },
  layout: 'dashboard',
  middleware: 'auth'
}
</script>

<style scoped>

</style>
