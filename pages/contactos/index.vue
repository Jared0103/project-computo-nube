<template>
  <div>
    <h1>Contactos</h1>
    <contactosForm />
  </div>
</template>

<script>
import contactosForm from '~/components/ui/contactosForm.vue'
export default {
  components: {
    contactosForm
  },
  layout: 'dashboard',
  middleware: 'auth'
}
</script>

<style scoped>

</style>
