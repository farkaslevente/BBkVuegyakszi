<script setup lang="ts">
import { VisibilityState } from "src/stores/store";
const VisibilityStore = VisibilityState();
localStorage.setItem('YourItem', "alma")
console.log(VisibilityStore.url);
if (VisibilityStore.url != "") {
  VisibilityStore.url =localStorage.getItem('YourItem');  
  console.log(VisibilityStore.url);
  // visibilityStore.url ="alma";
}
</script>

<template>
  <q-page>
    <div class="column flex-center" style="min-height: inherit">
      <!-- <img alt="Jedlik logo" src="../assets/Jedlik_big.png" /> -->
      <!-- <h2>Jedlik Ányos Technikum - Győr<br />Bazár Bunker Backup Frontend</h2> -->
      <img alt="Jedlik logo" src="https://media.tenor.com/2l4-h42qnmcAAAAi/toothless-dancing-toothless.gif" />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 3vw;
}
</style>
