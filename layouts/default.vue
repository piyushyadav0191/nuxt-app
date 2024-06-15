<script setup lang="ts">
import Navbar from '~/components/resuables/Navbar.vue';
</script>

<template>
  <div>
    <!-- navbar -->
    <Navbar />
    <div class="pb-20 pt-[220px]">
      <slot />
    </div>
    <ModalAuthRegister />
  </div>
</template>
