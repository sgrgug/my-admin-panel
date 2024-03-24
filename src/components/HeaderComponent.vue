<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useSideBar } from "@/stores/sidebar";
import { storeToRefs } from "pinia";

const { toggleSidebar } = storeToRefs(useSideBar());
</script>

<template>
  <header
    class="sticky top-0 z-[1] flex items-center justify-start border-b-[1px] border-stone-200 bg-white p-3 md:z-0"
  >
    <div @click="toggleSidebar = !toggleSidebar">
      <font-awesome-icon
        class="cursor-pointer text-2xl text-stone-600"
        :icon="['fas', 'bars']"
      />
    </div>
    <!-- <nav class="flex items-center justify-between">
      <div>testing</div>
      <ul class="flex items-center space-x-1">
        <li>
          <a href="#"
            ><font-awesome-icon
              class="flex h-5 w-5 items-center justify-center rounded-full p-2 text-xl text-stone-600 hover:bg-stone-200"
              :icon="['far', 'moon']"
          /></a>
        </li>
        <li>
          <a href=""
            ><font-awesome-icon
              class="flex h-5 w-5 items-center justify-center rounded-full p-2 text-xl text-stone-600 hover:bg-stone-200"
              :icon="['far', 'bell']"
          /></a>
        </li>
        <li>
          <a href="">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full p-2 text-stone-600 hover:bg-stone-200"
            >
              <div
                class="flex h-7 w-7 items-center justify-center rounded-full bg-red-400 px-1 text-white"
              >
                SG
              </div>
            </div>
          </a>
        </li>
      </ul>
    </nav> -->

    <div
      :class="{ 'md:ml-60': !toggleSidebar, 'md:ml-14': toggleSidebar }"
      class="ml-0 flex w-full items-center justify-between transition-all duration-200 ease-in-out"
    >
      <div>
        <div class="hidden md:block">
          <div class="text-base font-semibold">Lokesh Gurung</div>
          <div class="tertiaryText text-xs">Sunday, Mar 03, 2024</div>
        </div>
      </div>
      <div>
        <nav class="flex items-center justify-between">
          <ul class="flex items-center space-x-1">
            <li>
              <a href="#"
                ><font-awesome-icon
                  class="flex h-5 w-5 items-center justify-center rounded-full p-2 text-xl text-stone-600 hover:bg-stone-200"
                  :icon="['far', 'moon']"
              /></a>
            </li>
            <li>
              <a href=""
                ><font-awesome-icon
                  class="flex h-5 w-5 items-center justify-center rounded-full p-2 text-xl text-stone-600 hover:bg-stone-200"
                  :icon="['far', 'bell']"
              /></a>
            </li>
            <li>
              <a href="">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-full p-2 text-stone-600 hover:bg-stone-200"
                >
                  <div
                    class="flex h-7 w-7 items-center justify-center rounded-full bg-red-400 px-1 text-white"
                  >
                    SG
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
