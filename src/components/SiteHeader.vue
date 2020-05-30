<template>
    <header>
        <div class="container flex">
            <div>
                <h1>Hi, I'm Christian.</h1>
                <h2>I'm a web developer with a passion for PHP, Laravel, Vue.js, and Typescript.</h2>
            </div>

            <img :src="require('./../assets/images/header_profile.png')" />
        </div>
    </header>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    header {
        background-color: $aqua;
        position: relative;
        overflow: hidden;

        .container div {
            width: calc(50% - 6rem);

            h1 {
                margin-top: 16rem;
                font-size: 4rem;
            }

            h2 {
                margin-top: 1rem;
                margin-bottom: 16rem;
                font-size: 1.8rem;
            }
        }

        img {
            position: absolute;
            right: 10%;
            z-index: 998;
        }
    }
</style>
