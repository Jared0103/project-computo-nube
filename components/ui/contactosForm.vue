<template>
  <div>
    <button class="add-contact-btn" @click="dialogCreate = true">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f546edc13a567346e360aa51253094ac447db281dbae4ba879a1d8c6aa4c77a?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968"
        alt="Add new contact"
        class="add-icon"
      >
      <span>Agregar nuevo Contacto</span>
    </button>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <section v-if="contacts.length === 0" class="no-contacts">
      <p>No hay contactos disponibles.</p>
    </section>

    <section v-else class="contacts-table">
      <header class="table-header">
        <span class="header-cell">Nombre</span>
        <span class="header-cell">Tax ID</span>
        <span class="header-cell">Teléfono</span>
        <span class="header-cell">Observaciones</span>
        <span class="header-cell">Acciones</span>
      </header>

      <article v-for="contact in contacts" :key="contact.id" class="table-row">
        <div class="contact-info">
          <span class="cell">{{ contact.usuario }}</span>
          <span class="cell">{{ contact.id }}</span>
          <span class="cell">{{ contact.telefono }}</span>
          <span class="cell">{{ contact.observaciones }}</span>
        </div>
        <div class="action-buttons">
          <button class="action-btn" @click="openUpdateDialog(contact)">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d16dded88dff2685de4c2f871b8006b3d96b70bcd7ba563ba85419abbabdd82f?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968"
              alt="Editar contacto"
              class="action-icon"
            >
          </button>
          <button class="action-btn" @click="deleteEmpleado(contact.id)">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a520a2d2ae93ae806fe2bb693c3197a3883a1884d510838ac11fed0f71ff99?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968"
              alt="Eliminar contacto"
              class="action-icon"
            >
          </button>
        </div>
      </article>
    </section>

    <div v-if="dialogCreate" class="dialog-overlay">
      <div class="dialog">
        <RegisterForm
          :on-submit="handleRegisterSubmit"
          :navigate-to-login="closeDialog"
          :on-close="closeDialog"
        />
      </div>
    </div>

    <v-dialog v-model="dialogBorrar" width="500" persistent>
      <v-card class="dialog-card">
        <v-card-title class="pa-3 ma-3">
          <v-row align="center" justify="center">
            <span class="dialog-title">Borrar Contacto</span>
          </v-row>
        </v-card-title>
        <v-card-text class="pa-3 ma-3">
          <v-row align="center" justify="center">
            <span class="dialog-message">¿Estás seguro de que quieres eliminar este contacto?</span>
          </v-row>
        </v-card-text>
        <v-card-actions class="pa-3 ma-3">
          <v-row align="center" justify="center">
            <v-btn color="yellow" class="dialog-btn" @click="dialogBorrar = false">
              Cancelar
            </v-btn>
            <v-btn color="red" class="dialog-btn" @click="borralo">
              Borrar
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div v-if="dialogUpdate" class="dialog-overlay">
      <div class="dialog">
        <actualiza-form
          :contact-data="selectedContact"
          :on-submit="handleContactSubmit"
          :on-close="closeDialog"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import RegisterForm from '~/components/ui/RegisterForm.vue'
import ActualizaForm from '~/components/ui/actulizarForm.vue'

export default defineComponent({
  name: 'ContactosForm',
  components: {
    RegisterForm,
    ActualizaForm
  },
  setup () {
    const contacts = ref([])
    const error = ref('')
    const dialogCreate = ref(false)
    const dialogBorrar = ref(false)
    const dialogUpdate = ref(false)
    const selectedContact = ref(null)
    const idBorrar = ref(null)

    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:3020/api/v1/empleados')
        contacts.value = response.data.empleados
      } catch (err) {
        error.value = 'Error al cargar los contactos.'
        console.error(err)
      }
    }

    const handleRegisterSubmit = async (data) => {
      try {
        await axios.post('http://localhost:3020/api/v1/empleados/create', data)
        alert('Contacto registrado exitosamente.')
        dialogCreate.value = false
        fetchContacts()
      } catch (err) {
        alert('Error al registrar el contacto.')
        console.error(err)
      }
    }

    const openUpdateDialog = (contact) => {
      console.log('contactData received:', contact)
      selectedContact.value = { ...contact }
      dialogUpdate.value = true
    }

    const handleContactSubmit = async (data) => {
      if (data._id) {
        try {
          await axios.put(`http://localhost:3020/api/v1/empleados/update/${data._id}`, data)
          alert('Contacto actualizado exitosamente.')
          dialogUpdate.value = false
          fetchContacts()
        } catch (err) {
          alert('Error al actualizar el contacto.')
          console.error(err)
        }
      } else {
        await handleRegisterSubmit(data)
      }
    }

    const deleteEmpleado = (id) => {
      idBorrar.value = id
      dialogBorrar.value = true
    }

    const borralo = async () => {
      if (!idBorrar.value) { return }

      try {
        const response = await axios.delete(`http://localhost:3020/api/v1/empleados/delete/${idBorrar.value}`)
        if (response.data.success) {
          alert('Contacto eliminado exitosamente.')
          fetchContacts()
        } else {
          alert('Error al eliminar el contacto.')
        }
      } catch (err) {
        console.error('Error al borrar contacto:', err)
        alert('Ocurrió un error al intentar eliminar el contacto.')
      } finally {
        dialogBorrar.value = false
        idBorrar.value = null
      }
    }

    const closeDialog = () => {
      dialogCreate.value = false
      dialogUpdate.value = false
    }

    onMounted(() => {
      fetchContacts()
    })

    return {
      contacts,
      error,
      dialogCreate,
      dialogBorrar,
      dialogUpdate,
      selectedContact,
      idBorrar,
      handleRegisterSubmit,
      deleteEmpleado,
      borralo,
      closeDialog,
      handleContactSubmit,
      openUpdateDialog
    }
  }
})
</script>

<style scoped>
.dialog-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dialog-title {
  font-size: 18px;
  font-weight: 700;
  color: #3282b8;
}

.dialog-message {
  font-size: 16px;
  color: #333;
  text-align: center;
}

.dialog-btn {
  font-weight: 700;
  padding: 10px 20px;
}

.dialog-btn:first-child {
  margin-right: 10px;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.add-contact-btn {
  border: none;
  border-radius: 10px;
  background: #3282b8;
  display: flex;
  gap: 15px;
  color: #fff;
  margin: 20px 95px 20px auto;
  padding: 7px 12px;
  font: 700 16px Nunito, sans-serif;
  cursor: pointer;
  transform: translateY(85px);
}

.add-icon {
  width: 10px;
  height: 10px;
  margin: auto 0;
}

.contacts-table {
  margin-top: 20px;
  width: 100%;
}

.table-header {
  border-radius: 15px;
  background: #3282b8;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  gap: 150px;
  color: #fff;
  padding: 15px 40px;
  font: 700 16px Lato, sans-serif;
  transform: translateY(85px);
  margin: 35px 95px;
}

.table-row {
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  padding: 23px 5px;
  margin-top: 10px;
  transform: translateY(85px);
  margin: 35px 95px;
}

.contact-info {
  display: contents;
  color: #000;
  font: 700 16px Lato, sans-serif;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.action-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.action-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style>
