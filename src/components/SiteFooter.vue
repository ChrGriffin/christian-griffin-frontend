<template>
    <footer class="flex">
        <img :src="require('./../assets/images/logo.png')" />
        <p>&copy; 2020 Christian Griffin</p>
        <p class="flex">Powered by </p>
        <a target="_blank" href="https://vuejs.org/">
            <img class="powered-logo" :src="require('./../assets/images/vue_logo.png')" />
        </a>
        <a target="_blank" href="https://firebase.google.com/">
            <img class="powered-logo" :src="require('./../assets/images/firebase_logo.png')" />
        </a>
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
    }
</style>
