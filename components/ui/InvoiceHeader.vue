<template>
  <div class="form-header">
    <div class="logo-section">
      <button
        type="button"
        class="logo-button"
        aria-label="Upload logo"
        @click="openLogoFileInput"
      >
        Usar Logo
      </button>
      <input
        ref="logoFileInput"
        type="file"
        accept="image/*"
        style="display: none;"
        @change="handleLogoUpload"
      >
      <!-- Mostrar logo cargado -->
      <div v-if="logoUrl" class="logo-preview">
        <img :src="logoUrl" alt="Logo cargado" class="logo-img">
      </div>
    </div>

    <div class="merchant-info">
      <span v-if="!isEditing" class="merchant-name">{{ merchantName }}</span>
      <input
        v-else
        v-model="newMerchantName"
        class="merchant-input"
        type="text"
        aria-label="Edit merchant name"
      >
      <button
        type="button"
        class="edit-button"
        aria-label="Edit merchant information"
        @click="editMerchantInfo"
      >
        {{ isEditing ? 'Guardar' : 'Editar' }}
      </button>
    </div>

    <div class="invoice-number">
      <label for="invoiceNum">No.</label>
      <input
        id="invoiceNum"
        v-model="invoiceNumber"
        type="text"
        class="number-input"
        aria-label="Invoice number"
        @input="validateInvoiceNumber"
      >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e247b0d6f354f1860a3a437f6eb7316a188d46e763ffa89c7020022ddff4cbd6?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
        class="number-icon"
        alt=""
        aria-hidden="true"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceHeader',
  data () {
    return {
      invoiceNumber: '2',
      logoUrl: null, // Para almacenar la URL del logo cargado
      merchantName: 'Ricardo Bermudez', // Nombre del comerciante
      isEditing: false, // Para controlar el estado de edición
      newMerchantName: '' // Para almacenar el nuevo nombre del comerciante mientras se edita
    }
  },
  methods: {
    // Función para abrir el input de archivo (logo)
    openLogoFileInput () {
      this.$refs.logoFileInput.click()
    },

    // Función para manejar la carga del logo
    handleLogoUpload (event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          this.logoUrl = reader.result // Guardar la URL del logo cargado
        }
        reader.readAsDataURL(file)
      }
    },

    // Función para habilitar el modo de edición
    editMerchantInfo () {
      if (this.isEditing) {
        // Guardar los cambios y salir del modo de edición
        this.merchantName = this.newMerchantName
      } else {
        // Habilitar la edición
        this.newMerchantName = this.merchantName // Pre-cargar el nombre actual
      }
      this.isEditing = !this.isEditing
    },

    // Validación del número de factura
    validateInvoiceNumber () {
      const number = this.invoiceNumber
      if (number && isNaN(number)) {
        this.invoiceNumber = number.slice(0, -1) // Elimina el último caracter si no es un número
      }
    }
  }
}
</script>

<style scoped>
.form-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px; /* Espaciado entre los elementos */
  padding: 20px 0;
  flex-wrap: wrap; /* Permitir que los elementos se ajusten en pantallas pequeñas */
}

.logo-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-button {
  background-color: #eee;
  border: none;
  border-radius: 5px;
  padding: 15px 40px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}

.merchant-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 2;
  justify-content: center;
  gap: 5px;
}

.merchant-name {
  font-size: 16px;
}

.merchant-input {
  font-size: 16px;
  padding: 5px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  width: 200px;
  text-align: center;
}

.edit-button {
  color: #0f4c75;
  font-size: 10px;
  font-weight: 700;
  border: none;
  background: none;
  cursor: pointer;
}

.invoice-number {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  align-items: center;
}

.number-input {
  width: 60px;
  padding: 5px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  text-align: center;
}

.number-icon {
  width: 15px;
  height: 15px;
}

.logo-preview {
  margin-top: 10px;
}

.logo-img {
  width: 100px;
  height: auto;
}

@media (max-width: 991px) {
  .form-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .logo-section,
  .merchant-info,
  .invoice-number {
    width: 100%;
    text-align: left;
  }

  .logo-button {
    padding: 12px 30px;
  }

  .number-input {
    width: 80px;
  }

  .edit-button {
    font-size: 12px;
  }
}
</style>
