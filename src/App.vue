<script>


export default {
  name: 'App',
}
</script>

<template>

  <nav class="d-flex navbar border-warning border align-items-center justify-content-between" style="padding: 0 15%;">

    <div class="nav-brand display-4 text-success" style="font-weight: 900;">Nico</div>

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
  
  <main>
    <RouterView />
  </main>


</template>

<style></style>
