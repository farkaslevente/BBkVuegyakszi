<script setup lang="ts">
import { ref } from "vue";
//import { useI18n } from "vue-i18n";

// let { locale } = useI18n();

let showMenuBar = ref(true);
let showProfileItems = ref(false);
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <!-- Fejléc -->
    <q-header v-model="showMenuBar" class="bg-primary text-white" elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn to="/">
            <q-avatar style="height: 58px; width: 180px">
              <q-img src="../assets/smalllogo.png" />
            </q-avatar>
          </q-btn>
        </q-toolbar-title>

        <q-tabs v-if="$q.screen.gt.sm" inline-label shrink>
          <q-route-tab v-if="showProfileItems" icon="mdi-account" label="Profil" no-caps to="/profile" />
          <q-route-tab icon="mdi-login" label="Bejelentkezés" no-caps to="/login" />
          <q-route-tab v-if="showProfileItems" icon="mdi-list-box-outline" label="Hirdetéseim" no-caps to="/myAds" />
          <q-route-tab
            v-if="showProfileItems"
            icon="mdi-message-badge-outline"
            label="Üzenetek"
            no-capsto="/contacts"
          />
          <q-route-tab
            href="https://github.com/farkaslevente/14AA-D-Others"
            icon="mdi-github"
            label="Github"
            no-caps
            to="_blank"
          />
        </q-tabs>
        <q-btn flat icon="mdi-theme-light-dark" @click="$q.dark.toggle" />
      </q-toolbar>
    </q-header>

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
