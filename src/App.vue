<script setup lang="ts">
import {ref} from "vue";
import Footer from "./components/Footer.vue";
import SingUpForm from "./components/SingUpForm.vue";

const civilizations = ref([
  {
    id: 1,
    name: "Civilización Griega",
    description: "Descubre el panteón olímpico y sus épicas historias.",
    image: "https://via.placeholder.com/300x200?text=Grecia",
  },
  {
    id: 2,
    name: "Civilización Nórdica",
    description: "Explora los mitos de los vikingos y su cosmos único.",
    image: "https://via.placeholder.com/300x200?text=Nórdica",
  },
  {
    id: 3,
    name: "Civilización Egipcia",
    description: "Adéntrate en las historias de los faraones y los dioses.",
    image: "https://via.placeholder.com/300x200?text=Egipcia",
  },
]);

</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
    <header class="bg-gray-800 shadow-md">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-center">Mundos Míticos</h1>
        <p class="text-center text-gray-400">Explora los mitos y leyendas de las civilizaciones antiguas</p>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="civilization in civilizations"
            :key="civilization.id"
            class="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <img
              :src="civilization.image"
              :alt="civilization.name"
              class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ civilization.name }}</h2>
            <p class="text-gray-300 mt-2 text-sm">{{ civilization.description }}</p>
            <button
                class="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition" >
              Explorar m&aacute;s
            </button>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
  <SingUpForm/>
</template>

<style scoped>
</style>
