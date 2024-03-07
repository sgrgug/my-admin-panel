<script setup>
import { storeToRefs } from "pinia";
import HeaderComponent from "./components/HeaderComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import { useSideBar } from "@/stores/sidebar";
import { RouterView } from "vue-router";

const { toggleSidebar } = storeToRefs(useSideBar());

console.log("helo wolrd");
</script>

<template>
  <!-- transparent background for mobile view menu -->
  <div
    v-if="toggleSidebar"
    class="fixed top-0 z-[2] h-full w-full bg-black/60 md:hidden"
    @click="toggleSidebar = !toggleSidebar"
  ></div>

  <!-- Header -->
  <HeaderComponent />

  <!-- SideBar -->
  <SidebarComponent />

  <!-- body -->
  <div
    :class="{ 'md:ml-60': !toggleSidebar, 'md:ml-14': toggleSidebar }"
    class="ml-0 transition-all duration-200 ease-in-out"
  >
    <RouterView />
  </div>
</template>

<style scoped></style>
