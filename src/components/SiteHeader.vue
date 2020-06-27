<template>
    <header id="header">
        <div class="container flex">
            <div class="title">
                <h1>Hi, I'm Christian.</h1>
                <h2>I'm a web developer with a passion for PHP, Laravel, Vue.js, and Typescript.</h2>
            </div>

            <div>
                <parallax>
                    <img :src="require('./../assets/images/header_profile.png')" />
                </parallax>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Parallax from '@/components/Parallax.vue';

    @Component({
        components: {Parallax},
    })
    export default class SiteHeader extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    header {
        background-color: $aqua;
        position: relative;
        overflow: hidden;
        padding: 0;
        height: 100vh;

        .container {
            align-items: center;
            height: 100vh;

            > div {
                width: calc(50% - 2rem);

                h1 {
                    font-size: 4rem;
                    letter-spacing: -2px;
                    font-weight: bold;
                }

                h2 {
                    margin-top: 1rem;
                    font-size: 1.8rem;
                }
            }
        }

        .parallax-container {
            position: absolute;
            right: 15rem;
            z-index: 998;
            top: -10rem;

            img {
                width: 120%;
            }
        }
    }

    @media screen and (max-width: 1440px) {
        header {
            .container div {
                width: 50%;
            }
        }
    }

    @media screen and (max-width: 1315px) {
        header {
            .parallax-container {
                right: 5rem;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        header {

            .container div {
                width: 50%;

                h1 {
                    font-size: 3rem;
                    margin-top: 12rem;
                }

                h2 {
                    font-size: 1.4rem;
                    margin-bottom: 12rem;
                }
            }

            .parallax-container {
                bottom: -15rem;

                img {
                    width: 120%;
                }
            }
        }
    }

    @media screen and (max-width: $mobileBreakpoint) {
        header {

            .container div {
                width: 100%;
                text-align: center;

                h1 {
                    font-size: 3rem;
                    margin-top: 5rem;
                }

                h2 {
                    font-size: 1.4rem;
                    margin-bottom: 8rem;
                }
            }

            .parallax-container {
                display: none;
            }
        }
    }
</style>
