<template>
  <div class="registrate">
    <div class="overlap-wrapper">
      <div class="overlap">
        <h1 class="text-wrapper">
          Registrarse
        </h1>

        <div class="overlap-group">
          <button class="register-button" @click="Registrarse">
            Registrarse
          </button>
        </div>

        <div class="input-group">
          <label for="usuario" class="label">Usuario</label>
          <input
            id="usuario"
            v-model="usuario"
            type="text"
            class="input"
          >
        </div>

        <div class="input-group">
          <label for="password" class="label">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="input"
          >
        </div>

        <div class="input-group">
          <label for="confirm-password" class="label">Confirmar Password</label>
          <input
            id="confirm-password"
            v-model="confirmPassword"
            type="password"
            class="input"
          >
        </div>

        <div class="input-group">
          <label for="telefono" class="label">Telefono</label>
          <input
            id="telefono"
            v-model="telefono"
            type="text"
            class="input"
          >
        </div>

        <div class="login-link">
          <span class="text-wrapper-4">¿Tienes cuenta?</span>
          <button @click="LoginB">
            <a href="#" class="text-wrapper-5">Inicia Sesión</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      usuario: '',
      password: '',
      confirmPassword: '',
      telefono: '',
      errorMessage: ''
    }
  },
  methods: {
    LoginB () {
      this.$router.push('../')
    },
    Registrarse () {
      // Validaciones
      if (!this.usuario || !this.password || !this.confirmPassword || !this.telefono) {
        this.errorMessage = 'Por favor, completa todos los campos.'
        alert(this.errorMessage)
        return
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden.'
        alert(this.errorMessage)
        return
      }

      const nuevoUsuario = {
        usuario: this.usuario,
        password: this.password,
        telefono: this.telefono
      }

      /*
      console.log('Usuario registrado:', nuevoUsuario)
      alert('Registro exitoso')
      this.$router.push('/') // Redirigir a la página principal
      */

      console.log('Datos a enviar:', nuevoUsuario)

      this.$axios.post('/empleados/create', nuevoUsuario)
        .then((response) => {
          alert('Registro exitoso')
          this.$router.push('/')
        })
        .catch((error) => {
          alert('Error al registrar: ' + error.response.data.message)
        })
    }
  }
}
</script>

<style scoped>
.template {
  background-color: #0f4c75;
}
.registrate {
  background-color: #0f4c75;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.overlap-wrapper {
  background-color: #0f4c75;
  height: 1024px;
  width: 1440px;
}

.overlap {
  background-color: #ffffff;
  box-shadow: 0px 4px 4px #00000040;
  height: 681px;
  width: 1216px;
  position: relative;
  left: 121px;
  top: 247px;
  padding: 40px;
  border-radius: 15px;
  box-sizing: border-box;
}

.text-wrapper {
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
}

.input-group {
  margin: 15px 0;
  position: relative;
  width: 870px;
  left: 165px;
}

.label {
  color: #3c2f3d;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 20px;
  margin-bottom: 5px;
  display: block;
}

.input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  color: #3c2f3d;
  background-color: #f0f0f0;
  box-sizing: border-box;
}

.overlap-group {
  width: 369px;
  height: 49px;
  background-color: #1b262c;
  border-radius: 15px;
  position: absolute;
  left: 410px;
  top: 552px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-button {
  background-color: #1b262c;
  color: #ffffff;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 22px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
}

.login-link {
  height: 24px;
  position: absolute;
  top: 615px;
  left: 482px;
  display: flex;
  align-items: center;
}

.text-wrapper-4 {
  color: #3c2f3d;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  margin-right: 5px;
}

.text-wrapper-5 {
  color: #0f4c75;
  font-family: "Poppins-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
</style>
