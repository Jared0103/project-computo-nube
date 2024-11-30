<template>
  <section class="items-section" aria-labelledby="items-heading">
    <!-- Tabla de items -->
    <div class="table-container">
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
            <th>Acciones</th> <!-- Columna de acciones (para eliminar) -->
          </tr>
        </thead>
        <tbody>
          <!-- Fila de input para cada item -->
          <tr v-for="(item, index) in items" :key="item.id">
            <td><input v-model="item.item" type="text" placeholder="Item"></td>
            <td><input v-model="item.reference" type="text" placeholder="Referencia"></td>
            <td><input v-model="item.price" type="number" placeholder="Precio"></td>
            <td><input v-model="item.discount" type="number" placeholder="%"></td>
            <td><input v-model="item.tax" type="number" placeholder="Impuesto"></td>
            <td><input v-model="item.description" type="text" placeholder="Descripción"></td>
            <td><input v-model="item.quantity" type="number" placeholder="Cantidad"></td>
            <td>{{ item.total }}</td>
            <td>
              <!-- Botón para eliminar fila -->
              <button class="remove-item-btn" @click="removeItem(index)">
                &#10005; <!-- Símbolo de la X -->
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Botón para agregar fila -->
    <button
      type="button"
      class="add-row"
      aria-label="Add new item row"
      @click="addItem"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f546edc13a567346e360aa51253094ac447db281dbae4ba879a1d8c6aa4c77a?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
        alt="Agregar nueva fila"
        class="add-icon"
        aria-hidden="true"
      >
      Agregar nueva fila
    </button>
  </section>
</template>

<script>
export default {
  name: 'InvoiceItems',
  data () {
    return {
      items: [
        { id: 1, item: '', reference: '', price: 0, discount: 0, tax: 0, description: '', quantity: 0, total: 0 },
        { id: 2, item: '', reference: '', price: 0, discount: 0, tax: 0, description: '', quantity: 0, total: 0 },
        { id: 3, item: '', reference: '', price: 0, discount: 0, tax: 0, description: '', quantity: 0, total: 0 }
      ]
    }
  },
  watch: {
    items: {
      handler () {
        this.items.forEach((item) => {
          this.calculateTotal(item)
        })
      },
      deep: true
    }
  },
  methods: {
    addItem () {
      this.items.push({
        id: this.items.length + 1,
        item: '',
        reference: '',
        price: 0,
        discount: 0,
        tax: 0,
        description: '',
        quantity: 0,
        total: 0
      })
    },
    removeItem (index) {
      this.items.splice(index, 1) // Elimina la fila seleccionada
    },
    calculateTotal (item) {
      item.total = (item.price * item.quantity) - (item.price * item.quantity * (item.discount / 100)) + (item.price * item.quantity * (item.tax / 100))
    }
  }
}
</script>

<style scoped>
.remove-item-btn {
  background: none;
  border: none;
  color: red; /* Color rojo para la X */
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;
}

.remove-item-btn:hover {
  color: darkred; /* Cambio de color al pasar el mouse */
}

.items-section {
  margin: 30px 0;
  overflow-x: auto; /* Permite desplazamiento horizontal si la tabla se sale del contenedor */
}

.table-container {
  width: 100%;
  overflow-x: auto; /* Permite desplazamiento horizontal */
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
}

.items-table th,
.items-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 12px;
  word-wrap: break-word;
}

.items-table th {
  background-color: #3282b8;
  color: white;
}

.items-table td input {
  width: 100%;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #aaa; /* Color más claro para los placeholders */
  font-style: italic; /* Opcional: hacer el texto del placeholder en cursiva */
}

.add-row {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #3282b8;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 7px 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.add-icon {
  width: 10px;
  height: 10px;
}

@media (max-width: 991px) {
  .items-table th,
  .items-table td {
    font-size: 11px;
    padding: 6px 8px;
  }

  .add-row {
    font-size: 14px;
  }
}
</style>
