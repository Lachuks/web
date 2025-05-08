<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="nav-link px-2 navbar-brand">Webpage</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link px-2 text-muted">Sākums</RouterLink>
          <RouterLink to="/write-note" class="nav-link px-2 text-muted">Rakstīt piezīmi</RouterLink>
          <RouterLink to="/view-notes" class="nav-link px-2 text-muted">Skatīt piezīmes</RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li><RouterLink to="/" class="nav-link px-2 text-muted">Sākums</RouterLink></li>
      <li><RouterLink to="/write-note" class="nav-link px-2 text-muted">Rakstīt piezīmi</RouterLink></li>
      <li><RouterLink to="/view-notes" class="nav-link px-2 text-muted">Skatīt piezīmes</RouterLink></li>
    </ul>
    <p class="text-center text-muted">{{ currentYear }} &copy; Māris Gaveika</p>
  </footer>
</template>
<script>

export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>