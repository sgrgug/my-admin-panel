<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useSideBar } from '@/stores/sidebar';
import { storeToRefs } from 'pinia';

const active = ref(true);
const { toggleSidebar } = storeToRefs(useSideBar());

</script>

<template>
    <nav class="bg-secondary"
        :class="{ 'min-w-64 lg:w-64 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out': !toggleSidebar,
        'min-w-64 lg:w-64 relative inset-y-0 left-0 md:absolute md:-translate-x-full transform -translate-x-0 transition duration-200 ease-in-out' : toggleSidebar }">
    <div class="">
        <div class="px-6 py-5 text-2xl font-bold border-b-[1px]">
            Logo
        </div>
        <ul class="px-6 py-5">
            <RouterLink to="/">
                <div class="link flex items-center gap-4 p-2 my-1" :class="{ 'bg-[#eeeff1] rounded-md': active }">
                    <ion-icon :class="{ 'text-2xl': active }" name="bag-check-outline"></ion-icon>
                    <li :class="{ 'font-medium': active }">Home</li>
                </div>
            </RouterLink>
            <RouterLink to="/">
                <div class="link flex items-center gap-4 p-2 my-1">
                    <ion-icon class="non-active-icon" name="filter-circle-outline"></ion-icon>
                    <li>Monitor</li>
                </div>
            </RouterLink>
            <RouterLink to="/">
                <div class="link flex items-center gap-4 p-2 my-1">
                    <ion-icon class="non-active-icon" name="game-controller-outline"></ion-icon>
                    <li>Heartbeats</li>
                </div>
            </RouterLink>
            <RouterLink to="/">
                <div class="link flex items-center gap-4 p-2 my-1">
                    <ion-icon class="non-active-icon" name="medical-outline"></ion-icon>
                    <li>Incidents</li>
                </div>
            </RouterLink>
            <RouterLink to="/">
                <div class="link flex items-center gap-4 p-2 my-1">
                    <ion-icon class="non-active-icon" name="paw-outline"></ion-icon>
                    <li>Team members</li>
                </div>
            </RouterLink>
            <RouterLink to="/">
                <div class="link flex items-center gap-4 p-2 my-1">
                    <ion-icon class="non-active-icon" name="snow-outline"></ion-icon>
                    <li>Status pages</li>
                </div>
            </RouterLink>
            <RouterLink to="/">
                <div class="link flex items-center gap-4 p-2 my-1">
                    <ion-icon class="non-active-icon" name="trophy-outline"></ion-icon>
                    <li>Integrations</li>
                </div>
            </RouterLink>
        </ul>
    </div>
</nav></template>

<style scoped>
ul .link:hover {
    background-color: #eeeff1;
    border-radius: 0.375rem;
}

ul .link:hover li {
    font-weight: 500;
    color: #181818;
}

ul .link:hover ion-icon {
    color: #181818;
}

.active {
    background-color: #eeeff1;
    font-weight: 500;
    color: #181818;
}

ion-icon {
    font-size: 1.5rem;
    line-height: 2rem;
}

.non-active-icon {
    color: #7d8d9f;
}

@keyframes slide {
    0% {
        transform: translateX(0px);
        width: 240px;
    }

    100% {
        transform: translateX(-240px);
        width: 0px;
    }
}

.slide {
    animation: slide 0.5s ease-in-out forwards;
}</style>