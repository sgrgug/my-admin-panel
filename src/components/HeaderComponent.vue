<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <header
    class="sticky top-0 flex items-center justify-between border-b-[1px] border-stone-200 bg-white p-3"
  >
    <div>
      <font-awesome-icon
        class="cursor-pointer text-xl text-stone-600"
        :icon="['fas', 'bars']"
      />
    </div>
    <nav>
      <ul class="flex items-center space-x-3">
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
          <a href="#"
            ><div class="rounded-full bg-purple-500 p-2 text-white">SG</div></a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
