<template>
  <div class="quotation-container">
    <div class="layout-wrapper">
      <main class="main-content">
        <header class="header">
          <h1 class="page-title">
            NUEVA COTIZACIÓN
          </h1>
        </header>
        <form class="quotation-form" @submit.prevent="saveQuotation">
          <section class="form-header">
            <div class="logo-section">
              <button type="button" class="logo-upload" tabindex="0">
                Usar Logo
              </button>
              <div class="user-details">
                <span class="user-name">Ricardo Bermudez</span>
                <button type="button" class="edit-button" tabindex="0">
                  Editar
                </button>
              </div>
              <div class="quote-number">
                <label for="quoteNum">No.</label>
                <input id="quoteNum" v-model="quoteNumber" type="text" class="number-input">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/134297010209f273c3821f73634b87c56dbe29d46b1fafc7ee3bbb4e2aead594"
                  class="number-icon"
                  alt=""
                >
              </div>
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label for="docType" class="required-field">Tipo de documento</label>
                <div class="select-wrapper">
                  <select id="docType" v-model="docType" class="form-select">
                    <option value="cotizacion">
                      Cotización
                    </option>
                    <option value="orden">
                      Orden de servicio
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="contact" class="required-field">Contacto</label>
                <div class="contact-inputs">
                  <div class="search-wrapper">
                    <select id="contact" v-model="selectedContactId" class="form-select" @change="fetchContactInfo">
                      <option value="" disabled>
                        Seleccionar contacto
                      </option>
                      <option v-for="contact in contacts" :key="contact.id" :value="contact.id">
                        {{ contact.usuario }}
                      </option>
                    </select>
                  </div>
                  <button type="button" class="add-client" @click="addNewClient">
                    Agregar nuevo Cliente
                  </button>
                </div>
              </div>
              <div class="form-group">
                <label for="taxId">ID Impuesto</label>
                <input id="taxId" v-model="clientId" type="text" class="form-input" readonly>
              </div>
              <div class="form-group">
                <label for="phone">Teléfono</label>
                <input id="phone" v-model="phone" type="tel" class="form-input" readonly>
              </div>
              <div class="form-group">
                <label for="date" class="required-field">Fecha</label>
                <input id="date" v-model="date" type="date" class="form-input">
              </div>
              <div class="form-group">
                <label for="dueDate" class="required-field">Fecha de Vencimiento</label>
                <input id="dueDate" v-model="dueDate" type="date" class="form-input">
              </div>
            </div>
          </section>

          <section class="items-section">
            <div class="items-header">
              <span class="header-item">Item</span>
              <span class="header-item">Referencia</span>
              <span class="header-item">Precio</span>
              <span class="header-item">Desc%</span>
              <span class="header-item">Impuesto</span>
              <span class="header-item">Descripción</span>
              <span class="header-item">Cantidad</span>
              <span class="header-item">Total</span>
            </div>

            <div v-for="(item, index) in items" :key="index" class="item-row">
              <input v-model="item.nombre" type="text" placeholder="Buscar item" class="item-input">
              <input v-model="item.referencia" type="text" placeholder="Referencia" class="item-input">
              <input v-model="item.precio" type="number" placeholder="Precio" class="item-input">
              <input v-model="item.descuento" type="number" placeholder="%" class="item-input">
              <input v-model="item.impuesto" type="text" placeholder="Impuesto" class="item-input">
              <input v-model="item.descripcion" type="text" placeholder="Descripción" class="item-input">
              <input v-model="item.cantidad" type="number" placeholder="Cantidad" class="item-input">
              <div class="total-amount">
                {{ calculateItemTotal(item) }}
              </div>
            </div>

            <button type="button" class="add-row" @click="addItem">
              Agregar nueva fila
            </button>
          </section>

          <section class="summary-section">
            <div class="totals">
              <div class="total-row">
                <span class="total-label">Subtotal</span>
                <span class="total-value">{{ calculateSubtotal }}</span>
              </div>
              <div class="total-row">
                <span class="total-label">Total</span>
                <span class="total-value">{{ calculateTotal }}</span>
              </div>
            </div>
          </section>

          <div class="notes-section">
            <label for="notes">Notas</label>
            <textarea id="notes" v-model="notes" class="notes-input" />
          </div>

          <div class="form-actions">
            <button type="button" class="cancel-button" @click="cancel">
              Cancelar
            </button>
            <button type="submit" class="submit-button">
              Guardar
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      quoteNumber: '',
      docType: 'cotizacion',
      selectedContactId: '',
      clientId: '',
      phone: '',
      date: '',
      dueDate: '',
      contacts: [],
      items: [
        {
          nombre: '',
          referencia: '',
          precio: 0,
          descuento: 0,
          impuesto: '',
          descripcion: '',
          cantidad: 1
        }
      ],
      notes: ''
    }
  },
  computed: {
    calculateSubtotal () {
      return this.items.reduce((acc, item) => acc + this.calculateItemTotal(item), 0)
    },
    calculateTotal () {
      return this.calculateSubtotal
    }
  },
  created () {
    this.loadContacts() // Cargar contactos al iniciar
  },
  methods: {
    async loadContacts () {
      try {
        const response = await axios.get('http://localhost:3020/api/v1/empleados')
        console.log(response.data) // Verifica la estructura de los datos

        if (response.data && Array.isArray(response.data.empleados)) {
          this.contacts = response.data.empleados
        } else if (response.data && response.data.empleados && typeof response.data.empleados === 'object') {
          this.contacts = Object.values(response.data.empleados)
        } else {
          console.error('No se encontró la propiedad empleados o no es un arreglo:', response.data)
        }
      } catch (error) {
        console.error('Error cargando contactos:', error)
      }
    },
    fetchContactInfo () {
      const selectedContact = this.contacts.find(contact => contact.id === this.selectedContactId)
      if (selectedContact) {
        this.clientId = selectedContact.id
        this.phone = selectedContact.telefono
      } else {
        this.clientId = ''
        this.phone = ''
      }
    },
    addNewClient () {
      this.selectedContactId = ''
      this.clientId = ''
      this.phone = ''
    },
    addItem () {
      this.items.push({
        nombre: '',
        referencia: '',
        precio: 0,
        descuento: 0,
        impuesto: '',
        descripcion: '',
        cantidad: 1
      })
    },
    calculateItemTotal (item) {
      // Calcular el precio con descuento
      const discountAmount = (item.precio * item.descuento) / 100
      const priceAfterDiscount = item.precio - discountAmount
      return priceAfterDiscount * item.cantidad
    },
    cancel () {
      // Reiniciar el formulario
      this.quoteNumber = ''
      this.docType = 'cotizacion'
      this.selectedContactId = ''
      this.clientId = ''
      this.phone = ''
      this.date = ''
      this.dueDate = ''
      this.items = [
        {
          nombre: '',
          referencia: '',
          precio: 0,
          descuento: 0,
          impuesto: '',
          descripcion: '',
          cantidad: 1
        }
      ]
      this.notes = ''
    },
    getState () {
      // Verificar si la fecha de creación y vencimiento está dentro de un intervalo válido
      const currentDate = new Date()
      const creationDate = new Date(this.date)
      const dueDate = new Date(this.dueDate)

      if (currentDate >= creationDate && currentDate <= dueDate) {
        return 'activa'
      }
      return 'inactiva'
    },
    async saveQuotation () {
      const quotation = {
        id: this.quoteNumber,
        numero: this.quoteNumber,
        cliente: this.clientId,
        creacion: this.date,
        vencimiento: this.dueDate,
        estado: this.getState(),
        total: this.calculateTotal,
        referencia: this.items.map(item => item.referencia).join(', '),
        descripcion: this.items.map(item => item.descripcion).join(', '),
        cantidad: this.items.map(item => item.cantidad).join(', '),
        nota: this.notes
      }

      try {
        // Enviar al backend
        await axios.post('http://localhost:3020/api/v1/cotizaciones/create', quotation)
        alert('Cotización guardada con éxito')
      } catch (error) {
        console.error('Error guardando la cotización:', error)
        alert('Hubo un error al guardar la cotización')
      }
    }
  }
}
</script>

