<template>
    <section class="white">
        <div class="container flex">
            <div>
                <h3>I solve problems using a wide range of tools.</h3>
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

    @Component
    export default class ToolKit extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    .container > div {
        width: 50%;
        margin-left: auto;

        > div.flex div {
            flex: 1;

            ul li {
                font-size: 1.2rem;
            }
        }
    }

    @media screen and (max-width: $mobileBreakpoint) {
        .container > div {
            width: 100%;
        }
    }
</style>
