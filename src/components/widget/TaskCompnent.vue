<script setup></script>

<template>
  <div class="rounded-md border-[1px] border-gray-200 p-2">
    <div class="my-2 font-semibold">
      Task <span class="text-stone-500">(4)</span>
    </div>
    <div class="h-60 overflow-hidden hover:overflow-y-scroll">
      <div class="task">
        <input type="checkbox" name="" id="label1" />
        <div class="flex flex-col">
          <label for="label1">Lorem ipsum dolor sit amet.</label>
          <small class="text-[#7b818d]">9 Aug 2023 at 10:30</small>
        </div>
      </div>
      <hr />
      <div class="task">
        <input type="checkbox" name="" id="label2" />
        <div class="flex flex-col">
          <label for="label2">Lorem ipsum dolor sit amet.</label>
          <small class="text-[#7b818d]">9 Aug 2023 at 10:30</small>
        </div>
      </div>
      <hr />
      <div class="task">
        <input type="checkbox" name="" id="label3" />
        <div class="flex flex-col">
          <label for="label3">Lorem ipsum dolor sit amet.</label>
          <small class="text-[#7b818d]">9 Aug 2023 at 10:30</small>
        </div>
      </div>
      <hr />
      <div class="task">
        <input type="checkbox" name="" id="label4" />
        <div class="flex flex-col">
          <label for="label4">Lorem ipsum dolor sit amet.</label>
          <small class="text-[#7b818d]">9 Aug 2023 at 10:30</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task {
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
}
.task:hover {
  background-color: var(--secondary);
}
.task input[type="checkbox"] {
  accent-color: var(--primary);
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
</style>
