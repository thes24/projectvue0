<template>
    <div class="about">
        <h2>This is a Demo Project of a newbie programmer</h2>
        <div>
            <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Badge">
            <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" alt="MariaDB Badge">
            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js Badge">
            <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack Badge">
            <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS Badge">
            <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="Vue Badge">
        </div>
        <img class="cat" src="../../assets/images/ddabongcat.png" alt="bCat">
        <p>For more info pls contact throught victoryfw24@gmail.com</p>
        <div>
            <h3>You can see my code in</h3>
            <a href="https://github.com/thes24">
            <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge">
            </a>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import myjs from '@/js/zcommon';

export default {
    setup() {
        const main = () => {
        myjs.loginCheck();
        };

        onMounted(() => {
            main();
        });

        return {};
    },
};
</script>

<style scoped>
.about {
    text-align: center;
    margin-top: 70px;
}

.cat {
    height: 30%;
    width: 30%;
}

.margin-top100 {
    margin-top: 100px;
}
</style>
