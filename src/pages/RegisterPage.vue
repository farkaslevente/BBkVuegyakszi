<template>
  <img
    class="backgroundImage"
    v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.sm }"
    src="../assets/background.png"
  />
  <div class="row flex-center" style="height: 85vh">
    <div class="col-0 col-md-3 flex justify-center content-center">
      <img class="responsive" src="../assets/applogo.png" />
    </div>
    <div
      class="col-12 col-md-6 flex content-center justify-center"
      v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.sm }"
    >
      <q-card v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '60%' }">
        <q-card-section>
          <q-avatar class="absolute-center shadow-0" size="100px" style="margin-top: 30px">
            <img alt="avatar" src="../assets/avatar-graduate-graduation-svgrepo-com.svg" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class="text-h1 text-uppercase q-my-none text-weight regular">Regisztráció</h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input v-model="register.name" label="Felhasználónév"> </q-input>
            <q-input v-model="register.email" label="E-mail cím"> </q-input>
            <q-input v-model="register.password" label="Jelszó" type="password"> </q-input>
            <!-- <q-select v-model="counties" filled label="Vármegye" :options="countyOptions" />
            <q-select v-model="model" filled label="Vármegye" :options="settlementsOptions" /> -->
            <!-- <q-input v-model="register.location" label="Telefonszám"> </q-input>
            <div> -->
            <q-input v-model="register.confirm_password" label="Jelszó megerősítése" type="password"> </q-input>

            <div>
              <q-btn class="full-width" color="primary" label="Regisztrálok" rounded @click="handleRegister()"></q-btn>
              <!-- <q-btn class="full-width" color="primary" label="Regisztrálok" rounded @click="handleGetTest()"></q-btn> -->
              <div class="text-red flex justify-center" style="margin-top: 10px">
                {{ errorDesc }}
              </div>
              <div class="text-center q-mt-sm q-gutter-lg column">
                <router-link class="text-blue" to="/login">Már rendelkezik fiókkal?</router-link>                
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup lang="ts">

import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import IRegister from "../interfaces/register.interface";
import { VisibilityState } from "../stores/store"
const VisibilityStore = VisibilityState()
const errorDesc = ref();
const router = useRouter();
const register = reactive<IRegister>({
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  location: "",
  county: "",
});

const handleRegister = async () => {
  try {
    if (register.name != "") {
      // HasName = true;
      if (register.email.includes("@")) {
        // HasEmail = true;
        if (register.password == register.confirm_password) {
          // MatchingPwds = true;
          console.log(register.name, register.email, register.location, register.password)
          const response = await axios.post(`${VisibilityStore.url}/register`, {
            name: register.name,
            email: register.email,
            location: register.location,
            password: register.password,
          });
          console.log("Registered successful", response.data);
          router.replace({ path: "/login" });
        } else {
          errorDesc.value = "Nem egyeznek a jelszavai!";
        }
      } else {
        errorDesc.value = "Nem megfelelő email cím!";
      }
    } else {
      errorDesc.value = "Adjon meg egy felhasználónevet!";
    }
  } catch (error) {
    console.error("Registration failed", error.response.data);  
  }
};
</script>
<style lang="scss" scoped>
.backgroundImage {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 100;
  bottom: 100;
  z-index: -1;
  filter: blur(8px);
  -webkit-filter: blur(20px);
}
h2 {
  font-size: 3vw;
}
</style>
