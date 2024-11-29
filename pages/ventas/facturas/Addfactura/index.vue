<template>
  <div>
    <NewCurrentInvoice />
  </div>
</template>

<script>
import NewCurrentInvoice from '~/components/ui/NewCurrentInvoice.vue'
export default {
  components: {
    NewCurrentInvoice
  },
  auth: false,
  layout: 'dashboard'
}
</script>

<style scoped>

</style>
