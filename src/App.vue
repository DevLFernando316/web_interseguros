<template>
  <div id="app">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />

    <!-- Botones flotantes -->
    <ButtonContact />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ButtonContact from "@/components/ButtonContact.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
