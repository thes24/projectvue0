<template>
    <nav class="topnav">
        <div class="left">
            <a href="/">Home</a>
            <a href="/board">Board</a>
            <a href="/about">About</a>
        </div>
        <div class="right">
            <a class="log" id="signup-btn" href="/signup">SignUp</a>
            <a class="active log" id="login-btn" href="/login">Login</a>
        </div>
    </nav>
    <div class="log-wrap">
        <div class="log-label">LOG IN</div>
        <div class="log-form">
            <input v-model="memberEmail" type="text" placeholder="Email"> <br>
            <input v-model="memberPassword" type="password" placeholder="Password"> <br>
            <button @click="login" class="log-btn">LOG IN</button>
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
    /*
    Usage: The mounted hook is a method that you can define within your Vue component. When the component is mounted, this method will be called automatically.
    Purpose: It is commonly used for performing actions that require access to the component's DOM(Document Object Model) elements or for fetching data from external sources.
    */
}

</script>

<style scoped>
.log-wrap {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.log-label {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: auto;
    text-align: center;
    writing-mode: vertical-rl;
    vertical-align: middle;
    text-orientation: upright;
    font-size: 25px;
    font-weight: bolder;
    color: black;
    background-color: #03c75b;
    border-radius: 15px 0px 0px 15px;
    min-height: 255px;
    width: 70px;
    padding: 25px;
}

.log-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    background-color: #3c3c3c;
    border-radius: 0px 15px 15px 0px;
    max-height: 255px;
    min-height: 255px;
    width: 350px;
    padding: 25px;
}

.log-form input {
    color: whitesmoke;
    background-color: #646464;
    border: none;
    border-bottom: 1px solid black;
    width: 220px;
    padding: 10px;
}

.log-form input:focus {
    border-color: #03c75b;
    outline: none;
}

.log-form input::placeholder {
    color: #03c75b;
}

.log-btn {
    color: black;
    background-color: rgb(100, 100, 100);
    padding: .375rem .75rem;
    font-size: small;
    border: 2px inset #099749;
    border-radius: 5px;
}

.log-btn:hover {
    background-color: #03c75b;
    font-weight: 900;
    cursor: pointer;
}
</style>