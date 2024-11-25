<template>
  <v-app>
    <!-- Barra lateral -->
    <v-navigation-drawer
      app
      permanent
      class="sidebar"
    >
      <template #prepend>
        <div class="logo">
          LOGO
        </div>
      </template>

      <v-divider />

      <v-list dense class="navigation">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          link
          :to="item.path"
          :class="{'nav-item': true, 'nav-item-active': activeItem === index}"
          @click="setActiveItem(index)"
        >
          <v-list-item-content>
            <v-list-item-title :class="{'text-white': true, 'text-primary': activeItem === index}">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Espacio para el contenido principal -->
    <v-main>
      <v-container fluid>
        <slot /> <!-- Aquí se inyectará el contenido de cada página -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      activeItem: 0, // Elemento activo por defecto
      items: [
        { title: 'HOME', path: '/home' },
        { title: 'CONTACTOS', path: '/contactos' },
        { title: 'VENTAS', path: '/ventas' },
        { title: 'INVENTARIOS', path: '/home' },
        { title: 'CONFIGURACIÓN', path: '/home' }
      ]
    }
  },
  methods: {
    setActiveItem (index) {
      this.activeItem = index
    }
  }
}
</script>

<style scoped>
/* Asegura que el layout ocupe toda la altura de la ventana */
html, body, #app {
  height: 100%;
  margin: 0;
}

.dashboard {
  background: #f8f8f8;
  display: flex;
  gap: 20px;
  overflow: hidden;
  height: 100%;
}

/* Barra lateral que ocupa toda la altura de la ventana */
.sidebar {
  width: 25%;
  height: 100vh; /* Esto asegura que la barra ocupe toda la altura disponible */
  border-radius: 0 50px 0 0;
  background: #0f4c75;
  padding: 80px 0;
  color: #fff;
  font: 700 18px Lato, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
}

/* Logo centrado */
.logo {
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
}

/* Estilo de la lista de navegación */
.navigation {
  flex-direction: column;
  gap: 30px; /* Menos espacio entre los elementos */
}

.nav-item {
  text-decoration: none;
  padding: 20px 60px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 20px;
  transition: background-color 0.3s, color 0.3s; /* Transición también para el color */
}

/* Resaltar el ítem activo */
.nav-item-active {
  background: #bbe1fa;
  border-radius: 50px 0 0 50px;
}

/* Asegurarse de que el texto sea blanco por defecto */
.text-white {
  color: white;
}

/* Cambiar color cuando el ítem está activo */
.text-primary {
  color: #0f4c75;
}

/* Efecto de hover */
.nav-item:hover {
  background-color: #3282b8;
  color: white; /* Asegura que el texto se mantenga blanco cuando se pasa el mouse */
}

/* Ajustar el espacio entre el contenido principal y la barra lateral */
.v-main {
  margin-left: 25%; /* Ajustamos el espacio para que el contenido no se superponga a la barra */
  padding-top: 60px; /* Añadimos un poco de margen en la parte superior */
}
</style>
