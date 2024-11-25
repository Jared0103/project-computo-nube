<template>
  <div class="registrate">
    <div class="overlap-wrapper">
      <div class="overlap">
        <h1 class="text-wrapper">
          Registrarse
        </h1>

        <div class="input-group">
          <label for="username" class="label">Usuario</label>
          <input
            id="username"
            v-model="form.username"
            type="text"
            class="input"
            placeholder="Ingresa tu usuario"
          >
        </div>

        <div class="input-group">
          <label for="password" class="label">Password</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="input"
            placeholder="Crea una contraseña"
          >
        </div>

        <div class="input-group">
          <label for="confirm-password" class="label">Confirmar Password</label>
          <input
            id="confirm-password"
            v-model="form.confirmPassword"
            type="password"
            class="input"
            placeholder="Repite tu contraseña"
          >
        </div>

        <div class="input-group">
          <label for="nickname" class="label">Apodo</label>
          <input
            id="nickname"
            v-model="form.nickname"
            type="text"
            class="input"
            placeholder="Ingresa tu apodo"
          >
        </div>

        <div class="overlap-group">
          <button class="register-button" @click="registerUser">
            Registrarse
          </button>
        </div>

        <div class="login-link">
          <span class="text-wrapper-4">¿Tienes cuenta?</span>
          <a class="text-wrapper-5" @click="goToLogin">Inicia Sesión</a>
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
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        nickname: ''
      }
    }
  },
  methods: {
    async registerUser () {
      // Validación básica
      if (!this.form.username || !this.form.password || !this.form.nickname) {
        alert('Por favor, llena todos los campos.')
        return
      }
      if (this.form.password !== this.form.confirmPassword) {
        alert('Las contraseñas no coinciden.')
        return
      }

      try {
        // Llamada al backend para registrar al usuario
        const response = await fetch('/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.form.username,
            password: this.form.password,
            nickname: this.form.nickname
          })
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.message || 'Error al registrarse.')
        }

        const data = await response.json()
        alert(`Registro exitoso: ${data.message}`)

        // Redirigir al usuario a la página de inicio de sesión
        this.$router.push('/login')
      } catch (error) {
        alert(`Error: ${error.message}`)
      }
    },
    goToLogin () {
      // Redirigir a la página de inicio de sesión
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/* Conserva los estilos proporcionados */
.registrate {
  background-color: #0f4c75;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.overlap-wrapper {
  background-color: #0f4c75;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlap {
  background-color: #ffffff;
  box-shadow: 0px 4px 4px #00000040;
  padding: 40px;
  border-radius: 15px;
  width: 600px;
  box-sizing: border-box;
  text-align: center;
}

.text-wrapper {
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 28px;
  margin-bottom: 20px;
}

.input-group {
  margin: 15px 0;
}

.label {
  color: #3c2f3d;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 20px;
  margin-bottom: 5px;
  display: block;
  text-align: left;
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
}

.overlap-group {
  margin-top: 20px;
}

.register-button {
  background-color: #1b262c;
  color: #ffffff;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
}

.login-link {
  margin-top: 20px;
  display: flex;
  justify-content: center;
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
