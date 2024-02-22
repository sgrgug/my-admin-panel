<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useSideBar } from "@/stores/sidebar";
import { storeToRefs } from "pinia";

const { toggleSidebar } = storeToRefs(useSideBar());
</script>

<template>
  <div
    :class="{ 'w-60': toggleSidebar, 'w-20': !toggleSidebar }"
    class="sidebar fixed top-0 h-screen overflow-x-hidden bg-red-50 px-1 transition-all duration-200 hover:w-[240px]"
  >
    <div class="font-bolder flex items-center justify-between">
      <div class="flex items-center justify-start">
        <img class="h-20 w-20" src="../assets/img/logo.png" alt="" />
        <div class="font-serif text-2xl font-bold italic">Makura</div>
      </div>
      <div
        class="cursor-pointer text-red-500"
        @click="toggleSidebar = !toggleSidebar"
      >
        <font-awesome-icon
          v-if="!toggleSidebar"
          :icon="['fas', 'angles-right']"
        />
        <font-awesome-icon
          v-if="toggleSidebar"
          :icon="['fas', 'angles-left']"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
