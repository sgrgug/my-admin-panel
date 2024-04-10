<script setup>
import { defineProps, ref } from "vue";
import TransButton from "./Button/TransButton.vue";
import { Icon } from "@iconify/vue";

defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  pagination: {
    type: Boolean,
    default: false,
  },
});

// enum for the status of the order
const OrderStatus = {
  Pending: "Pending",
  Completed: "Completed",
  Cancel: "Cancel",
};

const checkBox = ref(false);

// checkbox
</script>
<template>
  <div class="my-5 flex items-center justify-between">
    <div class="text-3xl font-bold">Orders</div>
    <div class="flex items-center justify-between gap-2">
      <div>
        <TransButton :icon="true">
          <template #icon>
            <Icon icon="fluent:arrow-sort-24-regular" />
          </template>
          <template #title>Sort</template>
        </TransButton>
      </div>
      <div>
        <TransButton :icon="true">
          <template #icon>
            <Icon icon="fluent:filter-24-regular" />
          </template>
          <template #title>Filter</template>
        </TransButton>
      </div>
    </div>
  </div>
  <table class="w-full table-auto">
    <thead>
      <tr class="h-12">
        <th>
          <input type="checkbox" name="" id="" @click="checkBox = !checkBox" />
        </th>
        <th
          class="text-start font-semibold uppercase"
          v-for="(header, index) in headers"
          :key="index"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="h-14"
        :class="{ 'bg-slate-50': rowIndex % 2 === 0 }"
        v-for="(row, rowIndex) in data"
        :key="rowIndex"
      >
        <td class="text-center">
          <input
            type="checkbox"
            :checked="checkBox"
            name=""
            :id="row.orderID"
          />
        </td>
        <td>#{{ row.orderID }}</td>
        <td>{{ row.cName }}</td>
        <td>{{ row.date }}</td>
        <td><span class="font-bold"> रु. </span>{{ row.price }}</td>
        <td>{{ row.items }}</td>
        <td>
          <span
            class="block w-28 rounded-sm p-1 text-center font-medium"
            :class="{
              'bg-orange-100 text-amber-400':
                row.status === OrderStatus.Pending,
              'bg-green-100 text-green-400':
                row.status === OrderStatus.Completed,
              'bg-red-100 text-red-400': row.status === OrderStatus.Cancel,
            }"
            >{{ row.status }}</span
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* Add your CSS styling for the table component */
</style>
