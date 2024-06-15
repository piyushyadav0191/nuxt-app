<template>
  <div class="fixed w-full bg-white z-10 shadow-sm">
    <div class="py-4 border-b-[1px]">
      <Container>
        <!-- logo -->
        <Logo />
        <!-- Search  -->
        <Search />
        <!-- usermenu -->
      </Container>
    </div>
  </div>
</template>
<script setup lang="ts">
import Container from "./Container.vue";
import Logo from "./Logo.vue";
import Search from "./Search.vue";
</script>