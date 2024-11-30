<template>
  <div>
    <NewInvoice />
  </div>
</template>

<script>
import NewInvoice from '~/components/ui/NewInvoice.vue'
export default {
  components: {
    NewInvoice
  },
  auth: false,
  layout: 'dashboard'
}
</script>

<style scoped>

</style>
