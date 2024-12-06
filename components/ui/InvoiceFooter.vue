<template>
  <footer class="invoice-footer">
    <div class="signature-section">
      <button
        type="button"
        class="signature-button"
        aria-label="Add signature"
      >
        Usar Firma
        <span class="signature-size">170 x 50 px</span>
      </button>
    </div>

    <div class="totals-section">
      <button
        type="button"
        class="quote-button"
        aria-label="Add quote"
        @click="GoCotizacion"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9066d1ef29857009aef76713fccedd7f73e5926659703ec2048f25cdfc9081?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
          alt="Agregar cotización"
          class="quote-icon"
          aria-hidden="true"
        >
        Agregar cotización
      </button>

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
          <span>Subtotal</span>
          <span>{{ formatCurrency(subtotalAfterDiscount) }}</span>
        </div>
        <hr class="divider">
        <div class="total-row">
          <span>Total</span>
          <span>{{ formatCurrency(total) }}</span>
        </div>
      </div>
    </div>

    <div class="terms-section">
      <div class="input-group">
        <label for="terms">Términos y condiciones</label>
        <textarea
          id="terms"
          v-model="terms"
          class="terms-input"
        />
      </div>

      <div class="input-group">
        <label for="notes">Notas</label>
        <textarea
          id="notes"
          v-model="notes"
          class="notes-input"
        />
      </div>
    </div>

    <div class="resolution-section">
      <label for="resolution">Texto de Resolución</label>
      <textarea
        id="resolution"
        v-model="resolution"
        class="resolution-input"
      />
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
        class="preview-button"
        @click="$emit('preview')"
      >
        Previsualizar
      </button>
      <button
        type="button"
        class="send-button"
        @click="$emit('send')"
      >
        Enviar y agregar pago
      </button>
      <div class="save-dropdown">
        <button
          type="button"
          class="save-button"
          aria-haspopup="true"
          :aria-expanded="isDropdownOpen"
          @click="toggleDropdown"
        >
          Guardar
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6c878f1221e1bb25f1ef3bed282b0989b7f7ceb8b2199143ba476efce8928a7?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
            alt="Guardar"
            class="save-icon"
            aria-hidden="true"
          >
        </button>
        <div
          v-if="isDropdownOpen"
          class="dropdown-content"
          role="menu"
        >
          <button
            type="button"
            role="menuitem"
            @click="saveAsDraft"
          >
            Guardar como borrador
          </button>
          <button
            type="button"
            role="menuitem"
            @click="saveAndPrint"
          >
            Guardar y Imprimir
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'InvoiceFooter',
  data () {
    return {
      terms: '',
      notes: '',
      resolution: '',
      isDropdownOpen: false,
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
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    saveAsDraft () {
      this.$emit('save', 'draft')
      this.isDropdownOpen = false
    },
    saveAndPrint () {
      this.$emit('save', 'print')
      this.isDropdownOpen = false
    },
    saveAndEmail () {
      this.$emit('save', 'email')
      this.isDropdownOpen = false
    },
    cancelInvoice () {
      this.terms = ''
      this.notes = ''
      this.resolution = ''
      this.subtotal = 0
      this.discount = 0
      this.$emit('cancel') // Puede emitir cualquier evento de cancelación si es necesario
    },
    GoCotizacion () {
      this.$router.push('/ventas/Cotizacion')
    }
  }
}
</script>

<style scoped>
.invoice-footer {
  margin-top: 40px;
}

.signature-button {
  background-color: #eee;
  border: none;
  border-radius: 5px;
  padding: 28px 56px 12px;
  text-align: center;
  cursor: pointer;
}

.signature-size {
  display: block;
  font-size: 10px;
  margin-top: 5px;
}

.totals-section {
  margin-top: 30px;
}

.quote-button {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #3282b8;
  border: none;
  background: none;
  font-weight: 700;
  cursor: pointer;
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

.terms-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 30px;
}

.terms-input,
.notes-input,
.resolution-input {
  width: 100%;
  height: 60px;
  border: 1px solid #9a9a9a;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  resize: vertical;
}

.resolution-section {
  margin-top: 20px;
}

.form-actions {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.cancel-button,
.preview-button,
.send-button,
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

.preview-button {
  color: #9a9a9a;
  border: 1px solid #9a9a9a;
  background: none;
}

.send-button {
  color: #3282b8;
  border: 1px solid #3282b8;
  background: none;
}

.save-button {
  background-color: #3282b8;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.save-dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 7px 9px;
  z-index: 10;
}

.dropdown-content button {
  display: block;
  width: 100%;
  text-align: left;
  padding: 5px 0;
  border: none;
  background: none;
  color: #3282b8;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 991px) {
  .terms-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .form-actions {
    flex-wrap: wrap;
  }

  .cancel-button,
  .preview-button,
  .send-button,
  .save-button {
    width: 100%;
  }
}
</style>
