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
    @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
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

    section, header {
        padding: $sectionPadding;
        position: relative;

        @media screen and (max-width: 799px) {
            padding: $sectionPadding / 2;
        }

        @media screen and (max-width: $tinyBreakpoint) {
            padding: $sectionPadding / 4;
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
        margin-bottom: 6rem;

        @media screen and (max-width: $mobileBreakpoint) {
            margin-bottom: 4rem;
        }

        @media screen and (max-width: $tinyBreakpoint) {
            margin-bottom: 2rem;
        }
    }

    h3.text-content {
        margin-bottom: 3rem;

        @media screen and (max-width: $mobileBreakpoint) {
            margin-bottom: 2rem;
        }

        @media screen and (max-width: $tinyBreakpoint) {
            margin-bottom: 2rem;
        }
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

    .api-indicator {
        position: absolute;
        top: 1rem;
        right: 1rem;

        a {
            font-size: 0.8rem;
            opacity: 0.4;
            font-style: italic;
            font-weight: normal;
            color: $white;
            border-bottom: 0;

            &:hover {
                border-bottom: 0;
            }

            span {
                padding-left: 4px;
            }
        }
    }
</style>
