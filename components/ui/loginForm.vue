<template>
  <div class="login">
    <div class="container">
      <div class="login-box">
        <p class="intro-text">
          ¡Inicia sesión para tener acceso a tus datos más recientes!
        </p>

        <div class="input-group">
          <label for="username" class="label">Usuario</label>
          <input id="username" type="text" class="input" placeholder="Usuario">
        </div>

        <div class="input-group">
          <label for="password" class="label">Password</label>
          <input id="password" type="password" class="input" placeholder="Password">
        </div>

        <button class="login-button">
          Iniciar Sesión
        </button>

        <p class="forgot-password">
          ¿Olvidaste la contraseña?
        </p>

        <div class="signup-group">
          <span class="signup-text">No tienes cuenta.</span>
          <button class="signup-button">
            Regístrate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
.login {
  background-color: #3282b8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.container {
  background-color: #3282b8;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.login-box {
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 40px;
  width: 400px;
  text-align: center;
}

.intro-text {
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 22px;
  margin-bottom: 20px;
}

.input-group {
  margin: 15px 0;
}

.label {
  display: block;
  color: #3c2f3d;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
}

.input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  color: #3c2f3d;
}

.login-button {
  background-color: #0f4c75;
  color: #ffffff;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
}

.forgot-password {
  color: rgba(60, 47, 61, 0.65);
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
}

.signup-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.signup-text {
  color: #3c2f3d;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  margin-right: 5px;
}

.signup-button {
  background: none;
  color: #0f4c75;
  font-family: "Poppins-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}
</style>
