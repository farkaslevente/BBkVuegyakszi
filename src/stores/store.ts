import { defineStore } from "pinia";
import { ref } from "vue";

export const VisibilityState = defineStore(
    "visibilityStore",() =>{ 
       const url = "http://10.0.22.14:9000";
       const showMenuBar = ref(true);
       const visibleOnMain = ref(false);
       const showRightDrawer = ref(false);        
       return{showMenuBar, visibleOnMain, showRightDrawer,url}
   }   
  );