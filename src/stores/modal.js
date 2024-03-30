import { ref } from "vue";
import { defineStore } from "pinia";

export const useModal = defineStore("modal", () => {
  let toggleModal = ref(false);

  return { toggleModal };
});
