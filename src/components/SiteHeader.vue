<template>
    <header>

    </header>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    header {
        background-color: $aqua;
    }
</style>
