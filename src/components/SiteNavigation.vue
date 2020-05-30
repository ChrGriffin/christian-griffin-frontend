<template>
    <div>
        <img :src="require('./../assets/images/logo.png')" />
        <nav>
            <ul>
                <li><a href="">Toolbelt</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Prints</a></li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    div {
        background-color: $aqua;
        padding: 1rem;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        img {
            height: 50px;
            display: inline-block;
        }

        nav {
            display: inline-block;

            ul {

                li {
                    display: inline-block;
                    margin-left: 4rem;

                    a {
                        text-decoration: none;
                        color: $white;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {

        div {
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
