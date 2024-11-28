<template>
  <main class="invoice-container" role="main">
    <header class="header-section">
      <div class="logo-section">
        <div class="company-logo" role="img" aria-label="Company Logo">
          Usar Logo
        </div>
        <div class="user-info">
          <h1 class="user-name">
            Ricardo Bermudez
          </h1>
          <button class="edit-button" aria-label="Edit profile">
            Editar
          </button>
        </div>
        <div class="invoice-number">
          <span class="number-label">No.</span>
          <input type="text" class="number-input" value="2" aria-label="Invoice number">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e247b0d6f354f1860a3a437f6eb7316a188d46e763ffa89c7020022ddff4cbd6?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="" class="dropdown-icon">
        </div>
      </div>
    </header>

    <section class="form-section">
      <div class="form-grid">
        <div class="contact-column">
          <div class="contact-form">
            <div class="form-header">
              <label class="required-field">
                <span>Contacto</span>
                <span class="required-mark">*</span>
              </label>
              <div class="search-actions">
                <input type="search" class="search-input" placeholder="Buscar" aria-label="Search contacts">
                <button class="add-client-button" aria-label="Add new client">
                  Agregar nuevo Cliente
                </button>
              </div>
            </div>
            <div class="form-row">
              <label for="contactId" class="form-label">ID</label>
              <input id="contactId" type="text" class="form-input" aria-label="Contact ID">
            </div>
            <div class="form-row">
              <label for="phone" class="form-label">Telefono</label>
              <input id="phone" type="tel" class="form-input" aria-label="Phone number">
            </div>
          </div>
        </div>

        <div class="dates-column">
          <div class="dates-form">
            <div class="dates-grid">
              <div class="date-field">
                <label class="required-field">
                  <span>Fecha</span>
                  <span class="required-mark">*</span>
                </label>
                <input type="date" class="date-input" value="2020-07-01" aria-label="Invoice date">
              </div>
              <div class="payment-field">
                <label class="required-field">
                  <span>Tipo de pago</span>
                  <span class="required-mark">*</span>
                </label>
                <select class="payment-select" aria-label="Payment type">
                  <option>Contado</option>
                </select>
              </div>
              <div class="term-field">
                <label class="required-field">
                  <span>Termino</span>
                  <span class="required-mark">*</span>
                </label>
                <input type="date" class="date-input" value="2020-08-08" aria-label="Term date">
              </div>
              <div class="due-field">
                <label class="required-field">
                  <span>Fecha de Vencimiento</span>
                  <span class="required-mark">*</span>
                </label>
                <input type="date" class="date-input" value="2020-07-01" aria-label="Due date">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="items-section" aria-label="Invoice items">
      <div class="items-header">
        <span class="item-col">Item</span>
        <div class="item-details">
          <span>Referencia</span>
          <span>Precio</span>
          <span>Disc%</span>
          <span>Impuesto</span>
          <span>Descripción</span>
        </div>
        <div class="item-totals">
          <span>Cantidad</span>
          <span>Total</span>
        </div>
      </div>

      <div class="items-list">
        <div v-for="n in 3" :key="n" class="item-row">
          <div class="item-inputs">
            <input type="text" class="search-item" placeholder="Buscar item" aria-label="Search item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/34eebfe484c1a47c585f552272146723b3ba7c2dc14fb02748be4740368f4ee5?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="" class="search-icon">
            <input type="text" placeholder="Referencia" aria-label="Reference">
            <input type="number" placeholder="Precio" aria-label="Price">
            <input type="number" placeholder="%" aria-label="Discount percentage">
            <input type="number" placeholder="Impuesto" aria-label="Tax">
            <input type="text" placeholder="Descripción" aria-label="Description">
          </div>
          <div class="quantity-input">
            <input type="number" placeholder="Cantidad" aria-label="Quantity">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a59044017d2848ae49d95610677f5d0d1c035f8028b177ef52680d044a3cc50?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="">
          </div>
          <div class="total-amount">
            <span>0.00</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9edece52e775b87f30c0490580f130f652df311cc2c9aefbd55b1a7b273e1e1f?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="">
          </div>
        </div>
      </div>

      <button class="add-row-button" aria-label="Add new row">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f546edc13a567346e360aa51253094ac447db281dbae4ba879a1d8c6aa4c77a?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="">
        <span>Agregar nueva fila</span>
      </button>

      <div class="invoice-footer">
        <div class="signature-section">
          <div class="signature-box">
            <span class="signature-label">Usar Firma</span>
            <span class="signature-size">170 x 50 px</span>
          </div>
        </div>

        <div class="totals-section">
          <button class="add-quote-button" aria-label="Add quote">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9066d1ef29857009aef76713fccedd7f73e5926659703ec2048f25cdfc9081?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6" alt="">
            <span>Agregar cotización</span>
          </button>

          <div class="calculations">
            <div class="calc-row">
              <span>Subtotal</span>
              <span>$0</span>
            </div>
            <div class="calc-row">
              <span>Descuento</span>
              <span>$0</span>
            </div>
            <div class="calc-row">
              <span>Subtotal</span>
              <span>$0</span>
            </div>
            <hr class="divider">
            <div class="total-row">
              <span>Total</span>
              <span>$0</span>
            </div>
          </div>
        </div>
      </div>

      <div class="terms-section">
        <div class="terms-box">
          <label for="terms">Terminos y condiciones</label>
          <textarea id="terms" aria-label="Terms and conditions" />
        </div>
        <div class="notes-box">
          <label for="notes">Notas</label>
          <textarea id="notes" aria-label="Notes" />
        </div>
      </div>

      <div class="resolution-section">
        <label for="resolution">Texto de Resolusión</label>
        <textarea id="resolution" aria-label="Resolution text" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.invoice-container {
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 88px auto;
  width: 899px;
  max-width: 100%;
  padding: 36px 0;
}

