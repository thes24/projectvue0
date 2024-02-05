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
import { onMounted } from 'vue';
import zaxios from '@/js/zaxios';
import myjs from '@/js/zcommon';

export default {
    setup() {
        const loginCheck = () => {
            myjs.loginCheck();
        };
        onMounted(loginCheck);
        return {
            loginCheck,
        }
    }
};
/*
The setup function returns an object containing the properties and methods that you want to expose to the template.
By returning these properties and methods from the setup function, you make them accessible in the template,
and Vue will automatically handle their reactivity. The setup function is executed once during the component's setup phase,
and the returned values persist throughout the component's lifecycle.
 */
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