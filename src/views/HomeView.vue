<template>
  <div class="container d-flex flex-column flex-md-row align-items-center mt-5">
      <div class="col-md-8 text-center text-md-start">
        <h1>Piezīmju veidošanas mājaslapa.</h1>
        <p>Šajā mājaslapā tu spēsi veidot piezīmes, kā arī iedvesmoties no random quote sadaļas.</p>
      </div>
      <div class="col-md-4 d-flex justify-content-center">
        <img src="../assets/images/laptop2.png" alt="laptop" class="img-fluid">
      </div>
  </div>
  <div class="mt-5 position-relative">
    <img src="../assets/images/qotd_bg.jpg" alt="qotd" class="w-100 qotd-img">
    <div class="position-absolute top-50 start-50 translate-middle text-white text-center w-75">
        <h2 class="mb-4">/” Random quote ”/</h2>
        <p class="quote">{{ quote }}</p>
        <p class="quote-author">— {{ author }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const quote = ref("Ielādē quote...");
const author = ref("");

async function fetchQuote() {
    try {
        const response = await fetch("https://api.allorigins.win/get?url=https://zenquotes.io/api/random");
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);

        quote.value = parsedData[0].q;
        author.value = parsedData[0].a;
    } catch (error) {
        quote.value = "Neizdevās ielādēt quote.";
        author.value = "";
    }
}

onMounted(() => {
    fetchQuote();
});
</script>