<template>
    <nav class="topnav">
        <div class="left">
            <a href="/">Home</a>
            <a href="/board">Board</a>
            <a href="/about">About</a>
        </div>
        <div class="right">
            <a class="signlog active" id="signup-btn" href="/signup">SignUp</a>
            <a class="signlog" id="login-btn" href="/login">Login</a>
        </div>
    </nav>
    <div class="signlog-wrap">
        <div class="signlog-label">SIGN UP</div>
        <div class="signlog-form">
            <input v-model="memberEmail" type="text" id="member-email" placeholder="Email"> <br>
            <input v-model="memberPassword" type="password" id="member-password" placeholder="Password"> <br>
            <input v-model="memberPasswordCheck" type="password" id="member-password-check" placeholder="Confirm Password"> <br>
            <input v-model="memberName" type="text" id="member-name" placeholder="Name"> <br>
            <button @click="signup" class="signlog-btn">SIGN UP</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            memberEmail: '',
            memberPassword: '',
            memberPasswordCheck: '',
            memberName: '',
        };
    },
    methods: {
        async signup() {
            if (memberEmail == '' || memberPassword == '' || memberPasswordCheck == '' || memberName == '') {
                alert('Please fill in all required fields.');
                return;
            }

            if (memberPassword !== memberPasswordCheck) {
                alert('Passwords do not match. Please try again.');
                return;
            }

            try {
                const isEmailAvailable = await this.emailCheck(this.memberEmail);
            } catch (err) {
                alert('Email already in use. Please choose a different email.');
            }

            swaxios.post('api/member/signup', {
                memberEmail: this.memberEmail,
                memberPassword: this.memberPassword,
                memberName: this.memberName,
            })
            .then((res) => {
                console.log('Sign Up Success', res);
                return res.data;
            })
            .then((data) => {
                console.log('data', data);
                this.$router.push('/login');
            })
            .catch((err) => {
                console.log('error', err);
            });
        },
        async emailCheck(email) {
            try {
                return swaxios.post('api/member/check-email', { memberEmail : email })
                .then(res => {
                    return res.status == 200;
                })
            } catch (err) {
                alert('Email already in use. emailCheck()');
            }
        }
    },
}
</script>

<style scoped>
.signlog-wrap {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.signlog-label {
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

.signlog-form {
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

.signlog-form input {
    color: whitesmoke;
    background-color: #646464;
    border: none;
    border-bottom: 1px solid black;
    width: 220px;
    padding: 10px;
}

.signlog-form input:focus {
    border-color: #03c75b;
    outline: none;
}

.signlog-form input::placeholder {
    color: #03c75b;
}

.signlog-btn {
    color: black;
    background-color: rgb(100, 100, 100);
    padding: .375rem .75rem;
    font-size: small;
    border: 2px inset #099749;
    border-radius: 5px;
}

.signlog-btn:hover {
    background-color: #03c75b;
    font-weight: 900;
    cursor: pointer;
}
</style>