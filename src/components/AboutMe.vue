<template>
    <section id="about-me" class="white">
        <div class="container flex">
            <div>
                <parallax>
                    <img :src="require('@/assets/images/about_me.png')" />
                </parallax>
            </div>

            <div>
                <h3 class="text-content">Some headline about getting to know me.</h3>
                <p>I'm a passionate and enthusiastic PHP developer, working primarily with the Laravel framework. While my focus is primarily back-end PHP, I have additional experience with JavaScript (Node.js and Vue), DevOps, and motion graphics animation.</p>
                <p>I currently live in Kitchener / Waterloo, ON, where I work at the development agency Vehikl as an intermediate back-end developer.</p>
                <p>In my spare time, I can be found conquering the galaxy in Stellaris, learning to woodwork, and being highly opinionated about Star Wars.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Parallax from '@/components/Parallax.vue';

    @Component({
        components: {Parallax},
    })
    export default class AboutMe extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        position: relative;
        overflow: hidden;
    }

    .parallax-container {
        position: absolute;
        top: -15rem;
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
        .parallax-container {
            left: 0;
        }
    }

    @media screen and (max-width: 1440px) {
        .parallax-container {
            left: -5rem;
        }
    }

    @media screen and (max-width: 1275px) {
        .parallax-container {
            top: -10rem;
            left: 0;

            img {
                width: 80%;
            }
        }
    }

    @media screen and (max-width: 1175px) {
        .parallax-container {
            left: -5rem;
        }
    }

    @media screen and (max-width: $mobileBreakpoint) {
        .parallax-container {
            display: none;
        }

        .container > div {
            width: 100%;
        }
    }

</style>
