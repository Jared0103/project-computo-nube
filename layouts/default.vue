<template>
  <v-app>
    <v-list-item two-line class="avatar">
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/lego/6.jpg">
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="item-title">
          USER
        </v-list-item-title>
        <v-list-item-subtitle class="item-subtitle">
          ROL
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-main>
      <Nuxt />
    </v-main>
    <!-- Barra lateral -->
    <v-navigation-drawer
      app
      permanent
      class="sidebar"
      left
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
        { title: 'VENTAS', path: '/ventas' }
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

.avatar {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.item-title {
  color: #1B262C;
font-family: Lato;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.item-subtitle {
  color: #0F4C75;
font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

</style>
