<template>
    <extruded-box background-color="white">
        <a target="_blank" :href="print.url">
            <img :src="print.image" :alt="`${print.title} photo`" />
        </a>
    </extruded-box>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ExtrudedBox from '@/components/ExtrudedBox.vue';
    import Print from '@/interfaces/Print';

    @Component({
        components: {ExtrudedBox},
    })
    export default class PrintItem extends Vue {
        @Prop() public print!: Print;
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    .box {
        flex: 1;
        margin: 0 1rem;
        color: $black;
        text-align: left;

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }

        a {
            display: block;
            color: $black;
            border-bottom: 0;
            font-weight: normal;

            &:hover {
                border-bottom: 0;
            }
        }

        img {
            max-width: calc(100% + 2rem);
            margin: -1rem -1rem calc(-1rem - 2px) -1rem;
        }
    }

    @media screen and (min-width: 560px) and (max-width: $mobileBreakpoint) {
        .box {
            flex: unset;
            width: calc(50% - 2rem - 26px);
            margin-bottom: 2rem;

            &:nth-of-type(odd) {
                margin-left: 0;
            }

            &:nth-of-type(even) {
                margin-right: 0;
            }

            &:nth-child(n+3) {
                margin-bottom: 0;
            }
        }
    }

    @media screen and (max-width: 559px) {
        .box {
            flex: unset;
            width: calc(100%);
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 2rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>
