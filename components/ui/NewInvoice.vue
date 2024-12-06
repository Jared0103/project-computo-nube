<template>
  <main class="invoice-page" role="main">
    <div class="invoice-layout">
      <section class="main-content" role="region" aria-label="Formulario de factura">
        <header class="header">
          <h1 class="title">
            Nueva Factura
          </h1>
        </header>

        <form class="invoice-form" @submit.prevent="handleSubmit">
          <InvoiceHeader />
          <InvoiceDetails />
          <InvoiceItems />
          <InvoiceFooter />
        </form>
      </section>
    </div>
  </main>
</template>

<script>
import InvoiceHeader from './InvoiceHeader.vue'
import InvoiceDetails from './InvoiceDetails.vue'
import InvoiceItems from './InvoiceItems.vue'
import InvoiceFooter from './InvoiceFooter.vue'

export default {
  name: 'NewInvoice',
  components: {
    InvoiceHeader,
    InvoiceDetails,
    InvoiceItems,
    InvoiceFooter
  },
  methods: {
    handleSubmit () {
      console.log('Formulario enviado')
    }
  }
}
</script>

<style scoped>
.invoice-page {
  background-color: #f8f8f8;
  padding: 30px;
  overflow: visible; /* Aseguramos que los elementos emergentes no se corten */
  margin-bottom: 41px;
  box-sizing: border-box;
}

.invoice-layout {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.sidebar {
  width: 26%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.main-content {
  width: 70%; /* Ajustamos para dar más espacio a los componentes */
  margin-left: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-family: Lato, sans-serif;
}

.title {
  color: #1b262c;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
}

@media (max-width: 991px) {
  .invoice-page {
    padding: 20px;
  }

  .invoice-layout {
    flex-direction: column;
  }

  .sidebar, .main-content {
    width: 100%;
    margin-left: 0;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    font-size: 28px;
    text-align: left;
  }
}
</style>
