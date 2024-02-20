import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSideBar = defineStore('sidebar', () => {
    
    let toggleSidebar = ref(false);

    return { toggleSidebar }

})
