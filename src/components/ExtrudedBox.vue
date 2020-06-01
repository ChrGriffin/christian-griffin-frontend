<template>
    <div :class="`box background-${this.backgroundColor}`">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ExtrudedBox extends Vue {
        @Prop() public backgroundColor!: string;
        @Prop() public borderColor!: string;
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    .box {
        padding: 1rem;
        background-color: $white;
        position: relative;

        &::before {
            display: block;
            content: "";
            position: absolute;
            width: 21px;
            height: 21px;
            top: -25px;
            left: -13px;
            transform: rotate(45deg);
        }

        &::after {
            display: block;
            content: "";
            position: absolute;
            width: 21px;
            height: 21px;
            bottom: -13px;
            right: -25px;
            transform: rotate(45deg);
        }

        &.background-grey-blue {

            border-top: 10px solid $darkGreyBlue;
            border-right: 10px solid $darkGreyBlue;

            &::before {
                background-color: $greyBlue;
            }

            &::after {
                background-color: $greyBlue;
            }
        }
    }
</style>
