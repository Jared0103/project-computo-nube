<template>
  <div class="form-container">
    <section class="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" class="visually-hidden">
        Información de Contacto
      </h2>

      <div class="input-group">
        <label for="contact" class="required-field">Contacto</label>
        <div class="contact-actions">
          <input
            v-model="contactName"
            type="text"
            class="form-input"
            placeholder="Buscar"
            @input="searchContact"
          >
          <button type="button" class="add-client" @click="addNewClient">
            Agregar nuevo Cliente
          </button>
        </div>
      </div>

      <div class="input-group">
        <label for="clientId">ID Cliente</label>
        <input
          id="clientId"
          v-model="clientId"
          type="text"
          class="form-input"
          placeholder="Ingresa ID del cliente"
          :disabled="isAddingNewClient"
        >
      </div>

      <div class="input-group">
        <label for="phone">Teléfono</label>
        <input
          id="phone"
          v-model="phone"
          type="tel"
          class="form-input"
          placeholder="Ingresa número de teléfono"
          :disabled="isAddingNewClient"
        >
      </div>
    </section>

    <section class="dates-section" aria-labelledby="dates-heading">
      <h2 id="dates-heading" class="visually-hidden">
        Información de Fechas
      </h2>

      <div class="dates-grid">
        <div class="input-group">
          <label for="date" class="required-field">Fecha</label>
          <input id="date" v-model="date" type="date" class="date-input">
        </div>

        <div class="input-group">
          <label for="paymentType" class="required-field">Tipo de pago</label>
          <select id="paymentType" v-model="paymentType" class="select-input">
            <option value="contado">
              Contado
            </option>
            <option value="credito">
              Crédito
            </option>
          </select>
        </div>

        <div class="input-group">
          <label for="term" class="required-field">Término</label>
          <input id="term" v-model="term" type="date" class="date-input">
        </div>

        <div class="input-group">
          <label for="dueDate" class="required-field">Fecha de vencimiento</label>
          <input id="dueDate" v-model="dueDate" type="date" class="date-input">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InvoiceDetails',
  data () {
    return {
      contactName: '', // Nombre del contacto ingresado
      clientId: '', // ID Cliente
      phone: '', // Teléfono
      date: '',
      paymentType: 'contado',
      term: '',
      dueDate: '',
      isAddingNewClient: false, // Estado que indica si se está agregando un nuevo cliente
      contacts: [
        { name: 'Juan Pérez', id: '123', phone: '555-1234' },
        { name: 'María López', id: '456', phone: '555-5678' },
        { name: 'Carlos García', id: '789', phone: '555-9101' }
      ] // Lista de contactos simulados (esto debería venir de una API)
    }
  },
  methods: {
    // Método para buscar un contacto por nombre
    searchContact () {
      if (this.contactName) {
        const foundContact = this.contacts.find(contact =>
          contact.name.toLowerCase().includes(this.contactName.toLowerCase())
        )

        if (foundContact) {
          this.clientId = foundContact.id
          this.phone = foundContact.phone
        } else {
          this.clientId = ''
          this.phone = ''
        }
      } else {
        this.clientId = ''
        this.phone = ''
      }
    },

    // Método para habilitar los campos de nuevo contacto
    addNewClient () {
      this.isAddingNewClient = true
      this.contactName = ''
      this.clientId = ''
      this.phone = ''
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-section, .dates-section {
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

.required-field::after {
  content: '*';
  color: #0f4c75;
  margin-left: 5px;
}

.form-input,
.date-input,
.select-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #c4c4c4;
  border-radius: 50px;
  font-size: 14px;
  box-sizing: border-box;
}

.contact-actions {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}

.add-client {
  border: none;
  background-color: transparent;
  color: #0f4c75;
  font-weight: bold;
  font-size: 14px;
}

.dates-grid {
  display: grid;
  gap: 20px;
}

@media (max-width: 991px) {
  .form-container {
    width: 95%;
  }

  .dates-grid {
    grid-template-columns: 1fr;
  }
}
</style>
