<template>
  <main class="invoice-container">
    <div class="layout">
      <aside class="sidebar" />
      <section class="content">
        <header class="header">
          <h1 class="title">
            VENTAS
          </h1>
        </header>
        <section class="invoice-section">
          <div class="invoice-header">
            <!-- Botón que despliega opciones -->
            <div class="invoice-filter" @click="toggleMenu">
              <h2 class="filter-title">
                Facturas
              </h2>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/879512853f4f9f066c4a0ca115ff454d1e1662e69bd2f0e04dc30daf21f6ca5e?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
                alt="Filter icon"
                class="filter-icon"
              >

              <!-- Menú desplegable -->
              <ul v-if="isMenuOpen" class="dropdown-menu">
                <li @click="selectOption('Facturas recurrentes')">
                  Facturas recurrentes
                </li>
                <li @click="selectOption('Cotizaciones')">
                  Cotizaciones
                </li>
              </ul>
            </div>

            <!-- Tabla de facturas -->
            <div class="table-container">
              <table class="invoice-table">
                <thead>
                  <tr class="table-header">
                    <th scope="col">
                      Nombre
                    </th>
                    <th scope="col">
                      Tax ID
                    </th>
                    <th scope="col">
                      Teléfono
                    </th>
                    <th scope="col">
                      Observaciones
                    </th>
                    <th scope="col">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(invoice, index) in invoices" :key="index" class="table-row">
                    <td>{{ invoice.name }}</td>
                    <td>{{ invoice.taxId }}</td>
                    <td>{{ invoice.phone }}</td>
                    <td>{{ invoice.notes }}</td>
                    <td class="actions">
                      <!-- Botón de edición -->
                      <button
                        class="action-btn edit"
                        aria-label="Edit invoice"
                        @click="editInvoice(index)"
                      >
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da94eb67ab3173226e64e86718529589bd1d9925fa5748a510caf323ec88c5c?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
                          alt="Edit icon"
                          class="action-icon"
                        >
                      </button>
                      <!-- Botón de eliminación -->
                      <button
                        class="action-btn delete"
                        aria-label="Delete invoice"
                        @click="deleteInvoice(index)"
                      >
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a520a2d2ae93ae806fe2bb693c3197a3883a1884d510838ac11fed0f71ff99?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
                          alt="Delete icon"
                          class="action-icon"
                        >
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      isMenuOpen: false,
      invoices: [
        { name: 'Good Shoes', taxId: 'RU123456', phone: '314502365', notes: 'Pending approval' },
        { name: 'Fast Cars', taxId: 'CA654321', phone: '314789456', notes: 'Delivered' }
        // Más datos de ejemplo...
      ]
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen // Alterna el estado del menú
    },
    selectOption (option) {
      alert(`Seleccionaste: ${option}`) // Muestra un mensaje con la opción seleccionada
      this.isMenuOpen = false // Cierra el menú después de seleccionar
    },
    addInvoice () {
      alert('Redirigiendo para agregar una nueva factura...')
    },
    editInvoice (index) {
      alert(`Editando la factura con índice: ${index}`)
    },
    deleteInvoice (index) {
      const confirmDelete = confirm('¿Estás seguro de eliminar esta factura?')
      if (confirmDelete) {
        this.invoices.splice(index, 1)
        alert('Factura eliminada.')
      }
    }
  }
}
</script>

<style scoped>
.invoice-container {
  background: #f8f8f8;
  margin: 0 0 93px;
  overflow: hidden;
}

.layout {
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 24%;
}

.content {
  width: 76%;
  margin-left: 20px;
}

.header {
  margin: 46px 0 41px;
}

.title {
  color: #1b262c;
  font: 700 36px Lato, sans-serif;
}

.invoice-section {
  padding-left: 7px;
}

.invoice-header {
  display: block;
  justify-content: space-between;
  align-items: center;
  max-width: 865px;
  margin-bottom: 29px;
}

.invoice-filter {
  border: 1px solid #3282b8;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 6px 19px;
  gap: 9px;
  color: #3282b8;
  position: relative; /* Necesario para el menú */
  cursor: pointer;
  margin-bottom: 20px;
}

/* Menú desplegable */
.dropdown-menu {
  position: absolute;
  top: 100%; /* Debajo del botón */
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  list-style: none;
  padding: 10px 0;
  margin: 5px 0 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  z-index: 10;
}

.dropdown-menu li {
  padding: 10px 15px;
  font: 16px 'Lato', sans-serif;
  color: #1b262c;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-menu li:hover {
  background: #f1f1f1;
}

.filter-title {
  font: 700 24px Lato, sans-serif;
}

.filter-icon {
  width: 14px;
  height: auto;
}

.add-invoice-btn {
  background: #3282b8;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 7px 12px;
  font: 16px Nunito, sans-serif;
  cursor: pointer;
}

.add-icon {
  width: 10px;
  height: auto;
}

.table-container {
  max-width: 899px;
}

.invoice-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 9px;
}

.table-header {
  background: #3282b8;
  color: #fff;
  font: 700 16px Lato, sans-serif;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.table-header th {
  padding: 15px 40px;
  text-align: left;
}

.table-row {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.table-row td {
  padding: 23px 40px;
  color: #000;
  font: 700 16px Lato, sans-serif;
}

.actions {
  display: flex;
  gap: 18px;
}

.action-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.action-icon {
  width: 20px;
  height: auto;
}

@media (max-width: 991px) {
  .layout {
    flex-direction: column;
  }

  .sidebar,
  .content {
    width: 100%;
    margin-left: 0;
  }

  .header {
    margin: 40px 0;
  }

  .table-header th,
  .table-row td {
    padding: 15px 20px;
  }
}
</style>
