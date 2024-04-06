<script setup>
import { defineProps } from "vue";

defineProps({
  icon: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="flex w-fit items-center justify-between rounded-md border-[1px] px-3 py-1 font-semibold text-black duration-300 hover:shadow-md"
  >
    <div class="mr-1 text-stone-500" v-if="icon">
      <slot name="icon"></slot>
    </div>
    <div class="font-medium text-black">
      <slot name="title"></slot>
    </div>
  </button>
</template>

<style scoped></style>
