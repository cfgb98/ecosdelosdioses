<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 flex items-center justify-center">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-bold text-center text-orange-700">Crea tu cuenta</h2>
      <p class="text-center text-sm text-orange-600 mt-1">Explora la sabiduría de la mitología</p>
      <form class="mt-6">
        <!-- Nombre de usuario -->
        <div>
          <label for="username" class="block text-sm font-medium text-orange-800">Nombre de usuario</label>
          <input
              type="text"
              id="username"
              name="username"
              class="w-full mt-1 px-4 py-2 border border-orange-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
              placeholder="Escribe tu nombre de usuario"
          />
        </div>

        <!-- Email -->
        <div class="mt-4">
          <label for="email" class="block text-sm font-medium text-orange-800">Correo electr&oacute;nico</label>
          <input
              type="email"
              id="email"
              name="email"
              class="w-full mt-1 px-4 py-2 border border-orange-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
              placeholder="example@correo.com"
          />
        </div>

        <!-- Contraseña -->
        <div class="mt-4">
          <label for="password" class="block text-sm font-medium text-orange-800">Contrase&ntilde;a</label>
          <input
              type="password"
              id="password"
              name="password"
              class="w-full mt-1 px-4 py-2 border border-orange-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
              placeholder="Crea una contraseña segura"
          />
        </div>

        <!-- Confirmar contraseña -->
        <div class="mt-4">
          <label for="confirm-password" class="block text-sm font-medium text-orange-800">Confirma tu contrase&ntilde;a</label>
          <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              class="w-full mt-1 px-4 py-2 border border-orange-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
              placeholder="Vuelve a escribir la contraseña"
          />
        </div>

        <!-- Botón de envío -->
        <div class="mt-6">
          <button
              type="submit"
              class="w-full px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Crear cuenta
          </button>
        </div>
      </form>

      <!-- Enlace a iniciar sesión -->
      <p class="text-center text-sm text-orange-700 mt-4">
        ¿Ya tienes una cuenta?
        <a href="/login" class="text-orange-800 font-semibold hover:underline">Inicia sesi&oacute;n</a>
      </p>
    </div>
  </div>

</template>

<style scoped>

</style>