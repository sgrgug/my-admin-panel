<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useSideBar } from "@/stores/sidebar";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { ref } from "vue";
// import SGIcons from "@/components/IconComponent.vue/SGIcons.vue";

const { toggleSidebar } = storeToRefs(useSideBar());

const active = ref(true);
</script>

<template>
  <div
    :class="{ 'w-0 md:w-60': !toggleSidebar, 'w-60 md:w-14': toggleSidebar }"
    class="sidebar fixed bottom-0 top-0 z-[3] h-full overflow-x-hidden border-r-2 border-zinc-200 bg-white transition-all duration-200 ease-in-out md:flex md:flex-col md:justify-between md:hover:w-[240px]"
  >
    <!-- <div>
      <div class="font-bolder flex items-center justify-between">
        <div class="flex items-center justify-start">
          <img class="h-20 w-20" src="../assets/img/logo.png" alt="" />
          <div class="font-serif text-2xl font-bold italic">Makura</div>
        </div>
      </div>

      <nav>
        <ul>
          <RouterLink to="/">
            <div
              class="link active mb-1 flex items-baseline space-x-3 py-2 pl-5 text-stone-700 hover:cursor-pointer"
            >
              <div class="h-5 w-5">
                <font-awesome-icon
                  class="text-xl text-stone-700"
                  :icon="['fas', 'house']"
                />
              </div>
              <li class="px-1 text-stone-700">Home</li>
            </div>
          </RouterLink>

          <RouterLink to="/">
            <div
              class="link mb-1 flex items-baseline space-x-3 py-2 pl-5 text-stone-700 hover:cursor-pointer"
            >
              <div class="h-5 w-5">
                <font-awesome-icon
                  class="text-xl text-stone-700"
                  :icon="['far', 'user']"
                />
              </div>
              <li class="px-1 text-stone-700">Profile</li>
            </div>
          </RouterLink>

          <RouterLink to="/">
            <div
              class="link mb-1 flex items-baseline space-x-3 py-2 pl-5 text-stone-700 hover:cursor-pointer"
            >
              <font-awesome-icon
                class="text-xl text-stone-700"
                :icon="['fas', 'shop']"
              />
              <li class="px-1 text-stone-700">Store</li>
            </div>
          </RouterLink>
        </ul>
      </nav>
    </div> -->

    <div class="">
      <div class="border-b-[1px] px-6 py-5 text-2xl font-bold">Logo</div>
      <ul class="px-6 py-5">
        <RouterLink to="/">
          <div
            class="link my-1 flex items-center gap-4 p-2"
            :class="{ 'rounded-md bg-[#eeeff1]': active }"
          >
            <ion-icon
              :class="{ 'text-2xl': active }"
              name="bag-check-outline"
            ></ion-icon>
            <li :class="{ 'font-medium': active }">Home</li>
          </div>
        </RouterLink>
        <RouterLink to="/">
          <div class="link my-1 flex items-center gap-4 p-2">
            <ion-icon
              class="non-active-icon"
              name="filter-circle-outline"
            ></ion-icon>
            <li>Monitor</li>
          </div>
        </RouterLink>
        <RouterLink to="/">
          <div class="link my-1 flex items-center gap-4 p-2">
            <ion-icon
              class="non-active-icon"
              name="game-controller-outline"
            ></ion-icon>
            <li>Heartbeats</li>
          </div>
        </RouterLink>
        <RouterLink to="/">
          <div class="link my-1 flex items-center gap-4 p-2">
            <ion-icon class="non-active-icon" name="medical-outline"></ion-icon>
            <li>Incidents</li>
          </div>
        </RouterLink>
        <RouterLink to="/">
          <div class="link my-1 flex items-center gap-4 p-2">
            <ion-icon class="non-active-icon" name="paw-outline"></ion-icon>
            <li>Team members</li>
          </div>
        </RouterLink>
        <RouterLink to="/">
          <div class="link my-1 flex items-center gap-4 p-2">
            <ion-icon class="non-active-icon" name="snow-outline"></ion-icon>
            <li>Status pages</li>
          </div>
        </RouterLink>
        <RouterLink to="/">
          <div class="link my-1 flex items-center gap-4 p-2">
            <ion-icon class="non-active-icon" name="trophy-outline"></ion-icon>
            <li>Integrations</li>
          </div>
        </RouterLink>
      </ul>
    </div>
    <div>
      <div
        class="hidden cursor-pointer bg-blue-200 text-center text-2xl text-red-500 md:block"
        @click="toggleSidebar = !toggleSidebar"
      >
        <font-awesome-icon
          v-if="!toggleSidebar"
          :icon="['fas', 'angles-right']"
        />
        <font-awesome-icon
          v-if="toggleSidebar"
          :icon="['fas', 'angles-left']"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
ul .link:hover {
  background-color: #eeeff1;
}

ul .link:hover li {
  font-weight: 500;
  color: #181818;
}

ul .link:hover {
  color: #181818;
}

.active {
  background-color: #eeeff1;
  font-weight: 500;
  color: #181818;
  border-left: 4px solid #f5a623;
}

ion-icon {
  font-size: 1.5rem;
  line-height: 2rem;
}

.non-active-icon {
  color: #7d8d9f;
}
</style>
