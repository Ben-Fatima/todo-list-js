<script setup>
import { Menu } from './components'
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <Menu />
  </div>
  <div class="pt-12">
    <RouterView />
  </div>
</template>

<style scoped></style>
