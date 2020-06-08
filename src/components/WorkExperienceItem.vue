<template>
    <extruded-box background-color="grey-blue">
        <a target="_blank" :href="job.url">
            <h4>{{ job.company }}</h4>
            <h5>{{ timeframeString }}</h5>
            <p>{{ job.description }}</p>
        </a>
    </extruded-box>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ExtrudedBox from '@/components/ExtrudedBox.vue';
    import Job from '@/interfaces/Job';
    import {dateToMonthString} from '@/helpers/dates';

    @Component({
        components: {ExtrudedBox},
    })
    export default class WorkExperienceItem extends Vue {
        @Prop() public job!: Job;

        get timeframeString(): string {
            return `${dateToMonthString(this.job.from)} - ${(this.job.to === null ? 'Present' : dateToMonthString(this.job.to))}`;
        }
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

    @media screen and (max-width: $mobileBreakpoint) {
        .box {
            flex-basis: 100%;
            width: 100%;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 2rem;
        }
    }
</style>
