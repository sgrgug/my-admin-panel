<script setup>
import CardPreset from "../preset/CardPreset.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <CardPreset>
    <div class="my-2 font-semibold">
      Messages <span class="text-stone-500">(0)</span>
    </div>
    <div class="flex h-60 items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <Icon class="text-4xl" icon="lucide:message-circle-off" />
        <small>No Message</small>
      </div>
    </div>
  </CardPreset>
</template>

<style scoped></style>
