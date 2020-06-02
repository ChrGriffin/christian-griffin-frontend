<template>
    <section>
        <div class="container flex">
            <div>
                <h3>Feel free to get in touch.</h3>
                <form>
                    <div>

                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class ContactMe extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        background-color: $darkGreyBlue;
    }
</style>
