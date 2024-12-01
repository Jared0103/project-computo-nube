<template>
  <div class="quotation-preview">
    <div class="layout-container">
      <main class="main-content">
        <header class="header">
          <h1 class="page-title">
            COTIZACION {{ quotation.numero }} | ORDEN DE SERVICIO {{ quotation.numero }}
          </h1>
        </header>

        <section class="action-buttons">
          <button class="action-btn" @click="imprimir">
            Imprimir
          </button>
        </section>

        <section v-if="quotation && Object.keys(quotation).length" class="quotation-details">
          <div class="status-header">
            <div class="creator-info">
              <span class="creator-name">{{ quotation.cliente }}</span>
              <span class="creator-id">(identificación)</span>
            </div>
            <div class="document-number">
              <span>No.</span>
              <span>{{ quotation.numero }}</span>
            </div>
          </div>

          <div class="client-info">
            <div class="info-group">
              <span class="label">Cliente</span>
              <span class="value">{{ quotation.cliente }}</span>
            </div>
            <div class="info-group">
              <span class="label">Fecha de creacion</span>
              <span class="value">{{ quotation.creacion }}</span>
            </div>
          </div>

          <hr class="divider">

          <div class="additional-info">
            <div class="info-group">
              <span class="label">Cedula</span>
              <span class="value">{{ quotation.cedula || 'No disponible' }}</span>
            </div>
            <div class="info-group">
              <span class="label">Fecha de Vencimiento</span>
              <span class="value">{{ quotation.vencimiento }}</span>
            </div>
          </div>

          <hr class="divider">

          <div class="contact-info">
            <span class="label">Telefono</span>
            <span class="value">{{ quotation.telefono || 'No disponible' }}</span>
          </div>

          <hr class="divider">

          <table class="items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Referencia</th>
                <th>Precio</th>
                <th>Disc%</th>
                <th>Impuesto</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in quotation.items" :key="index">
                <td>{{ item.cliente }}</td>
                <td>{{ item.referencia }}</td>
                <td>{{ item.precio }}</td>
                <td>{{ item.descuento }}%</td>
                <td>{{ item.impuesto }}%</td>
                <td>{{ item.descripcion }}</td>
                <td>{{ item.cantidad }}</td>
                <td>{{ item.total }}</td>
              </tr>
            </tbody>
          </table>

          <hr class="divider">

          <div class="summary-section">
            <div class="prepared-by">
              <img :src="quotation.signatureUrl || 'default-signature.jpg'" alt="Firma" class="signature-image">
              <span>Elaborado por</span>
            </div>

            <div class="totals">
              <div class="subtotals">
                <div class="subtotal-row">
                  <span>Subtotal</span>
                  <span>{{ quotation.subtotal }}</span>
                </div>
                <div class="subtotal-row">
                  <span>Descuento</span>
                  <span>{{ quotation.descuento }}</span>
                </div>
                <div class="subtotal-row">
                  <span>Subtotal</span>
                  <span>{{ quotation.subtotal }}</span>
                </div>
              </div>

              <hr class="divider">

              <div class="final-total">
                <span>Total</span>
                <span>{{ quotation.total }}</span>
              </div>
            </div>
          </div>

          <div class="notes-section">
            <h2>Notas</h2>
            <p>{{ quotation.nota || 'No hay notas' }}</p>
          </div>
        </section>

        <div class="bottom-section">
          <div class="details-panel">
            <div class="seller-info">
              <span class="label">Vendedor</span>
              <span class="value">{{ quotation.vendedor }}</span>
            </div>

            <hr class="divider">

            <div class="price-list">
              <span class="label">Lista de precio</span>
              <span class="value">{{ quotation.listaPrecio || 'General' }}</span>
            </div>

            <hr class="divider">

            <div class="attachments">
              <span class="label">Adjuntar Archivos</span>
              <span class="value">Subir</span>
            </div>

            <hr class="divider">
          </div>
        </div>

        <button class="save-btn" @click="salir">
          Salir
        </button>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CotizacionPreview',
  data () {
    return {
      quotation: JSON.parse(localStorage.getItem('quotation')) || null // Asegura que sea null si no hay datos
    }
  },
  created () {
    this.loadQuotation()
  },
  methods: {
    salir () {
      this.$router.push('/ventas')
    },
    imprimir () {
      window.print() // Funcionalidad para imprimir la cotización
    },
    loadQuotation () {
      const storedQuotation = localStorage.getItem('quotation')
      if (storedQuotation) {
        this.quotation = JSON.parse(storedQuotation)
      }
    }
  }
}
</script>

<style scoped>
.quotation-preview {
  background: #f8f8f8;
  padding-right: 80px;
  overflow: hidden;
}

.layout-container {
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 26%;
  border-radius: 0 50px 0 0;
  background: #0f4c75;
  padding: 80px 0 718px 35px;
  color: #fff;
  font: 700 18px Lato, sans-serif;
}

.logo {
  font-size: 36px;
}

.nav-item {
  margin: 29px 0;
}

.nav-item.active {
  border-radius: 50px 0 0 50px;
  background: #bbe1fa;
  color: #0f4c75;
  padding: 33px 70px;
}

.main-content {
  width: 74%;
  margin-left: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page-title {
  color: #1b262c;
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
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.username {
  color: #1b262c;
  font: 700 18px Lato, sans-serif;
}

.role {
  color: #0f4c75;
  font: 700 14px Lato, sans-serif;
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}

.action-btn {
  background: #3282b8;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 9px 20px;
  font: 700 16px Nunito, sans-serif;
  cursor: pointer;
}

.quotation-details {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 28px;
}

.status-badge {
  background: #3282b8;
  color: #fff;
  padding: 9px 15px;
  border-radius: 5px;
  font: 700 16px Nunito, sans-serif;
}

.divider {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 10px 0;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.items-table th {
  background: #3282b8;
  color: #fff;
  padding: 10px;
  text-align: left;
  font-size: 12px;
}

.items-table td {
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.save-btn {
  background: #3282b8;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 9px 20px;
  font: 700 16px Nunito, sans-serif;
  margin-top: 36px;
  cursor: pointer;
  float: right;
}

.bottom-section {
  display: flex;
  gap: 20px;
  margin-top: 28px;
}

.details-panel {
  width: 43%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 41px;
}

.invoice-panel {
  width: 57%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 81px 70px;
  color: #3282b8;
  text-align: right;
  font: 700 14px Lato, sans-serif;
}

@media (max-width: 991px) {
  .quotation-preview {
    padding-right: 20px;
  }

  .layout-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding-bottom: 100px;
  }

  .main-content {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }

  .action-buttons {
    flex-wrap: wrap;
  }

  .bottom-section {
    flex-direction: column;
  }

  .details-panel,
  .invoice-panel {
    width: 100%;
  }
}
</style>
