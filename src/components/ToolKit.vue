<template>
    <section id="tool-belt" class="white">
        <div class="container flex">
            <div>
                <parallax>
                    <img :src="require('@/assets/images/tool_belt.png')" />
                </parallax>
            </div>
            <div>
                <h3 class="text-content">I solve problems using a wide range of tools.</h3>
                <p>Here, I will write something about tools. I will probably expand on how having multiple tools at your disposal is helpful for solving problems, like how PHP is good for some issues and Node.js is better for others. Maybe it will be somewhat insightful.</p>
                <div class="flex">
                    <div>
                        <h4>Third-Party Tools</h4>
                        <ul>
                            <li>Netlify</li>
                            <li>CodeShip</li>
                            <li>Firebase</li>
                            <li>Github</li>
                            <li>Bitbucket</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Methodologies</h4>
                        <ul>
                            <li>Object-Oriented Programming</li>
                            <li>Test-Driven Development</li>
                            <li>Agile</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Languages & Frameworks</h4>
                        <ul>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>Yii</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Vue.js</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Parallax from '@/components/Parallax.vue';

    @Component({
        components: {Parallax},
    })
    export default class ToolKit extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        position: relative;
        overflow: hidden;
    }

    .parallax-container {
        position: absolute;
        top: -20rem;
        left: 0;
    }

    .container > div {
        width: 50%;

        > div.flex {
            flex-wrap: nowrap;

            div {
                flex: 1;
                padding: 0 1rem;

                &:first-child {
                    padding-left: 0;
                }

                &:last-child {
                    padding-right: 0;
                }

                ul li {
                    font-size: 1.2rem;
                }
            }
        }
    }

    @media screen and (max-width: 1740px) {
        .parallax-container {
            left: -5rem;
        }
    }

    @media screen and (max-width: 1440px) {
        .parallax-container {
            left: -10rem;
        }
    }

    @media screen and (max-width: 1275px) {
        .parallax-container {
            top: -15rem;
            left: -5rem;

            img {
                width: 80%;
            }
        }
    }

    @media screen and (max-width: 1175px) {
        .parallax-container {
            left: -7.5rem;
        }
    }

    @media screen and (max-width: $mobileBreakpoint) {
        .parallax-container {
            display: none;
        }
    }

    @media screen and (max-width: $mobileBreakpoint) {
        .container > div {
            width: 100%;
        }

        .parallax-container {
            display: none;
        }
    }

    @media screen and (max-width: $tinyBreakpoint) {
        .container > div > div.flex {
            flex-wrap: wrap;

            div {
                flex-basis: 100%;
                padding: 0 0 2rem 1rem;

                &:first-child {
                    padding-left: 1rem;
                }

                &:last-child {
                    padding-bottom: 0;
                }
            }
        }
    }
</style>
