<template>
    <div>
        <div class="nav-wrapper">
            <img :src="require('./../assets/images/logo.png')" @click="toggleActive" />
            <nav :class="(active ? 'active' : '')">
                <ul>
                    <li><a href="#" v-scroll-to="'#tool-belt'" @click="toggleActive">Toolbelt</a></li>
                    <li><a href="#" v-scroll-to="'#experience'" @click="toggleActive">Experience</a></li>
                    <li><a href="#" v-scroll-to="'#about-me'" @click="toggleActive">About</a></li>
                    <li><a href="#" v-scroll-to="'#contact-me'" @click="toggleActive">Contact</a></li>
                    <li><a href="#" v-scroll-to="'#prints'" @click="toggleActive">Prints</a></li>
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
        public active: boolean = false;

        public toggleActive(): void {
            this.active = !this.active;
        }
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
        width: 100vw;
        overflow: hidden;

        img {
            height: $navbarLogoHeight;
            display: inline-block;
            position: relative;
            z-index: 999;
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
                position: fixed;
                top: 0;
                bottom: 0;
                left: 100%;
                background-color: $aqua;
                text-align: center;
                padding-top: 10vh;
                z-index: 998;
                width: 100%;
                transition: left 0.25s ease;

                &.active {
                    left: 0;
                    transition: left 0.25s ease;
                }

                ul li {
                    display: block;
                    padding-top: 2rem;

                    a {
                        font-size: 2rem;
                    }
                }
            }
        }
    }
</style>
