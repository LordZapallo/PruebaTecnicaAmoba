<script setup>
import SideBar from "./components/SideBar.vue";
import HeaderVue from "./components/Header.vue";
</script>

<template>
  <div class="app">
    <SideBar />
    <div class="main">
      <HeaderVue />
      <router-view />
    </div>
  </div>
</template>
