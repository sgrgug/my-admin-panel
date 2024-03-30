<script setup>
import { storeToRefs } from "pinia";
import HeaderComponent from "./components/HeaderComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import { RouterView } from "vue-router";
import { useSideBar } from "@/stores/sidebar";
import { useModal } from "@/stores/modal";
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const { toggleModal } = storeToRefs(useModal());
const { toggleSidebar } = storeToRefs(useSideBar());

const loadingTimer = ref(true);
setTimeout(() => {
  loadingTimer.value = false;
}, 7000);
</script>

<template>
  <!-- Transparent Background for modal view -->
  <div v-if="toggleModal" class="fixed top-0 z-[4] h-screen w-full">
    <div class="flex h-full w-full bg-slate-500/60 p-3 backdrop-blur-sm">
      <!-- Close Div -->
      <div
        class="hidden h-full w-full md:block"
        @click="toggleModal = !toggleModal"
      ></div>
      <!-- End Close Div -->

      <div class="h-full w-[700px] overflow-hidden rounded-lg bg-white p-5">
        <div
          v-if="loadingTimer"
          class="flex h-full items-center justify-center"
        >
          <img class="h-14 w-14" src="@/assets/loading.svg" alt="" />
        </div>
        <div v-else>
          <div class="flex h-[4%] items-center justify-between">
            <div class="font-semibold">Payment Details</div>
            <div class="cursor-pointer" @click="toggleModal = !toggleModal">
              <Icon class="text-2xl" icon="charm:cross" />
            </div>
          </div>
          <div class="my-4 h-[96%] overflow-scroll">
            <div v-for="index in 40" :key="index">
              <div class="m-1 rounded-sm bg-gray-100 px-3 py-1">
                <span class="uppercase text-stone-600"
                  >{{ index }}. Merchant:
                </span>
                <span>Developer Merchant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
