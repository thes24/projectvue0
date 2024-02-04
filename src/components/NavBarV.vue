<template>
    <nav class="topnav">
        <div class="left">
            <router-link to="/">Home</router-link>
            <router-link to="/board">Board</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <div class="right">
            <router-link v-if="!isLoggedIn" class="signlog" id="signup-btn" to="/signup">SignUp</router-link>
            <router-link v-if="!isLoggedIn" class="signlog" id="login-btn" to="/login">Login</router-link>
            <a v-if="isLoggedIn" class="signlog" id="signup-btn" @click="logout">Logout</a>
            <router-link v-if="isLoggedIn" class="signlog" id="login-btn" :to="'/mypage/' + memberId">{{ memberName }}</router-link>
        </div>
    </nav>
</template>

<script>
import { zaxios } from "@/store/zaxios.js";
import { myjs } from "@/store/zcommon.js";

export default {
    props: {
        isLoggedIn: Boolean,
        memberId: String,
        memberName: String,
    },
    methods: {
        logout() {
            myjs.logout();
        },
    },
};
</script>

<style scoped>
.topnav {
    display: flex;
    flex-direction: row;
    background-color: black;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
    color: whitesmoke;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: lightgray;
    color: black;
    cursor: pointer;
}

/* Add a color to the active/current link */
.topnav a.router-link-active {
    background-color: #03c75b;
    color: white;
}

.left, .right {
    display: flex;
    flex-direction: row;
}

.right {
    margin-left: auto;
}

.left {
    margin-right: auto;
}
</style>
