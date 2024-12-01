<template>
  <div>
    <ventasCotiPage />
  </div>
</template>

<script>
import ventasCotiPage from '~/components/ui/ventasCotiPage.vue'
export default {
  components: {
    ventasCotiPage
  },
  auth: false,
  layout: 'dashboard'
}
</script>

<style scoped>

</style>
