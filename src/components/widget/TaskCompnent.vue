<script setup>
import CardPreset from "../preset/CardPreset.vue";
</script>

<template>
  <CardPreset>
    <div class="my-2 font-semibold">
      Task <span class="text-stone-500">(4)</span>
    </div>
    <div class="h-60 overflow-hidden hover:overflow-y-scroll">
      <div class="task flex items-center justify-start gap-3 p-4">
        <input type="checkbox" name="" id="label1" />
        <div class="flex flex-col">
          <label for="label1">Lorem ipsum dolor sit amet.</label>
          <small class="tertiaryText">9 Aug 2023 at 10:30</small>
        </div>
      </div>
      <hr />
      <div class="task flex items-center justify-start gap-3 p-4">
        <input type="checkbox" name="" id="label2" />
        <div class="flex flex-col">
          <label for="label2">Lorem ipsum dolor sit amet.</label>
          <small class="tertiaryText">9 Aug 2023 at 10:30</small>
        </div>
      </div>
      <hr />
      <div class="task flex items-center justify-start gap-3 p-4">
        <input type="checkbox" name="" id="label3" />
        <div class="flex flex-col">
          <label for="label3">Lorem ipsum dolor sit amet.</label>
          <small class="tertiaryText">9 Aug 2023 at 10:30</small>
        </div>
      </div>
      <hr />
      <div class="task flex items-center justify-start gap-3 p-4">
        <input type="checkbox" name="" id="label4" />
        <div class="flex flex-col">
          <label for="label4">Lorem ipsum dolor sit amet.</label>
          <small class="tertiaryText">9 Aug 2023 at 10:30</small>
        </div>
      </div>
    </div>
  </CardPreset>
</template>

<style scoped>
.task:hover {
  background-color: var(--secondary);
}
.task input[type="checkbox"] {
  accent-color: var(--primary);
}
</style>
