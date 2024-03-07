<script setup>
// import { ref } from "vue";
import MessageComponent from "@/components/widget/MessageComponent.vue";
import TabbedComponent from "@/components/widget/TabbedComponent.vue";
import TaskCompnent from "@/components/widget/TaskCompnent.vue";

// const activeTab = ref(false);
</script>

<template>
  <main>
    <div class="m-5">
      <div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div class="">
          <TabbedComponent />
        </div>
        <div class="">
          <TaskCompnent />
        </div>
        <div class="">
          <MessageComponent />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
