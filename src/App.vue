<template>
  <div id="app">
    <header>
      <h1>IBAN Validator</h1>
    </header>
    <main>
      <IbanValidator />
    </main>
    <footer>
      <p>&copy; 2024 IBAN Validator. Tous droits réservés. <a href="https://stephaniearlt.fr" target="blank">Développé par Stéphanie Arlt.</a></p>
    </footer>
  </div>
</template>

<script>

import IbanValidator from './components/IbanValidator.vue';
import { controlScroll } from './scrollControl.js';

export default {
  name: 'App',
  // Composants utilisés dans App.vue 
  components: {
    IbanValidator
  },
  created() {
    controlScroll(); 
  }
};
</script>

<style src="./assets/styles.css"></style>
