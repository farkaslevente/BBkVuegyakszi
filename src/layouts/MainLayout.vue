<script setup lang="ts">

import { VisibilityState } from "../stores/store"
const VisibilityStore = VisibilityState()
//import { useI18n } from "vue-i18n";

// let { locale } = useI18n();

</script>

<template>
  <q-layout view="hHh LpR fFf">
    <!-- Fejléc -->
    <q-header v-model="VisibilityStore.showMenuBar" class="bg-primary text-white" elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn to="/">
            <q-avatar style="height: 58px; width: 180px">
              <q-img src="../assets/smalllogo.png" />
            </q-avatar>
          </q-btn>
        </q-toolbar-title>

        <q-tabs v-if="$q.screen.gt.sm" inline-label shrink> </q-tabs>
        <q-btn flat icon="mdi-theme-light-dark" @click="$q.dark.toggle" />
        <q-btn dense flat icon="mdi-menu" round @click="VisibilityStore.showRightDrawer = !VisibilityStore.showRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="VisibilityStore.showRightDrawer" elevated side="right" :width="150">
      <q-tabs inline-label vertical>
        <q-route-tab v-if="VisibilityStore.visibleOnMain" icon="mdi-account" label="Profil" no-caps to="/profile" />
        <q-route-tab v-if="VisibilityStore.visibleOnMain" icon="mdi-message-badge-outline" label="Üzenetek" to="/contacts" />
        <q-route-tab v-if="VisibilityStore.visibleOnMain" icon="mdi-list-box-outline" label="Hirdetéseim" no-caps to="/myAds" />      
        <q-route-tab icon="mdi-login" label="Bejelentkezés" no-caps to="/login" />
        <q-route-tab v-if="VisibilityStore.visibleOnMain" icon="mdi-login" label="Kijelentkezés" no-caps to="/login" />

        <q-route-tab
          href="https://github.com/farkaslevente/BBkVueBackupFrontend"
          icon="mdi-github"
          label="Github"
          no-caps
          to="_blank"
        /> </q-tabs
    ></q-drawer>

    <!-- A router ide (router-view) tölti be az oldalt -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.active {
  background-color: #dddddd;
}
</style>
