<template>
    <section class="white">
        <img :src="require('@/assets/images/about_me.png')" />
        <div class="container flex">
            <div>
                <h3>Some headline about getting to know me.</h3>
                <p>I'm a passionate and enthusiastic PHP developer, working primarily with the Laravel framework. While my focus is primarily back-end PHP, I have additional experience with JavaScript (Node.js and Vue), DevOps, and motion graphics animation.</p>
                <p>I currently live in Kitchener / Waterloo, ON, where I work at the development agency Vehikl as an intermediate back-end developer.</p>
                <p>In my spare time, I can be found conquering the galaxy in Stellaris, learning to woodwork, and being highly opinionated about Star Wars.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class AboutMe extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        position: relative;
        overflow: hidden;
    }

    img {
        position: absolute;
        left: 5%;
        bottom: -50%;
        width: 45rem;
    }

    .container > div {
        width: 50%;
        margin-left: auto;

        > div.flex div {
            flex: 1;

            ul li {
                font-size: 1.2rem;
            }
        }
    }

    @media screen and (max-width: 1740px) {
        img {
            bottom: -30%;
        }
    }

    @media screen and (max-width: 1640px) {
        img {
            left: 0;
        }
    }

    @media screen and (max-width: 1440px) {
        img {
            left: -5%;
        }
    }

    @media screen and (max-width: 1275px) {
        img {
            left: 0;
            bottom: 0;
            width: 35rem;
        }
    }

    @media screen and (max-width: 1175px) {
        img {
            left: -7%;
            bottom: 0;
            width: 40rem;
        }
    }

    @media screen and (max-width: $mobileBreakpoint) {
        img {
            display: none;
        }

        .container > div {
            width: 100%;
        }
    }

</style>
