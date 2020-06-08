<template>
    <div>
        <div class="nav-wrapper">
            <a href="#" class="logo" v-scroll-to="'#header'">
                <img :src="require('./../assets/images/logo.png')" />
            </a>
            <nav>
                <ul>
                    <li><a href="#" v-scroll-to="'#tool-belt'">Toolbelt</a></li>
                    <li><a href="#" v-scroll-to="'#experience'">Experience</a></li>
                    <li><a href="#" v-scroll-to="'#about-me'">About</a></li>
                    <li><a href="#" v-scroll-to="'#contact-me'">Contact</a></li>
                    <li><a href="#" v-scroll-to="'#prints'">Prints</a></li>
                </ul>
            </nav>
        </div>

        <div class="nav-background"></div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class SiteNavigation extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    .nav-wrapper {
        padding: 1rem;
        display: flex;
        align-items: center;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;

        .logo {
            border-bottom: 0;

            &:hover {
                border-bottom: 0;
            }

            img {
                height: $navbarLogoHeight;
                display: inline-block;
                z-index: 999;
            }
        }

        nav {
            display: inline-block;
            z-index: 999;

            ul {
                padding-left: 0;

                li {
                    display: inline-block;
                    margin-left: 4rem;

                    a {
                        text-decoration: none;
                        color: $white;
                        font-weight: bold;
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }

    .nav-background {
        background-color: $aqua;
        position: fixed;
        z-index: 997;
        width: 100%;
        top: 0;
        left: 0;
        height: calc(2rem + #{$navbarLogoHeight});
    }

    @media screen and (max-width: $mobileBreakpoint) {

        .nav-background {
            display: none;
        }

        .nav-wrapper {
            background-color: transparent;
            display: inline-block;
            padding: 0;
            top: 1rem;
            right: 1rem;
            left: unset;
            width: auto;

            img {
                height: 65px;
            }

            nav {
                display: none;
            }
        }
    }
</style>
