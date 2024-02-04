<template>
    <nav class="topnav">
        <div class="left">
            <a href="/">Home</a>
            <a href="/board">Board</a>
            <a href="/about">About</a>
        </div>
        <div class="right">
            <a class="signlog" id="signup-btn" href="/signup">SignUp</a>
            <a class="active signlog" id="login-btn" href="/login">Login</a>
        </div>
    </nav>
    <div class="signlog-wrap">
        <div class="signlog-label">LOG IN</div>
        <div class="signlog-form">
            <input v-model="memberEmail" type="text" placeholder="Email"> <br>
            <input v-model="memberPassword" type="password" placeholder="Password"> <br>
            <button @click="login" class="signlog-btn">LOG IN</button>
        </div>
    </div>
</template>

<script>
import { myjs } from 'src/store/zcommon.js';
import { swaxios } from 'src/store/zaxios.js';

export default {
    data() {
        return {
            memberEmail: '',
            memberPassword: '',
        }
    },
    methods: {
        login() {
            myjs.loginCheck();
            myjs.loginRedirect();

            swaxios.post('/api/member/login', {
                memberEmail: this.memberEmail,
                memberPassword: this.memberPassword,
            })
            .then(function (res) {
                console.log('success', res);
                return res.data;
            })
            .then(function (data) {
                console.log('data', data);
                this.handleLoginSuccess();
            })
            .catch(function (err) {
                console.log('err', err);
                alert('Incorrect Email or Password. Please try again.')
            });
        },
        handleLoginSuccess() {
            const ref = document.referrer;

            if (ref.includes('/signup')) {
                this.$router.push('/');
            } else {
                if ('referrer' in document) {
                    window.location = referrer;
                } else {
                    this.$router.push('/');
                }
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            myjs.loginCheck();
            myjs.loginRedirect();
        });
    },
}

</script>

<style>

</style>