.header-section {
  margin: 0 auto;
  width: 759px;
  max-width: 100%;
}

.logo-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  font-family: Lato, sans-serif;
}

.company-logo {
  border-radius: 5px;
  background-color: #eee;
  padding: 28px 70px;
  font-size: 16px;
  text-align: right;
}

.user-info {
  display: flex;
  flex-direction: column;
  margin: auto 0;
}

.user-name {
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  margin: 0;
}

.edit-button {
  color: #0f4c75;
  font-size: 10px;
  font-weight: 700;
  background: none;
  border: none;
  padding: 0;
  align-self: flex-end;
  cursor: pointer;
}

.invoice-number {
  display: flex;
  gap: 11px;
  align-items: center;
  margin-top: 44px;
}

.number-label {
  color: #0f4c75;
  font-size: 24px;
  font-weight: 700;
}

.number-input {
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  padding: 11px 9px 5px;
  font-size: 12px;
  color: #a4a4a4;
  font-weight: 300;
}

.form-section {
  margin: 44px auto;
  width: 730px;
  max-width: 100%;
}

.form-grid {
  display: flex;
  gap: 20px;
}

.contact-column {
  width: 57%;
}

.dates-column {
  width: 43%;
}

.required-field {
  display: flex;
  gap: 5px;
}

.required-mark {
  color: #0f4c75;
  font-size: 24px;
  font-weight: 700;
}

.search-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.search-input {
  border-radius: 50px;
  border: 1px solid #c4c4c4;
  padding: 6px 15px;
  font-size: 12px;
  color: #a4a4a4;
}

.add-client-button {
  color: #0f4c75;
  font-size: 10px;
  font-weight: 700;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-top: 8px;
  align-items: center;
}

.form-label {
  font-size: 16px;
  color: #000;
  font-weight: 400;
  text-align: right;
}

.form-input {
  border-radius: 50px;
  background-color: #eee;
  width: 200px;
  height: 25px;
  border: none;
  padding: 0 15px;
}

.items-section {
  margin-top: 21px;
  width: 100%;
}

.items-header {
  background-color: #3282b8;
  color: #fff;
  display: flex;
  padding: 10px 62px;
  font: 12px Lato, sans-serif;
  gap: 64px;
}

.item-details {
  display: flex;
  gap: 29px;
}

.item-totals {
  display: flex;
  gap: 53px;
}

.items-list {
  padding: 0 43px;
}

.item-row {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 12px;
}

.item-inputs {
  display: flex;
  gap: 30px;
  align-items: center;
}

.search-item {
  font-size: 11px;
  color: #9a9a9a;
}

.quantity-input,
.total-amount {
  display: flex;
  gap: 6px;
  align-items: center;
}

.add-row-button {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #3282b8;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 7px 12px;
  font: 700 16px Nunito, sans-serif;
  cursor: pointer;
  margin: 19px 0 0 43px;
}

.invoice-footer {
  display: flex;
  justify-content: space-between;
  margin: 98px 43px 0;
}

.signature-box {
  background-color: #eee;
  border-radius: 5px;
  padding: 28px 56px 12px;
  text-align: center;
}

.signature-label {
  font-size: 16px;
  display: block;
}

.signature-size {
  font-size: 10px;
}

.totals-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.add-quote-button {
  display: flex;
  align-items: center;
  gap: 15px;
  background: none;
  border: none;
  color: #3282b8;
  font: 700 12px Nunito, sans-serif;
  cursor: pointer;
  padding: 0;
}

.calculations {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.calc-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.divider {
  border: none;
  border-top: 1px solid #c4c4c4;
  margin: 10px 0;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
}

.terms-section {
  display: flex;
  gap: 46px;
  margin: 18px 43px;
}

.terms-box,
.notes-box {
  flex: 1;
}

textarea {
  width: 100%;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #9a9a9a;
  margin-top: 5px;
  padding: 10px;
  resize: vertical;
}

.resolution-section {
  margin: 0 43px;
}

@media (max-width: 991px) {
  .invoice-container {
    margin-top: 40px;
  }

  .form-grid {
    flex-direction: column;
  }

  .contact-column,
  .dates-column {
    width: 100%;
  }

  .items-header {
    padding: 10px 20px;
  }

  .company-logo {
    padding: 28px 20px;
  }

  .number-input {
    padding-right: 20px;
  }
}
</style>