<style scoped>
.quotation-container {
  background: #F8F8F8;
  min-height: 100vh;
}

.layout-wrapper {
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 26%;
  background: #0F4C75;
  border-radius: 0 50px 0 0;
  padding: 80px 0;
}

.nav-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  font: 700 18px Lato, sans-serif;
}

.logo-text {
  font-size: 36px;
  margin-bottom: 114px;
}

.nav-item {
  margin: 29px 0;
  padding: 33px 70px;
}

.nav-item.active {
  background: #BBE1FA;
  color: #0F4C75;
  border-radius: 50px 0 0 50px;
}

.main-content {
  flex: 1;
  padding: 40px;
  width: 80%; /* Define un ancho relativo */
  max-width: 1200px; /* Añade un límite máximo */
  margin: 0 auto; /* Centra horizontalmente */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 88px;
}

.page-title {
  color: #1B262C;
  font: 700 36px Lato, sans-serif;
}

.user-profile {
  display: flex;
  gap: 23px;
  align-items: center;
}

.profile-image {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.username {
  color: #1B262C;
  font: 700 18px Lato, sans-serif;
}

.role {
  color: #0F4C75;
  font: 700 14px Lato, sans-serif;
}

.quotation-form {
  background: #FFF;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px;
}

.form-header {
  margin-bottom: 30px;
}

.logo-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
}

