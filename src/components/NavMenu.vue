<template>
  <nav class="bg-gray-800 text-white p-3">
    <ul class="flex space-x-4 justify-center">
      <li>
        <router-link to="/" class="hover:bg-gray-700 p-2 rounded">Notes list</router-link>
      </li>
      <li>
        <router-link to="/add" class="hover:bg-gray-700 p-2 rounded">Add Note</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style scoped></style>
