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
import { ref, computed } from 'vue';
import NavBar from '@/components/NavBarV.vue';
import VueBar from '@/components/VueNavV.vue';

export default {
  components: {
    NavBar,
    VueBar,
  },
  setup() {
    const isLoggedIn = ref(false);
    const memberId = ref('123');
    const memberName = ref('John');

    const isVuePage = computed(() => {
      return window.location.pathname.startsWith('/vue/');
    });

    return {
      isLoggedIn,
      memberId,
      memberName,
      isVuePage,
    };
  },
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