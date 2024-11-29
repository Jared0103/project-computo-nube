<template>
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
</template>

<script>
export default {
  name: 'InvoiceFooter',
  data () {
    return {
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
  methods: {
    formatCurrency (value) {
      return `$${value.toFixed(2)}`
    },
    cancelInvoice () {
      this.subtotal = 0
      this.discount = 0
      this.$emit('cancel') // Puede emitir cualquier evento de cancelación si es necesario
    },
    saveInvoice () {
      this.$emit('save') // Emite el evento de guardado
    }
  }
}
</script>

<style scoped>
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
