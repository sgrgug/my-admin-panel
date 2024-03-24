<script setup>
import CardPreset from "../preset/CardPreset.vue";
</script>

<template>
  <CardPreset>
    <div class="my-2 font-semibold">
      Interview Request <span class="text-stone-500">(7)</span>
    </div>
    <div class="h-60">
      <ul class="flex items-center justify-start space-x-1">
        <li class="active bg-secondary p-2 text-xs">This week (3)</li>
        <li class="bg-secondary p-2 text-xs">Next week (1)</li>
        <li class="bg-secondary p-2 text-xs">This Month (1)</li>
      </ul>
      <div class="my-2">
        <div class="flex h-32 items-center justify-center">
          This is this week.
        </div>
        <!-- <div class="flex h-32 items-center justify-center">
          This is next week.
        </div>
        <div class="flex h-32 items-center justify-center">
          This is month.
        </div> -->
      </div>
    </div>
  </CardPreset>
</template>

<style scoped>
ul li {
  color: var(--tertiary);
  cursor: pointer;
}
ul li:hover {
  color: #000;
  font-weight: 600;
}

.active {
  border-bottom: 2px solid var(--primary);
  color: #000;
  font-weight: 600;
}
</style>
