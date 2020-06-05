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
            margin: -1rem;
        }
    }
</style>
