<template>
    <div id="app">
        <site-navigation />
        <router-view />
    </div>
</template>

<style lang="scss">
    @import '~reset-css/reset.css';
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
    @import './assets/scss/variables';

    #app {
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $white;
        min-height: 3000px;
        letter-spacing: -1px;
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
    }

    section {
        padding: $sectionPadding;
    }

    .container {
        max-width: 100rem;
        margin: 0 auto;
    }

    .flex {
        display: flex;
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

    ul {
        list-style: disc;
        padding-left: 1.5rem;
        font-size: 1.4rem;

        li {
            padding-bottom: 0.2rem;
        }
    }
</style>
<script>
    import { Component, Vue } from 'vue-property-decorator';
    import SiteNavigation from '@/components/SiteNavigation';

    @Component({
        components: { SiteNavigation },
    })
    export default class App extends Vue {
    }
</script>
