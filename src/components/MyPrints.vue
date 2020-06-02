<template>
    <section class="white">
        <div class="container">
            <h3>Sometimes I make simple print designs.</h3>
            <div class="flex" v-match-heights="{ el: ['.box'] }">
                <print-item v-for="print in prints" :print="print" :key="print.title" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import PrintItem from '@/components/PrintItem.vue';
    import PrintRepository from '@/repositories/PrintRepository';
    import Print from '@/interfaces/Print';

    @Component({
        components: {PrintItem},
    })
    export default class MyPrints extends Vue {

        @Prop({
            default: () => {
                return new PrintRepository();
            },
        }) public printRepository!: PrintRepository;

        public prints: Print[] = [];

        public async mounted() {
            this.prints = await this.printRepository.get();
        }
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        text-align: center;
    }

    h3 {
        margin-bottom: 6rem;
    }
</style>
