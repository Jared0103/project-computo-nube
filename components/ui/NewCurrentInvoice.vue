<template>
  <main class="recurring-invoice" role="main">
    <div class="layout-container">
      <div class="sidebar" />
      <div class="content-wrapper">
        <header class="header-container">
          <h1 class="page-title">
            NUEVA FACTURA RECURRENTE
          </h1>
          <div class="header-actions" />
        </header>

        <form class="invoice-form" @submit.prevent="handleSubmit">
          <div class="form-grid">
            <div class="form-left-column">
              <div class="form-group">
                <label for="numeration" class="form-label">
                  Numeración<span class="required">*</span>
                </label>
                <div class="select-wrapper">
                  <select id="numeration" v-model="form.numeration" class="form-select" required>
                    <option v-for="option in numerationOptions" :key="option" :value="option">
                      {{ option }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="client" class="form-label">
                  Cliente<span class="required">*</span>
                </label>
                <div class="search-wrapper">
                  <input
                    id="client"
                    v-model="form.client"
                    type="search"
                    class="form-input"
                    placeholder="Buscar..."
                    required
                    @input="searchClient"
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="observations" class="form-label">Observaciones</label>
                <textarea
                  id="observations"
                  v-model="form.observations"
                  class="form-textarea"
                  rows="4"
                />

                <label for="invoice-notes" class="form-label">Notas de Factura</label>
                <textarea
                  id="invoice-notes"
                  v-model="form.invoiceNotes"
                  class="form-textarea"
                  rows="3"
                />
              </div>
            </div>

            <div class="form-right-column">
              <div class="date-fields">
                <div class="form-group">
                  <label for="start-date" class="form-label">
                    Fecha de inicio<span class="required">*</span>
                  </label>
                  <input
                    id="start-date"
                    v-model="form.startDate"
                    type="date"
                    class="form-input"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="last-date" class="form-label">
                    Última fecha<span class="required">*</span>
                  </label>
                  <input
                    id="last-date"
                    v-model="form.lastDate"
                    type="date"
                    class="form-input"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="term" class="form-label">
                    Término<span class="required">*</span>
                  </label>
                  <input
                    id="term"
                    v-model="form.term"
                    type="date"
                    class="form-input"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="expiration" class="form-label">
                    Fecha de expiración<span class="required">*</span>
                  </label>
                  <input
                    id="expiration"
                    v-model="form.expiration"
                    type="date"
                    class="form-input"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="frequency" class="form-label">
                    Frecuencia<span class="required">*</span>
                  </label>
                  <select id="frequency" v-model="form.frequency" class="form-select" required>
                    <option value="">
                      Seleccionar
                    </option>
                    <option v-for="freq in frequencyOptions" :key="freq" :value="freq">
                      {{ freq }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="price-list" class="form-label">
                    Lista de precio<span class="required">*</span>
                  </label>
                  <select id="price-list" v-model="form.priceList" class="form-select" required>
                    <option v-for="list in priceLists" :key="list" :value="list">
                      {{ list }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <invoice-items /> <!-- Aquí iría el componente InvoiceItems.vue -->
          <footer class="invoice-footer">
            <div class="totals-section">
              <div class="calculations">
                <div class="calc-row">
                  <span>Subtotal</span>
                  <span>{{ formatCurrency(subtotal) }}</span>
                </div>
                <div class="calc-row">
                  <span>Descuento</span>
                  <span>{{ formatCurrency(discount) }}</span>
                </div>
                <div class="calc-row">
                  <span>Subtotal después de descuento</span>
                  <span>{{ formatCurrency(subtotalAfterDiscount) }}</span>
                </div>
                <hr class="divider">
                <div class="total-row">
                  <span>Total</span>
                  <span>{{ formatCurrency(total) }}</span>
                </div>
              </div>
            </div>
            <div class="form-actions">
              <button
                type="button"
                class="cancel-button"
                @click="cancelInvoice"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="save-button"
                @click="saveInvoice"
              >
                Guardar
              </button>
            </div>
          </footer>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import InvoiceItems from './InvoiceItems.vue' // Importar el componente InvoiceItems.vue

export default {
  name: 'RecurringInvoiceForm',
  components: {
    InvoiceItems // Registrar el componente InvoiceItems
  },
  data () {
    return {
      form: {
        numeration: '',
        client: '',
        observations: '',
        invoiceNotes: '',
        startDate: '',
        lastDate: '',
        term: '',
        expiration: '',
        frequency: '',
        priceList: '',
        items: [
          { name: '', reference: '', price: 0, discount: 0, tax: 0, description: '', quantity: 1, total: 0 }
        ]
      },
      numerationOptions: ['Principal'],
      frequencyOptions: ['Semanal', 'Mensual', 'Anual'],
      priceLists: ['General'],
      totals: { subtotal: 0, discount: 0, total: 0 },
      subtotal: 0,
      discount: 0
    }
  },
  computed: {
    subtotalAfterDiscount () {
      return this.subtotal - this.discount
    },
    total () {
      return this.subtotalAfterDiscount
    }
  },
  watch: {
    // Cuando los items cambian, recalcular el total
    'form.items': 'calculateTotal'
  },
  methods: {
    calculateTotal () {
      this.subtotal = this.form.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
      this.discount = this.form.items.reduce((acc, item) => acc + item.discount, 0)
      this.totals.subtotal = this.subtotal
      this.totals.discount = this.discount
      this.totals.total = this.subtotalAfterDiscount
    },
    // Formato de moneda
    formatCurrency (value) {
      return `$${value.toFixed(2)}`
    },
    // Método para cancelar la factura
    cancelInvoice () {
      this.subtotal = 0
      this.discount = 0
      this.$emit('cancel') // Puede emitir cualquier evento de cancelación si es necesario
    },
    // Método para guardar la factura
    saveInvoice () {
      this.$emit('save') // Emite el evento de guardado
    },
    handleSubmit () {
      // Aquí enviarías `this.form` al backend
      console.log('Formulario enviado:', this.form)
    },
    searchClient () {
      // Lógica para buscar cliente desde el backend
    },
    searchItem (index) {
      // Lógica para buscar un item específico desde el backend
    },
    addRow () {
      this.form.items.push({
        name: '',
        reference: '',
        price: 0,
        discount: 0,
        tax: 0,
        description: '',
        quantity: 1,
        total: 0
      })
    },
    cancelForm () {
      // Lógica para manejar la cancelación (quizá redirigir o limpiar)
      console.log('Formulario cancelado')
    }
  }
}
</script>

<style scoped>
.recurring-invoice {
  background-color: #f8f8f8;
  padding-right: 80px;
  overflow: hidden;
}

.layout-container {
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 26%;
}

.content-wrapper {
  width: 74%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 88px;
}

.page-title {
  color: #1b262c;
  font: 700 36px Lato, sans-serif;
}

.invoice-form {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 35px;
}

.form-grid {
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  color: #000;
  font: 400 16px Lato, sans-serif;
  margin-bottom: 8px;
}

.required {
  color: #0f4c75;
  font-size: 24px;
  font-weight: 700;
  margin-left: 4px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 50px;
  padding: 8px 16px;
  font: 300 12px Lato, sans-serif;
}

.form-textarea {
  border-radius: 12px;
  resize: vertical;
}

.items-table {
  width: 100%;
  margin: 20px 0;
  border-collapse: separate;
  border-spacing: 0;
}

.items-table th {
  background: #bbe1fa;
  padding: 18px;
  font: 400 12px Lato, sans-serif;
  text-align: left;
}

.items-table td {
  padding: 8px;
}

.item-search {
  border: 1px solid #0f4c75;
  border-radius: 50px;
  padding: 8px 16px;
  width: 100%;
}

.add-row-btn {
  background: #3282b8;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 7px 12px;
  font: 700 16px Nunito, sans-serif;
  cursor: pointer;
}

.totals-section {
  margin: 20px 0;
  font: 300 12px Lato, sans-serif;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  margin-top: 25px;
}

.cancel-btn,
.submit-btn {
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 7px 15px;
  font: 700 16px Nunito, sans-serif;
  cursor: pointer;
}

.cancel-btn {
  background: #c4c4c4;
}

.submit-btn {
  background: #3282b8;
}

@media (max-width: 991px) {
  .recurring-invoice {
    padding-right: 20px;
  }

  .layout-container {
    flex-direction: column;
  }

  .sidebar,
  .content-wrapper {
    width: 100%;
  }

  .header-container {
    margin-bottom: 40px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .invoice-form {
    padding: 20px;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.invoice-footer {
  margin-top: 40px;
}

.totals-section {
  margin-top: 30px;
}

.calculations {
  margin-top: 20px;
}

.calc-row,
.total-row {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 15px 0;
}

.total-row {
  font-size: 18px;
  font-weight: 700;
}

.form-actions {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.cancel-button,
.save-button {
  padding: 9px 18px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}

.cancel-button {
  background-color: #c4c4c4;
  color: white;
  border: none;
}

.save-button {
  background-color: #3282b8;
  color: white;
  border: none;
}

</style>
