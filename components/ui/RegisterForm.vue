<template>
  <div class="registrate">
    <div class="overlap-wrapper">
      <div class="overlap">
        <h1 class="text-wrapper">
          Registrarse
        </h1>

        <!-- Campos del formulario -->
        <div class="input-group">
          <label for="usuario" class="label">Usuario</label>
          <input
            id="usuario"
            v-model="formData.usuario"
            type="text"
            class="input"
          >
        </div>

        <div class="input-group">
          <label for="password" class="label">Password</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            class="input"
          >
        </div>

        <div class="input-group">
          <label for="confirm-password" class="label">Confirmar Password</label>
          <input
            id="confirm-password"
            v-model="formData.confirmPassword"
            type="password"
            class="input"
          >
        </div>

        <div class="input-group">
          <label for="telefono" class="label">Teléfono</label>
          <input
            id="telefono"
            v-model="formData.telefono"
            type="text"
            class="input"
          >
        </div>

        <div class="input-group">
          <label for="observaciones" class="label">Observaciones</label>
          <textarea
            id="observaciones"
            v-model="formData.observaciones"
            class="input"
            rows="4"
          />
        </div>

        <!-- Botones de acción -->
        <div class="action-buttons">
          <button class="button save" @click="handleRegister">
            Guardar
          </button>
          <button class="button close" @click="handleClose">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  props: {
    onSubmit: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      formData: {
        usuario: '',
        password: '',
        confirmPassword: '',
        telefono: '',
        observaciones: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    handleRegister () {
      const { usuario, password, confirmPassword, telefono, observaciones } = this.formData

      if (!usuario || !password || !confirmPassword || !telefono) {
        this.errorMessage = 'Por favor, completa todos los campos.'
        alert(this.errorMessage)
        return
      }
      if (password !== confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden.'
        alert(this.errorMessage)
        return
      }

      this.onSubmit({
        usuario,
        password,
        telefono,
        observaciones
      })
    },
    handleClose () {
      this.onClose()
    }
  }
}
</script>

<style scoped>
.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.button {
  font-family: "Poppins-SemiBold", Helvetica, Arial, sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 150px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
}

.button.save {
  background-color: #3282b8;
  color: white;
}

.button.save:hover {
  background-color: #0f4c75;
  transform: scale(1.05);
}

.button.save:active {
  background-color: #063a55;
  transform: scale(0.98);
}

.button.close {
  background-color: #f05454;
  color: white;
}

.button.close:hover {
  background-color: #d43535;
  transform: scale(1.05);
}

.button.close:active {
  background-color: #a82222;
  transform: scale(0.98);
}

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
  position: inherit;
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
