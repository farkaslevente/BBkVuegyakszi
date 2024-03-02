<script setup lang="ts"></script>

<template>
  <!-- <q-page> -->
  <!-- <div class="column flex-start" style="min-height: inherit">
      <div class="row flex-center" style="max-height: 100px">
        <img
          alt="Jedlik logo"
          src="https://camo.githubusercontent.com/e5caed68c3af7113278e7cd0b717753d64e0f6d4f4582a04c96b4595b44ec8df/68747470733a2f2f6d656469612e74656e6f722e636f6d2f326c342d683432716e6d6341414141692f746f6f74686c6573732d64616e63696e672d746f6f74686c6573732e676966"
          style="max-height: 100px"
        />
        <h2>Megy az oldal gecóóó</h2>
      </div>
      <h6>Login</h6>
    </div> -->
  <img
    class="backgroundImage"
    v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.sm }"
    src="../assets/background.png"
  />
  <div class="row flex-center" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img class="responsive" src="../assets/smalllogo.png" />
    </div>
    <div
      class="col-12 col-md-6 flex content center"
      v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.sm }"
    >
      <q-card v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }">
        <q-card-section>
          <q-avatar class="absolute-center shadow-10" size="100px">
            <img alt="avatar" src="../assets/avatar-graduate-graduation-svgrepo-com.svg" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class="text-h2 text-uppercase q-my-none text-weight regular">Login</h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input label="Username"> </q-input>
            <q-input label="Password" type="password"> </q-input>
            <div>
              <q-btn class="full-width" color="primary" label="Login" rounded></q-btn>
              <div class="text-center q-mt-sm q-gutter-lg column">
                <router-link class="text-blue" to="/register">Nincs még fiókja? Regisztráljon!</router-link>
                <router-link class="text-blue" to="/">Elfelejtette jelszavát?</router-link>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <!-- </q-page> -->
</template>

<style lang="scss" scoped>
.backgroundImage {
  position: fixed;
  height: auto;
  width: auto;
  left: 0;
  bottom: 0;
  z-index: -1;
  filter: blur(8px);
  -webkit-filter: blur(8px);
}
h2 {
  font-size: 3vw;
}
#wholePage {
  background-image: url("../assets/Jedlik_big.png");
  background-repeat: no-repeat;

  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-image {
  /* The image used */
  background-image: url("Jedlik_big.png");

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
