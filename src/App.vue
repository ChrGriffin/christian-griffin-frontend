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

    header, section {
        padding: $sectionPadding;
    }

    header {
        padding-top: $sectionPadding * 2;
    }

    .container {
        max-width: 100rem;
        margin: 0 auto;
    }

    .flex {
        display: flex;
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