.logo-upload {
  background: #EEE;
  border-radius: 5px;
  padding: 28px 70px;
  border: none;
  cursor: pointer;
}

.user-details {
  text-align: right;
}

.user-name {
  display: block;
  margin-bottom: 5px;
}

.edit-button {
  color: #0F4C75;
  font-size: 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.quote-number {
  display: flex;
  align-items: center;
  gap: 10px;
}

.number-input {
  border-radius: 5px;
  border: 1px solid #C4C4C4;
  padding: 11px 9px;
  width: 60px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.required-field::after {
  content: '*';
  color: #0F4C75;
  margin-left: 5px;
}

.form-input,
.form-select {
  border-radius: 50px;
  border: 1px solid #C4C4C4;
  padding: 6px 18px;
}

.contact-inputs {
  display: flex;
  gap: 14px;
}

.search-wrapper {
  position: relative;
  flex: 1;
}

.search-icon {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
}

.add-client {
  color: #0F4C75;
  font-size: 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.items-section {
  margin-top: 30px;
}

.items-header {
  background: #3282B8;
  color: #FFF;
  padding: 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
}

.item-row {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  padding: 10px;
  border-bottom: 1px solid #EEE;
}

.item-input {
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  padding: 8px;
  width: 100px;
}

.add-row {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #3282B8;
  color: #FFF;
  border: none;
  border-radius: 10px;
  padding: 7px 12px;
  margin: 20px 0;
  cursor: pointer;
}

.summary-section {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}

.signature-upload {
  background: #EEE;
  border-radius: 5px;
  padding: 28px 56px;
  text-align: center;
}

.totals {
  width: 300px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.grand-total {
  font-weight: 700;
  font-size: 18px;
  margin-top: 20px;
}

.notes-section {
  margin: 30px 0;
}

.notes-input {
  width: 100%;
  height: 60px;
  border: 1px solid #9A9A9A;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.cancel-button,
.submit-button {
  border: none;
  border-radius: 5px;
  padding: 9px 20px;
  color: #FFF;
  cursor: pointer;
  font: 700 16px Nunito, sans-serif;
}

.cancel-button {
  background: #C4C4C4;
}

.submit-button {
  background: #3282B8;
}

@media (max-width: 991px) {
  .layout-wrapper {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding: 40px 20px;
  }

  .nav-item {
    padding: 20px;
  }

  .main-content {
    padding: 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .items-header,
  .item-row {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .summary-section {
    flex-direction: column;
    gap: 20px;
  }

  .totals {
    width: 100%;
  }
}
</style>
