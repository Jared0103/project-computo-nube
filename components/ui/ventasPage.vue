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
          <!-- Contenedor de botones -->
          <div class="button-container">
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

            <!-- Botón "Agregar nueva Factura" -->
            <button
              class="invoice-button"
              aria-label="Add new invoice"
              tabindex="0"
              @click="handleAddInvoice"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f546edc13a567346e360aa51253094ac447db281dbae4ba879a1d8c6aa4c77a?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
                class="add-icon"
                alt=""
                aria-hidden="true"
              >
              <span class="button-text">Agregar nueva Factura</span>
            </button>
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
                    <button class="action-btn edit" aria-label="Edit invoice" @click="editInvoice(index)">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da94eb67ab3173226e64e86718529589bd1d9925fa5748a510caf323ec88c5c?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
                        alt="Edit icon"
                        class="action-icon"
                      >
                    </button>
                    <!-- Botón de eliminación -->
                    <button class="action-btn delete" aria-label="Delete invoice" @click="deleteInvoice(index)">
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
    handleAddInvoice () {
      this.$router.push('/ventas/AddVenta')
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
/* Contenedor principal */
.invoice-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  font-family: 'Nunito', sans-serif;
}

/* Layout principal */
.layout {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
}

/* Contenedor del contenido */
.content {
  flex-grow: 1;
  padding: 20px;
}

/* Título principal */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1b262c;
}

/* Botones y filtros */
.button-container {
  display: flex;
  justify-content: space-between; /* Alinea a izquierda y derecha */
  align-items: center; /* Centra verticalmente */
  margin-bottom: 20px;
}

.invoice-button {
  border-radius: 10px;
  background-color: rgba(50, 130, 184, 1);
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.invoice-button:hover {
  background-color: rgba(40, 120, 174, 1);
}

.invoice-filter {
  border: 1px solid #3282b8;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 8px 20px;
  gap: 10px;
  color: #3282b8;
  font-size: 16px;
  cursor: pointer;
  position: relative;
}

.filter-icon {
  width: 12px;
  height: auto;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  z-index: 10;
}

.dropdown-menu li {
  padding: 10px 15px;
  font-size: 16px;
  color: #1b262c;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-menu li:hover {
  background: #f1f1f1;
}

/* Contenedor de la tabla */
.table-container {
  margin-top: 20px;
  overflow-x: auto;
}

.invoice-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  background-color: #fff;
  text-align: left;
}

.table-header {
  background-color: #3282b8;
  color: #fff;
}

.table-header th {
  padding: 12px 15px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}

.table-row {
  border-bottom: 1px solid #ddd;
  transition: background-color 0.2s ease;
}

.table-row:hover {
  background-color: #f9f9f9;
}

.table-row td {
  padding: 10px 15px;
  font-size: 14px;
  color: #333;
}

/* Acciones (editar/eliminar) */
.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.2s ease;
}

.action-btn:hover {
  transform: scale(1.1);
}

.action-icon {
  width: 20px;
  height: auto;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .button-container {
    flex-direction: column;
    gap: 15px;
  }

  .invoice-button {
    width: 100%;
  }

  .invoice-filter {
    width: 100%;
  }
}
</style>
