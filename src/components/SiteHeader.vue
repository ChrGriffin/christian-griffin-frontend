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
    export default class SiteHeader extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    header {
        background-color: $aqua;
        position: relative;
        overflow: hidden;
        padding: 4rem 2rem 2rem;

        .container div {
            width: calc(50% - 6rem);

            h1 {
                margin-top: 16rem;
                font-size: 4rem;
                letter-spacing: -2px;
                font-weight: bold;
            }

            h2 {
                margin-top: 1rem;
                margin-bottom: 16rem;
                font-size: 1.8rem;
            }
        }

        img {
            position: absolute;
            right: 5%;
            z-index: 998;
        }
    }

    @media screen and (max-width: 1440px) {
        header {
            .container div {
                width: calc(50% - 4rem);
            }

            img {
                right: 0;
            }
        }
    }

    @media screen and (max-width: 1315px) {
        header {
            .container div {
                width: calc(50% - 2rem);
            }

            img {
                right: -5%;
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

            img {
                width: 40%;
                right: 5%;
                bottom: -15%;
            }
        }
    }

    @media screen and (max-width: $navbarBreakpoint) {
        header {
            .container div {
                width: 65%;

                h1 {
                    font-size: 3rem;
                    margin-top: 5rem;
                }

                h2 {
                    font-size: 1.4rem;
                    margin-bottom: 8rem;
                }
            }

            img {
                width: 40%;
                right: 0;
                bottom: -35%;
            }
        }
    }

    @media screen and (max-width: 860px) {
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

            img {
                display: none;
            }
        }
    }
</style>
