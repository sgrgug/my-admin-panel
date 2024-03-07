<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="rounded-md border-[1px] border-gray-200 p-2">
    <div class="my-2 font-semibold">
      Messages <span class="text-stone-500">(0)</span>
    </div>
    <div class="flex h-60 items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <Icon class="text-4xl" icon="lucide:message-circle-off" />
        <small>No Message</small>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
