<template>
    <footer class="flex">
        <img :src="require('./../assets/images/logo.png')" />
        <p>&copy; 2020 Christian Griffin</p>
        <p class="powered">
            Powered by
            <a target="_blank" href="https://vuejs.org/">
                <img class="powered-logo" :src="require('./../assets/images/vue_logo.png')" />
            </a>

            <a target="_blank" href="https://laravel.com/">
                <img class="powered-logo" :src="require('./../assets/images/laravel_logo.png')" />
            </a>
        </p>
    </footer>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class SiteFooter extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    footer {
        padding: 1rem;
        background-color: $aqua;
        align-items: center;

        a, a:hover {
            border-bottom: 0;
        }

        img {
            height: $navbarLogoHeight;
            display: inline-block;
            margin-bottom: -5px;

            &.powered-logo {
                height: $navbarLogoHeight / 2;
                margin-left: 0.5rem;
            }
        }

        p {
            display: inline-block;
            margin-bottom: 0;
            margin-left: 4rem;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .powered {
            display: flex;
            align-items: center;
        }
    }

    @media screen and (max-width: $mobileBreakpoint) {
        footer {
            img:not(.powered-logo) {
                display: none;
            }

            p:not(.powered) {
                margin-left: 0;
            }
        }
    }

    @media screen and (max-width: $tinyBreakpoint) {
        footer {
            p {
                flex-basis: 100%;
                margin-left: 0;

                &.powered {
                    margin-top: 1rem;
                }
            }
        }
    }
</style>
