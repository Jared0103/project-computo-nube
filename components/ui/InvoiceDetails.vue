<template>
  <div class="form-container">
    <section class="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" class="visually-hidden">
        Información de Contacto
      </h2>

      <!-- Selector para Contactos -->
      <div class="input-group">
        <label for="contact" class="required-field">Contacto</label>
        <div class="contact-actions">
          <select
            id="contact"
            v-model="selectedContactId"
            class="form-input"
            @change="fetchContactInfo"
          >
            <option value="" disabled>
              Selecciona un contacto
            </option>
            <option v-for="contact in contacts" :key="contact.id" :value="contact.id">
              {{ contact.usuario }}
            </option>
          </select>
          <button type="button" class="add-client" @click="addNewClient">
            Agregar nuevo Cliente
          </button>
        </div>
      </div>

      <!-- Campos de información del contacto -->
      <div class="input-group">
        <label for="clientId">ID Cliente</label>
        <input
          id="clientId"
          v-model="clientId"
          type="text"
          class="form-input"
          placeholder="ID del cliente"
          :disabled="true"
        >
      </div>

      <div class="input-group">
        <label for="phone">Teléfono</label>
        <input
          id="phone"
          v-model="phone"
          type="tel"
          class="form-input"
          placeholder="Número de teléfono"
          :disabled="true"
        >
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'InvoiceDetails',
  data () {
    return {
      selectedContactId: '', // ID del contacto seleccionado
      clientId: '', // ID Cliente
      phone: '', // Teléfono
      contacts: [] // Lista de contactos cargada desde la base de datos
    }
  },
  mounted () {
    this.loadContacts()
  },
  methods: {
    // Método para cargar contactos desde la base de datos
    async loadContacts () {
      try {
        const response = await axios.get('http://localhost:3020/api/v1/empleados')
        console.log(response.data) // Verifica la estructura de los datos

        // Comprobamos si la respuesta tiene la propiedad empleados y es un arreglo
        if (response.data && Array.isArray(response.data.empleados)) {
          // Si empleados es un arreglo, lo asignamos directamente
          this.contacts = response.data.empleados
        } else if (response.data && response.data.empleados && typeof response.data.empleados === 'object') {
          // Si es un objeto, lo convertimos en un arreglo
          this.contacts = Object.values(response.data.empleados)
        } else {
          console.error('No se encontró la propiedad empleados o no es un arreglo:', response.data)
        }
      } catch (error) {
        console.error('Error cargando contactos:', error)
      }
    },

    // Método para obtener la información del contacto seleccionado
    fetchContactInfo () {
      console.log('this.contacts:', this.contacts) // Verifica el contenido de contacts
      const selectedContact = this.contacts.find(contact => contact.id === this.selectedContactId)

      if (selectedContact) {
        this.clientId = selectedContact.id
        this.phone = selectedContact.telefono
      } else {
        this.clientId = ''
        this.phone = ''
      }
    },

    // Método para habilitar los campos de nuevo contacto
    addNewClient () {
      this.selectedContactId = ''
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
