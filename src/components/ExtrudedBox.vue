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
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    .box {
        padding: 1rem;
        position: relative;

        &::before {
            display: block;
            content: "";
            position: absolute;
            width: 21px;
            height: 21px;
            top: -24px;
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
            right: -24px;
            transform: rotate(45deg);
        }

        &.background-grey-blue {

            background-color: $white;
            border-right: 10px solid $darkGreyBlue;
            border-top: 10px solid $grey;

            &::before {
                background-color: $greyBlue;
            }

            &::after {
                background-color: $greyBlue;
            }
        }

        &.background-white {

            background-color: $grey;
            border-right: 10px solid $darkGreyBlue;
            border-top: 10px solid $greyBlue;

            &::before {
                background-color: $white;
            }

            &::after {
                background-color: $white;
            }
        }
    }
</style>
