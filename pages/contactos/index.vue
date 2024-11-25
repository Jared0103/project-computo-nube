<template>
  <div>
    <h1>Contactos Page</h1>
    <main class="main-content">
      <header class="header">
        <h2 class="page-title">
          Clientes
        </h2>
        <div class="user-profile">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05e6228035809a4928a67b6ea9e103112571f92714d1e706eb5548912b8cbc68?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968"
            alt="User profile"
            class="profile-image"
          >
          <div class="user-info">
            <span class="username">USER</span>
            <span class="user-role">ROL</span>
          </div>
        </div>
      </header>

      <section class="contacts-section">
        <button class="add-contact-btn" type="button">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f546edc13a567346e360aa51253094ac447db281dbae4ba879a1d8c6aa4c77a?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968"
            alt="Add contact icon"
            class="add-icon"
          >
          <span>Agregar nuevo Contacto</span>
        </button>

        <table class="contacts-table">
          <thead>
            <tr class="table-header">
              <th>Name</th>
              <th>Tax ID</th>
              <th>Telefono</th>
              <th>Observaciones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row">
              <td>Victor Manuel</td>
              <td>1122408617</td>
              <td>314502365</td>
              <td>Ewdgbsbdf</td>
              <td class="actions-cell">
                <button class="action-btn" type="button">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d16dded88dff2685de4c2f871b8006b3d96b70bcd7ba563ba85419abbabdd82f?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968"
                    alt="Edit contact"
                    class="action-icon"
                  >
                </button>
                <button class="action-btn" type="button">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a520a2d2ae93ae806fe2bb693c3197a3883a1884d510838ac11fed0f71ff99?placeholderIfAbsent=true&apiKey=275ebdc6715d4357b6c0187273c37968"
                    alt="Delete contact"
                    class="action-icon"
                  >
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
