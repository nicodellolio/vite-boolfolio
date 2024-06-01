<script>

import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterView,
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark px-5">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0 d-flex align-items-center gap-4">
        <li class="nav-item text-light">
          <RouterLink class="text-warning nav-link" :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="text-warning nav-link" :to="{ name: 'projects' }">Projects</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="text-warning nav-link" :to="{ name: 'about' }">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="text-warning nav-link" :to="{ name: 'contacts' }">Contacts</RouterLink>
        </li>

        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="#">Action 1</a>
            <a class="dropdown-item" href="#">Action 2</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  
  <main>
    <Routerview />
  </main>
  
  
  
</template>

<style></style>
