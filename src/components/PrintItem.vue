<template>
    <extruded-box background-color="white">
        <div>
            <img :src="print.image" :alt="`${print.title} photo`" />
            <h4>{{ print.title }}</h4>
            <h5>${{ print.price.toFixed(2) }} USD</h5>
        </div>
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

        img {
            max-width: calc(100%);
            //margin: -1rem -1rem 1rem -1rem;
            margin-bottom: 1rem;
        }

        h4 {
            margin-bottom: 0.5rem;
        }

        h5 {
            margin-bottom: 0;
        }
    }
</style>
