<template>
  <div class="line-item">
    <div class="item-details">
      <input
        v-model="localValue.description"
        type="text"
        class="search-input"
        placeholder="Buscar item"
        :aria-label="`Item description ${localValue.id}`"
      >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34eebfe484c1a47c585f552272146723b3ba7c2dc14fb02748be4740368f4ee5?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
        alt=""
        class="search-icon"
        aria-hidden="true"
      >
      <input
        v-model="localValue.reference"
        type="text"
        class="ref-input"
        placeholder="Referencia"
      >
      <input
        v-model.number="localValue.price"
        type="number"
        class="price-input"
        placeholder="Precio"
      >
      <input
        v-model.number="localValue.discount"
        type="number"
        class="discount-input"
        placeholder="%"
      >
      <input
        v-model="localValue.tax"
        type="text"
        class="tax-input"
        placeholder="Impuesto"
      >
      <input
        v-model="localValue.description"
        type="text"
        class="desc-input"
        placeholder="Descripción"
      >
    </div>

    <div class="quantity-section">
      <input
        v-model.number="localValue.quantity"
        type="number"
        class="quantity-input"
        placeholder="Cantidad"
      >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a59044017d2848ae49d95610677f5d0d1c035f8028b177ef52680d044a3cc50?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
        alt=""
        class="quantity-icon"
        aria-hidden="true"
      >
    </div>

    <div class="total-section">
      <span class="total-amount">{{ total }}</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9edece52e775b87f30c0490580f130f652df311cc2c9aefbd55b1a7b273e1e1f?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
        alt=""
        class="total-icon"
        aria-hidden="true"
      >
    </div>

    <button
      type="button"
      class="delete-button"
      :aria-label="`Delete item ${localValue.id}`"
      @click="$emit('delete')"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a2cc71c66593b066f015f01e66f37b433d6b9b69c4d8564528fa228a3bcfd1b?placeholderIfAbsent=true&apiKey=0530c95f46a140828115849cce90f8b6"
        alt=""
        class="delete-icon"
        aria-hidden="true"
      >
    </button>
  </div>
</template>

<script>
export default {
  name: 'LineItem',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      localValue: { ...this.value }
    }
  },
  computed: {
    total () {
      const price = this.localValue.price || 0
      const quantity = this.localValue.quantity || 0
      const discount = this.localValue.discount || 0
      return ((price * quantity) * (1 - discount / 100)).toFixed(2)
    }
  },
  watch: {
    localValue: {
      deep: true,
      handler (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
}
</script>

<style scoped>
.line-item {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr auto;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.item-details {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  align-items: center;
}

.search-input,
.ref-input,
.price-input,
.discount-input,
.tax-input,
.desc-input,
.quantity-input {
  padding: 5px 10px;
  border: 1px solid #c4c4c4;
  border-radius: 50px;
  font-size: 12px;
}

.quantity-section,
.total-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.total-amount {
  font-weight: 300;
}

.delete-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.search-icon,
.quantity-icon,
.total-icon,
.delete-icon {
  width: 15px;
  height: 15px;
}

@media (max-width: 991px) {
  .line-item {
    gap: 10px;
  }

  .item-details {
    gap: 10px;
  }
}
</style>
