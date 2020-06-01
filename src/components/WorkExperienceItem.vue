<template>
    <extruded-box background-color="grey-blue">
        <div>
            <h4>{{ job.company }}</h4>
            <h5>{{ job.from.toDateString() }} - {{ (job.to === null ? 'Present' : job.to.toDateString()) }}</h5>
            <p>{{ job.description }}</p>
        </div>
    </extruded-box>
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

        h4 {
            margin-bottom: 0.5rem;
        }

        h5 {
            margin-bottom: 1rem;
            letter-spacing: -0.5px;
            font-style: italic;
        }

        p {
            font-size: 1rem;
        }
    }
</style>
