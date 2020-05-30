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
    }

    a {
        text-decoration: none;
        font-weight: bold;
        border-bottom: 2px solid transparent;

        &:hover {
            border-bottom-color: $white;
        }
    }

    header, section {
        padding: $sectionPadding;
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
