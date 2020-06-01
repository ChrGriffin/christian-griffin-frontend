<template>
    <div class="work-experience-item">
        <extruded-box background-color="grey-blue">
            <div class="flex">
                <img />
                <div>
                    <h4>{{ job.company }}</h4>
                </div>
            </div>
        </extruded-box>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ExtrudedBox from '@/components/ExtrudedBox.vue';
    import Job from '@/interfaces/Job';

    @Component({
        components: {ExtrudedBox},
    })
    export default class WorkExperienceItem extends Vue {
        @Prop() public job!: Job;
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    .work-experience-item {
        flex: 1;
        margin: 0 2rem;
        color: $black;
        text-align: left;

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }
    }
</style>
