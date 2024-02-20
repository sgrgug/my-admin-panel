<script setup>
import { useSideBar } from '@/stores/sidebar';
import { storeToRefs } from 'pinia';

const { toggleSidebar } = storeToRefs(useSideBar());

</script>

<template>
    <div class="flex justify-between items-center border-b-[1px] p-2">
        <div @click="toggleSidebar = !toggleSidebar">
            <ion-icon name="menu"></ion-icon>
        </div>
        <div class="bg-green-300">
            <form action="" class="border-2">
                <input type="text" name="" id="">
            </form>
        </div>
        <div class="flex items-center">
            <ion-icon name="notifications"></ion-icon>
            <ion-icon name="person"></ion-icon>
            <div class="flex items-center">
                <div>Sagar</div>
                <div>Admin</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>