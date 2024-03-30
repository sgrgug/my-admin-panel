<script setup>
import { ref } from "vue";
import MessageComponent from "@/components/widget/MessageComponent.vue";
import TabbedComponent from "@/components/widget/TabbedComponent.vue";
import TaskCompnent from "@/components/widget/TaskCompnent.vue";
import CardPreset from "@/components/preset/CardPreset.vue";

// Buttons
import ActionButton from "@/components/Button/ActionButton.vue";

const grossRevenue = ref(0);
let revenue = 50590;
const interval = setInterval(() => {
  if (grossRevenue.value < revenue) {
    grossRevenue.value =
      grossRevenue.value + revenue / 300 < revenue
        ? grossRevenue.value + revenue / 300
        : revenue;
  } else {
    clearTimeout(interval);
  }
}, 1);
</script>

<template>
  <main>
    <div class="m-2 md:m-5">
      <div class="grid grid-cols-2 lg:grid-cols-4">
        <CardPreset>
          <div class="my-1 text-stone-500">Gross Revenue</div>
          <div>
            <span class="font-bold"> रु. </span>
            <span class="text-2xl font-bold">{{
              grossRevenue
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}</span>
          </div>
          <div class="mt-4">
            <span class="font-medium text-green-600"> +8% </span
            ><span>from last week</span>
          </div>
        </CardPreset>
        <CardPreset>
          <div class="my-1 text-stone-500">Average Order Value</div>
          <div>
            <span class="font-bold"> रु. </span>
            <span class="text-2xl font-bold">441.00</span>
          </div>
          <div class="mt-4">
            <span class="font-medium text-green-600"> +4% </span
            ><span>from last week</span>
          </div>
        </CardPreset>
        <CardPreset>
          <div class="my-1 text-stone-500">Total Orders</div>
          <div>
            <span class="text-2xl font-bold">68</span>
          </div>
          <div class="mt-4">
            <span class="font-medium text-green-600"> +3% </span
            ><span>from last week</span>
          </div>
        </CardPreset>
        <CardPreset>
          <div class="my-1 text-stone-500">Total Customers</div>
          <div>
            <span class="text-2xl font-bold">15</span>
          </div>
          <div class="mt-4">
            <span class="font-medium text-red-600"> -4% </span
            ><span>from last week</span>
          </div>
        </CardPreset>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3">
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

      <div class="grid md:grid-cols-2 lg:grid-cols-3">
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
    <div class="m-2">
      <ActionButton>+ Hello</ActionButton>
    </div>
  </main>
</template>

<style scoped></style>
