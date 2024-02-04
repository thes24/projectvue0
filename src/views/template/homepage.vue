<template>
    <div>
        <div class="main">
            <h1>Welcome! 환영해요! 欢迎!</h1>
            <img class="gangdo" src="@/assets/images/gangdo.jpg" alt="Gangdo Image">
            <h3>좋은 말로 할때 깃허브 코드 내놔</h3>
            <router-link class="vue" to="/vue/home">
                <span>Go to Vue Home</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { zaxios } from "@/store/zaxios.js";
import { myjs } from "@/store/zcommon.js";

export default {
    mounted() {
        this.loginCheck();
    },
    methods: {
        loginCheck() {
        // Call your login check logic from zcommon.js
        // For simplicity, let's assume a method named loginCheck is available in zcommon.js
            myjs.loginCheck();
        },
    },
};
</script>

<style scoped>
.main {
    text-align: center;
    margin-top: 100px;
}

.gangdo {
    height: 25%;
    width: 25%;
}

.vue {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    padding: 30px;
    font-weight: bold;
    color: #2c3e50;
}

.vue:hover {
    color: #42b983;
}
</style>