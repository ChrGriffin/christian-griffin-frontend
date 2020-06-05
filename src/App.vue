<template>
    <div id="app">
        <site-navigation />
        <router-view />
        <site-footer />
    </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator';
    import SiteNavigation from '@/components/SiteNavigation';
    import SiteFooter from '@/components/SiteFooter';

    @Component({
        components: { SiteNavigation, SiteFooter },
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import '~reset-css/reset.css';
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
    @import './assets/scss/variables';

    #app {
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $white;
        letter-spacing: -1px;
        background-color: $white;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        border-bottom: 2px solid transparent;

        &:hover {
            border-bottom-color: $white;
        }
    }

    p {
        font-size: 1.4rem;
        letter-spacing: 0;
        line-height: 1.25;
        margin-bottom: 2rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    section {
        padding: $sectionPadding;

        @media screen and (max-width: 799px) {
            padding: $sectionPadding / 2;
        }
    }

    .container {
        max-width: 100rem;
        margin: 0 auto;
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
    }

    section.white {
        color: $black;
    }

    h3 {
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    h4 {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    h5 {
        margin-bottom: 1rem;
        letter-spacing: -0.5px;
        font-style: italic;
    }

    ul {
        list-style: disc;
        padding-left: 1.5rem;
        font-size: 1.4rem;

        li {
            padding-bottom: 0.2rem;
        }
    }
</style>
