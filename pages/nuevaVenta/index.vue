<template>
  <div class="invoice-layout">
    <nav class="sidebar" aria-label="Main navigation">
      <div class="logo" role="banner">
        LOGO
      </div>
      <ul class="nav-list">
        <li><a href="#home" class="nav-link">HOME</a></li>
        <li><a href="#contacts" class="nav-link">CONTACTOS</a></li>
        <li><a href="#pos" class="nav-link">PUNTO DE VENTA</a></li>
        <li><a href="#income" class="nav-link active">INGRESOS</a></li>
        <li><a href="#inventory" class="nav-link">INVENTARIOS</a></li>
        <li><a href="#settings" class="nav-link">CONFIGRUACIÓN</a></li>
      </ul>
    </nav>

    <main class="main-content">
      <header class="top-header">
        <h1 class="page-title">
          VENTAS
        </h1>
        <div class="user-profile">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bf73a6ca7b01ee56c5f2d979b7db68373426e5bf96e158f87271a2a6de3218e?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="User profile" class="profile-image">
          <div class="user-info">
            <span class="username">USER</span>
            <span class="user-role">ROL</span>
          </div>
        </div>
      </header>

      <section class="invoice-section" aria-label="Invoice management">
        <div class="invoice-controls">
          <div class="invoice-filter">
            <button class="filter-button" aria-expanded="false">
              <span>Facturas</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/879512853f4f9f066c4a0ca115ff454d1e1662e69bd2f0e04dc30daf21f6ca5e?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="" class="icon-dropdown">
            </button>
            <div class="dropdown-menu" role="menu">
              <button class="menu-item">
                Facturas Recurrentes
              </button>
              <button class="menu-item">
                Cotizaciones
              </button>
            </div>
          </div>
          <button class="add-invoice-button">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f546edc13a567346e360aa51253094ac447db281dbae4ba879a1d8c6aa4c77a?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="" class="icon-add">
            <span>Agregar nueva Factura</span>
          </button>
        </div>

        <div class="invoice-table-container">
          <table class="invoice-table" role="grid">
            <thead>
              <tr>
                <th scope="col">
                  Name
                </th>
                <th scope="col">
                  Tax ID
                </th>
                <th scope="col">
                  Telefono
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
              <tr v-for="i in 6" :key="i">
                <td>Good Shoes</td>
                <td>ruuning</td>
                <td>314502365</td>
                <td>Ewdgbsbdf</td>
                <td class="actions-cell">
                  <button class="action-button" aria-label="Edit invoice">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da94eb67ab3173226e64e86718529589bd1d9925fa5748a510caf323ec88c5c?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="" class="icon-action">
                  </button>
                  <button class="action-button" aria-label="Delete invoice">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a520a2d2ae93ae806fe2bb693c3197a3883a1884d510838ac11fed0f71ff99?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="" class="icon-action">
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <nav class="pagination" aria-label="Pagination">
          <button class="page-button" aria-label="Previous page">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5a89c3f47b46d365bc8f499990bd10959329f243da3822bde8b60281d6d3295?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="">
          </button>
          <button class="page-button active">
            3
          </button>
          <button class="page-button">
            4
          </button>
          <button class="page-button">
            5
          </button>
          <button class="page-button" aria-label="Next page">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aac7dde63b01e5eb12586f00fc8e8a6e1c7d06edd1e0bcf8a589f7f3a6e4917b?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="">
          </button>
        </nav>
      </section>
    </main>
  </div>
</template>

<style scoped>
.invoice-layout {
  display: flex;
  background: #f8f8f8;
  min-height: 100vh;
}

.sidebar {
  width: 24%;
  background: #0f4c75;
  border-radius: 0 50px 0 0;
  padding: 80px 35px;
  color: #fff;
}

.logo {
  font: 700 36px Lato, sans-serif;
  text-align: center;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin-top: 114px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font: 700 18px Lato, sans-serif;
  display: block;
  margin: 28px 0;
}

.nav-link.active {
  background: #bbe1fa;
  color: #0f4c75;
  border-radius: 50px 0 0 50px;
  padding: 33px 70px;
}

.main-content {
  flex: 1;
  padding: 46px 20px;
}

.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 41px;
}

.page-title {
  color: #1b262c;
  font: 700 36px Lato, sans-serif;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 23px;
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

.user-role {
  color: #0f4c75;
  font: 700 14px Lato, sans-serif;
}

.invoice-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 9px;
  border: 1px solid #3282b8;
  border-radius: 50px;
  padding: 6px 19px;
  color: #3282b8;
  font: 700 24px Lato, sans-serif;
  background: none;
  cursor: pointer;
}

.add-invoice-button {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #3282b8;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 7px 12px;
  font: 16px Nunito, sans-serif;
  cursor: pointer;
}

.invoice-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.invoice-table th {
  background: #3282b8;
  color: #fff;
  font: 700 16px Lato, sans-serif;
  padding: 15px 40px;
  text-align: left;
}

.invoice-table td {
  padding: 23px 40px;
  font: 700 16px Lato, sans-serif;
  border-bottom: 1px solid #f0f0f0;
}

.actions-cell {
  display: flex;
  gap: 18px;
}

.action-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.icon-action {
  width: 20px;
  height: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 40px;
}

.page-button {
  color: #0f4c75;
  font: 700 16px Lato, sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.page-button.active {
  background: #0f4c75;
  color: #fff;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 991px) {
  .invoice-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding-bottom: 100px;
  }

  .nav-list {
    margin-top: 40px;
  }

  .nav-link.active {
    padding: 0 20px;
  }

  .invoice-table th,
  .invoice-table td {
    padding: 15px 20px;
  }
}
</style>
