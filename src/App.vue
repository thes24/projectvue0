<template>
  <div>
    <template v-if="isVuePage">
      <VueBar></VueBar>
    </template>
    <template v-else>
      <NavBar :isLoggedIn="isLoggedIn" :memberId="memberId" :memberName="memberName" />
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import NavBar from '@/components/NavBarV.vue';
import VueBar from '@/components/VueNavV.vue';

export default {
  components: {
    NavBar,
    VueBar,
  },
  data() {
    return {
      isLoggedIn: false, // Set to true when the user is logged in
      userId: '123', // Set to the user's ID when logged in
      userName: 'John', // Set to the user's name when logged in
    };
  },
  computed: {
    isVuePage() {
      return this.$route.path.startsWith("/vue/");
    }
  }
};
</script>

<style>
@font-face {
  font-family: 'Noto-Sans';
  font-weight: 400;
  src: url(./assets/fonts/NotoSansKR-VariableFont_wght.ttf);
}

#app {
  font-family: 'Noto-Sans';
}
</style>