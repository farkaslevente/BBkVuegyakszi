<template>
    <img
      class="backgroundImage"
      v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.sm }"
      src="../assets/background.png"
    />
    <div class="row flex-center" style="height: 85vh">      
      <div
        class="col-12 col-md-6 flex content-center justify-center"
        v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.sm }"
      >
        <q-card v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '60%' }">
          <q-card-section>
            <q-avatar class="absolute-center shadow-0" size="800px" style="margin-top: 40px">
              <img alt="avatar" src="../assets/lost-svgrepo-com.svg" style="height:90px"/>
            </q-avatar>
            <p v-if="VisibilityStore.url == VisibilityStore.url">{{VisibilityStore.url}}</p>
            
          </q-card-section>
          <q-card-section>
            <div class="q-pt-lg">
              <div class="col text-h6 ellipsis flex justify-center">
                <h2 class="text-h1 text-uppercase q-my-none text-weight regular"> Új Jelszó igénylés</h2>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input v-model="login.email" label="E-mail cím"> </q-input>
              <div>
                <q-btn class="full-width" color="primary" label="Új jelszó igénylése" rounded @click="handleLogin()"></q-btn>
                <div class="text-red flex justify-center" style="margin-top: 10px">
                  {{ errorDesc }}
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
  import ILogin from "../interfaces/login.interface";
  import { VisibilityState } from "src/stores/store";
  const VisibilityStore = VisibilityState()
  //const IPHome: "192.168.0.165";
  //const IP202loc: 10.0.22.5
  //let IPB8: "10.0.58.14";
  
  const errorDesc = ref();
  
  const router = useRouter();
  
   const login = reactive<ILogin>({
    email: "",
    password: "",
    successful: false,
  });
  const handleLogin = async () => {
    try {
      if (login.email.includes("@")) {
        const response = await axios.post(`${VisibilityStore.url}/login`, {
          email: login.email,
          password: login.password,
        });
        errorDesc.value = "";
        console.log("Login successful", response.data);
        VisibilityStore.visibleOnMain = true;
        router.replace({ path: "/profile" });
      } else {
        errorDesc.value = "Nem megfelelő email cím vagy jelszó!";
      }
    } catch (error) {
      console.error("Login failed", error.response.data);
      errorDesc.value = "Nem megfelelő email cím vagy jelszó!";
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
  