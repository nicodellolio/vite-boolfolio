<script>

export default {
  name: 'AppHeader',
}
</script>

<template>

  <nav class="d-flex navbar border-bottom border-1 border-secondary align-items-center justify-content-between" style="padding: 0 15%;">

    <div class="nav-brand display-4 p-bg-darker px-2 my-2 border-light border border-4" style="font-weight: 900;">
      <RouterLink class="text-decoration-none text-light" :to="{ name: 'home' }">Nico</RouterLink>
    </div>

    <ul class="list-unstyled d-flex gap-4 my-2 fw-bold fs-4 pt-3">

      <li class="nav-item fw-bold">
        <RouterLink class="text-warning nav-link" :to="{ name: 'home' }">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="text-success nav-link fw-bolder" :to="{ name: 'projects' }">Projects</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="text-warning nav-link" :to="{ name: 'about' }">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="text-warning nav-link" :to="{ name: 'contacts' }">Contacts</RouterLink>
      </li>
      
    </ul>
  </nav>

</template>

<style></style>
