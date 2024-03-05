import { defineStore } from "pinia";
import { ref } from "vue";

export const VisibilityState = defineStore(
    "visibilityStore",() =>{    
      const showMenuBar = ref(true);
      const visibleOnMain = ref(false);
      const showRightDrawer = ref(false);
    }  
  );