<template>
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
import { ref } from 'vue'
import zaxios from '@/js/zaxios';
import myjs from '@/js/zcommon';

export default {
    setup() {
        const memberEmail = ref('');
        const memberPassword = ref('');

        const login = async () => {
        myjs.loginCheck();
        myjs.loginRedirect();

        try {
            const res = await zaxios.post('/api/member/login', {
            memberEmail: memberEmail.value,
            memberPassword: memberPassword.value,
            });

            console.log('success', res);
            const data = res.data;
            console.log('data', data);
            handleLoginSuccess();
        } catch (err) {
            console.log('err', err);
            alert('Incorrect Email or Password. Please try again.');
        }
        };

        const handleLoginSuccess = () => {
        const ref = document.referrer;

        if (ref.includes('/signup')) {
            this.$router.replace('/');
        } else {
            if ('referrer' in document) {
                window.location = referrer;
            } else {
                his.$router.push('/');
            }
        }
        };

        return {
        memberEmail,
        memberPassword,
        login,
        };
    },

    mounted() {
        this.$nextTick(() => {
        myjs.loginCheck();
        myjs.loginRedirect();
        });
    },
    /*
    The $ sign is a convention used for properties and methods that are part of the Vue instance.
    For example, $data refers to the data object of the component, $props refers to the props object, and $emit is a method used for triggering custom events.

    The $nextTick is a method provided by Vue.js that allows you to perform an action after the next DOM update cycle.
    In other words, it allows you to wait until Vue has finished updating the DOM after a data change before executing a function.
    This is useful when you want to perform operations on the DOM after it has been updated.

    Usage: The mounted hook is a method that you can define within your Vue component. When the component is mounted, this method will be called automatically.
    Purpose: It is commonly used for performing actions that require access to the component's DOM(Document Object Model) elements or for fetching data from external sources.

    Usage:
    onMounted: Used in the Composition API, within the setup function.
    mounted: Used in the Options API, outside of the setup function.
    When They Are Called:

    onMounted: The code inside onMounted runs when the component is mounted.
        It's part of the Composition API and is placed inside the setup function, which is executed during the component setup phase.
    mounted: The mounted hook in the Options API is called after the component has been mounted to the DOM.

    Access to this Context:
    onMounted: Since onMounted is part of the Composition API, it doesn't have access to this.
        Instead, the variables and functions are directly accessible within the setup function's scope.
    mounted: In the Options API, the mounted hook has access to the this context, allowing you to reference the component's instance.
    */
};

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